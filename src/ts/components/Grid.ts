import * as PIXI from 'pixi.js';
import {Matrix} from "../utils/Matrix";
import {BLOCK_SIDE_LENGTH} from "../config/layout";
import {COLORS} from "../config/colors";

export class Grid extends Matrix {

    WIN_COLOR = 8;
    EMPTY_COLOR = 0;
    cols: number;
    rows: number;
    gfx: PIXI.Graphics;

    constructor(rows: number, cols: number, parent: PIXI.Container) {
        super(rows, cols, 0);
        this.cols = cols;
        this.rows = rows;
        this.gfx = this.initCellsGFX(parent);
        this.addFrame(parent);
    }

    //<editor-fold desc="INIT">
    /**
     * PIXI.Graphics to render cells on:
     * @param parent
     */
    initCellsGFX(parent: PIXI.Container){
        const cells = new PIXI.Graphics();
        // instead of multiplying on every redraw:
        cells.scale.set(BLOCK_SIDE_LENGTH);
        return parent.addChild(cells);
    }

    /**
     * Just a frame around playing area
     * @param parent
     */
    addFrame(parent: PIXI.Container){
        const frame = new PIXI.Graphics();
        frame.lineStyle(4, 0xddab7c, 1);
        frame.drawRect(0, 0, this.cols * BLOCK_SIDE_LENGTH, this.rows * BLOCK_SIDE_LENGTH);
        frame.endFill();
        parent.addChild(frame);
    }
    //</editor-fold>

    //<editor-fold desc="WIN">
    /**
     * @return array of rows indexes, that that have no blank blocks
     */
    getFilledRows() {
        return this.matrix.reduce((result, current, i) => {
            if (current.every(cell => cell !== this.EMPTY_COLOR)) {
                result.push(i);
            }
            return result;
        }, []);
    }

    /**
     * Switching win rows to "win" color
     */
    applyWinRows() {
        this.getFilledRows().forEach(rowIndex => {
            this.matrix[rowIndex].fill(this.WIN_COLOR);
        });
    }

    hasWinRows() {
        return this.getFilledRows().length > 0;
    }

    /**
     * Getting rid of all the win rows (adding empty ones on top instead):
     */
    clearWinRows() {
        this.getFilledRows().forEach(rowIndex => {
            this.matrix.splice(rowIndex, 1);
            this.matrix.unshift(new Array(this.cols).fill(this.EMPTY_COLOR));
        });
    }
    //</editor-fold>

    /**
     * Rendering current grid state:
     */
    redraw(){
        this.gfx.clear();

        this.forEachCell((cell, rowIndex, collIndex) => {
            this.gfx.beginFill(COLORS[cell]);
            // proper dimensions are handled on gfx initialization:
            this.gfx.drawRect(collIndex, rowIndex, 1, 1);
            this.gfx.endFill();
        });
    }

    reset(){
        this.forEachCell((cell, rowIndex, collIndex) => {
            this.matrix[rowIndex][collIndex] = this.EMPTY_COLOR;
        });
    }
}
