import {Matrix} from "./utils/Matrix";
import {Grid} from "./components/Grid";
import {FallingTetromino} from "./components/FallingTetromino";
import {COLS, ROWS} from "./config/layout";

export enum TransformOptions {
    ROTATE = "Space",
    DOWN = "ArrowDown",
    LEFT = "ArrowLeft",
    RIGHT = "ArrowRight"
}

/**
 * Manages game core logic
 */
export class Model {

    container: PIXI.Container;
    fallingTetromino: FallingTetromino;
    grid: Grid;
    isInteractive = true;
    reset: () => void;

    constructor(parent: PIXI.Container, reset: () => void) {
        this.container = parent;
        this.fallingTetromino = null;
        this.grid = new Grid(ROWS, COLS, this.container);
        this.reset = reset;
    }

    setInteractive(newValue: boolean) {
        this.isInteractive = newValue;
    }

    /**
     * Checks all possible collisions for given target
     * @param target
     */
    collision(target: Matrix) {
        const isInBounds = target.isInBounds(COLS, ROWS);
        const isGridCollision = this.grid.collision(target);

        return !isInBounds || isGridCollision;
    }

    /**
     * Redraws play area, based on current game state:
     */
    drawGameState() {
        this.grid.redraw();
        this.fallingTetromino?.redraw();
    }

    /**
     * All supported tetromino transformations are handled here:
     * @param option
     */
    transform(option: TransformOptions) {

        if (this.fallingTetromino === null || !this.isInteractive) {
            return;
        }

        switch (option) {
            case TransformOptions.DOWN:
                this.tryMoveDown();
                break;
            case TransformOptions.ROTATE:
                this.tryRotate();
                break;
            case TransformOptions.LEFT:
                this.tryMoveHorizontally(-1);
                break;
            case TransformOptions.RIGHT:
                this.tryMoveHorizontally(1);
                break;
            default:
                console.error(`Unsupported transform option, expected ${TransformOptions}, was ${option}`);
        }

        this.drawGameState();
    }

    /**
     * Moves tetromino one cell down, if possible
     */
    tryMoveDown() {
        if (this.grid.collision(this.fallingTetromino.shape, 0, 1)) {
            this.processGridCollision();
        } else {
            this.fallingTetromino.move(0, 1);
        }
    }

    /**
     * Handles reaching the grid event:
     */
    processGridCollision() {
        // the tetromino becomes part of the grid now:
        this.grid.add(this.fallingTetromino.shape);

        // preventing interactions while win rows are burning:
        if (this.grid.hasWinRows()) {
            this.setInteractive(false);
        }
        // tetromino hits the grid on the very start - game is over at this point:
        if (this.fallingTetromino.y === 0) {
            alert("Too bad :(");
            this.reset();
        }

        // clearing current tetromino
        this.fallingTetromino.hide();
        this.fallingTetromino = null;
    }

    tryMoveHorizontally(dX: number) {
        // move and check if it's ok
        this.fallingTetromino.move(dX, 0);
        // if it's not...
        if (this.collision(this.fallingTetromino.shape)) {
            // then revert the original moving:
            this.fallingTetromino.move(-dX, 0);
        }
    }

    tryRotate() {
        // rotate and check if it's ok
        this.fallingTetromino.shape.rotate(true);
        // if it's not...
        if (this.collision(this.fallingTetromino.shape)) {
            // then revert the original rotation:
            this.fallingTetromino.shape.rotate(false);
        }
    }
}
