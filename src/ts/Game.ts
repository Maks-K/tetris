import {Loader} from "./Loader";
import {Model, TransformOptions} from "./Model";
import {scaleToWindow} from "./utils/scateToWindow";
import {FallingTetromino} from "./components/FallingTetromino";
import {InfoPanel} from "./components/InfoPanel";
import {Ticker} from "./utils/Ticker";
import {tickerConfig} from "./config/ticker";
import {layout} from "./config/layout";

export default class Game {

    app: PIXI.Application;
    ticker: Ticker;
    fallingTetromino: FallingTetromino;
    infoPanel: InfoPanel;
    model: Model;

    constructor() {
        this.app = this.initApp();

        new Loader(this.app, () => this.start());
    }

    initApp() {
        const app = new PIXI.Application({
            width: layout.width,
            height: layout.height
        });
        window.document.body.appendChild(app.view);

        // ensuring the game covers entire screen (with aspect ratio) on game start:
        scaleToWindow(app.view);

        // ensuring the game covers entire screen on screen dimensions change:
        window.addEventListener("resize", () => {
            scaleToWindow(app.view);
        });

        return app;
    }

    async start() {
        this.ticker = new Ticker(tickerConfig);
        this.model = new Model(this.app.stage, () => this.reset());
        this.fallingTetromino = new FallingTetromino(this.app.stage);
        this.infoPanel = new InfoPanel(this.app.stage);

        this.setupInteraction();

        // infinite async loop of consecutive game states:
        while (true) {
            await this.state();
        }
    }

    state() {
        return this.model.grid.hasWinRows() ?
            this.playWin() :
            this.move();
    }

    /**
     * Single cell downwards motion (and falling item reset, if needed)
     */
    move() {
        if (this.model.fallingTetromino === null) {
            this.fallingTetromino.reset(this.infoPanel.getNextShape());
            this.infoPanel.updateNextTetromino();
            this.model.fallingTetromino = this.fallingTetromino;
        }

        this.model.transform(TransformOptions.DOWN);

        return new Promise<void>(resolve => setTimeout(resolve, this.ticker.getTickDuration()));
    }

    /**
     * Highlight currently winning rows:
     */
    playWin() {
        // set winning rows on matrix:
        this.model.grid.applyWinRows();
        // and render them:
        this.model.drawGameState();
        // update info;
        this.infoPanel.updateValues(this.model.grid.getFilledRows().length);
        // update game speed:
        this.ticker.setCurrentLevel(this.infoPanel.getLevel());

        return new Promise<void>(resolve => setTimeout(() => {
            this.model.grid.clearWinRows();
            // interaction is disabled during win presentation, enabling once done:
            this.model.setInteractive(true);
            resolve();
        }, this.ticker.getTickDuration()));
    }

    /**
     * Setting initial game state:
     */
    reset() {
        this.model.grid.reset();
        this.ticker.setCurrentLevel(0);
        this.infoPanel.reset();
    }

    /**
     * All the user inputs are handled here so far:
     */
    setupInteraction() {
        document.addEventListener("keydown", (e) => {
            if (Object.values(TransformOptions).includes(e.code as TransformOptions)) {
                this.model.transform(e.code as TransformOptions);
            }
        });
    }
}

