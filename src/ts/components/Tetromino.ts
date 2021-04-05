import * as PIXI from 'pixi.js';
import {Matrix} from "../utils/Matrix";
import {BLOCK_SIDE_LENGTH} from "../config/layout";
import {COLORS} from "../config/colors";

/**
 * The "tetromino"-shaped item, consisting of separate sprites
 */
export class Tetromino extends PIXI.Container{
    shape: Matrix;

    constructor(parent: PIXI.Container) {
        super();
        parent.addChild(this);
        // applying scale once, on init
        this.scale.set(BLOCK_SIDE_LENGTH);
    }

    reset(shape: Matrix) {
        this.shape = shape;

        this.removeChildren();

        this.setupImages();
    }

    /**
     * Adding the needed number of bricks/placeholders, depending on current shape:
     */
    setupImages() {
        this.shape.forEachCell(() => {
            const sprite = new PIXI.Sprite();
            // proper dimensions are handled on init:
            sprite.width = sprite.height = 1;
            this.addChild(sprite);
        });
    }

    /**
     * Renders current tetromino shape:
     */
    redraw() {
        let cellCount = 0;

        this.shape.forEachCell((cell, row, coll) => {
            // the sprites are added through the same loop, therefore it's safe to rely on 1:1 match:
            const sprite = this.getChildAt(cellCount) as PIXI.Sprite;

            // 0 stands for "empty cell"
            sprite.texture = cell > 0 ?
                PIXI.utils.TextureCache["brick"] :
                PIXI.Texture.EMPTY;

            // proper dimensions are handled on init:
            sprite.position.set(coll, row);

            // each shape has it's own color:
            sprite.tint = COLORS[cell];

            cellCount++;
        });
    }

    getShape(){
        return this.shape;
    }

    /**
     * Basically, emulating anchor.x = 0.5 for container:
     */
    alignToCenter() {
        this.x = -this.width / 2;
    }
}
