import {Tetromino} from "./Tetromino";
import {getRandomShape} from "../config/shapes";
import {tickerConfig} from "../config/ticker";
import {BLOCK_SIDE_LENGTH, COLS, infoPanelLayout, ROWS} from "../config/layout";

export class InfoPanel extends PIXI.Container {

    next: Tetromino;
    levelValue: number;
    burnsValue: number;
    levelText: PIXI.Text;
    burnsText: PIXI.Text;

    constructor(parent: PIXI.Container) {
        super();
        parent.addChild(this);
        // play area width + half of panel width (to ensure all blocks are easily centered horizontally):
        this.x = COLS * BLOCK_SIDE_LENGTH + infoPanelLayout.WIDTH / 2;

        this.init();
        this.reset();
    }

    //<editor-fold desc="INIT">
    init() {
        this.initBG();
        this.next = this.initNextTetromino();
        this.levelText = this.initTextBlock(infoPanelLayout.LEVEL, "LEVEL:");
        this.burnsText = this.initTextBlock(infoPanelLayout.BURNS, "TOTAL BURNS:");
    }

    /**
     * Simply filling the entire layout with color
     */
    initBG() {
        const gfx = new PIXI.Graphics();
        gfx.beginFill(0xFFFFFF, 0.3);
        // the entire panel is shifted by half of the width horizontally, for ease children of centering,
        // compensating here:
        gfx.drawRect(-infoPanelLayout.WIDTH / 2, 0, infoPanelLayout.WIDTH, ROWS * BLOCK_SIDE_LENGTH);
        gfx.endFill();
        this.addChild(gfx);
    }

    /**
     * The "NEXT" block with tetromino to be added after currently falling is done:
     */
    initNextTetromino() {
        const wrapper = this.addChild(new PIXI.Container());
        wrapper.y = infoPanelLayout.NEXT;

        this.addTitle(wrapper, "NEXT");

        return new Tetromino(wrapper);
    }

    /**
     * Title + value block:
     * @param offset vertical offset of the block
     * @param title name of the block
     */
    initTextBlock(offset: number, title: string){
        const wrapper = this.addChild(new PIXI.Container());
        wrapper.y = offset;

        this.addTitle(wrapper, title);

        const value = new PIXI.Text("", {
            fontFamily: 'Tetris',
            fontSize: 100
        });

        // title is added with negative offset, therefore no additional positioning of value is needed:
        value.anchor.x = 0.5;

        return wrapper.addChild(value);
    }

    /**
     * Add title to the block with predefined vertical negative offset (to make sure it's "on top" of block's value):
     * @param block
     * @param text
     */
    addTitle(block: PIXI.Container, text: string) {
        const title = block.addChild(new PIXI.Text(text, {
            fontFamily: 'Arial',
            fontSize: 36,
            fill: 'white',
        }));
        title.anchor.set(0.5);
        title.y = infoPanelLayout.TITLE_OFFSET;
        return block.addChild(title);
    }
    //</editor-fold>

    getNextShape() {
        return this.next.getShape().clone();
    }

    getLevel() {
        return this.levelValue;
    }

    /**
     * Select the next tetromino and show it on the panel:
     */
    updateNextTetromino() {
        this.next.reset(getRandomShape());
        this.next.redraw();
        this.next.alignToCenter();
    }

    /**
     * Updates text blocks values, based on burned rows number
     * @param burnedRows added burned rows
     */
    updateValues(burnedRows: number) {
        this.burnsValue += burnedRows;
        const rawLevelsValue = Math.floor(this.burnsValue / tickerConfig.BURNS_PER_LEVEL);
        this.levelValue = Math.min(rawLevelsValue, tickerConfig.LEVELS.length - 1);

        this.burnsText.text = this.burnsValue.toString();
        // user counts from 1, not from 0:
        this.levelText.text = (this.levelValue + 1).toString();
    }

    /**
     * Clearing the state to start from clear sheet:
     */
    reset() {
        this.burnsValue = 0;
        this.levelValue = 0;
        this.updateValues(0);
        this.updateNextTetromino();
    }
}
