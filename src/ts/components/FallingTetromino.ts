import {Matrix} from "../utils/Matrix";
import {Tetromino} from "./Tetromino";
import {BLOCK_SIDE_LENGTH, COLS} from "../config/layout";

export class FallingTetromino extends Tetromino {

    reset(shape: Matrix) {
        super.reset(shape);

        this.alignToCenter();

        this.show();
    }

    /**
     * Places tetromino to the canter of play area:
     */
    alignToCenter() {
        const playAreaCenter = Math.floor(COLS / 2);
        const shapeCenter = Math.floor(this.shape.matrix.length / 2);
        const center = playAreaCenter - shapeCenter;

        this.y = 0;
        this.x = center * BLOCK_SIDE_LENGTH;
        this.shape.reset(center, 0);
    }

    /**
     * Applying any changes to position:
     * @param dX horizontal displacement
     * @param dY vertical displacement
     */
    move(dX: number, dY: number) {
        this.x += BLOCK_SIDE_LENGTH * dX;
        this.y += BLOCK_SIDE_LENGTH * dY;

        // applying offsets to the matrix (needed for collisions calculations):
        this.shape.applyOffsets(dX, dY);
    }

    hide() {
        this.visible = false;
    }

    show() {
        this.visible = true;
    }
}
