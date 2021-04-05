interface ForEachCellCallback {
    (cellVale: number, rowIndex: number, columnIndex: number): void;
}

/**
 * Contains all the matrix transformations related logic
 */
export class Matrix {

    matrix: number[][];
    offsets: { x: number; y: number };

    constructor(rows: number, cols: number, initValue?: number) {
        this.matrix = new Array(rows).fill([])
            .map(() => new Array(cols).fill(initValue));
    }

    reset(x: number, y: number) {
        this.offsets = {x, y};
    }

    applyOffsets(dX: number, dY: number) {
        this.offsets.x += dX;
        this.offsets.y += dY;
    }

    /**
     * 2d forEach
     * @param callback
     */
    forEachCell(callback: ForEachCellCallback) {
        this.matrix.forEach((row, rowIndex) => {
            row.forEach((cell, collIndex) => {
                callback(cell, rowIndex, collIndex);
            });
        });
    }

    /**
     * Adds given matrix to current:
     * @param matrix
     */
    add(matrix: Matrix) {
        matrix.forEachCell((cell, row, coll) => {
            // skipping empty cells:
            if (cell > 0) {
                this.matrix[row + matrix.offsets.y][coll + matrix.offsets.x] = cell;
            }
        });
    }

    /**
     * Checks whether non-empty cells of given matrix collide with current one:
     * @param matrix - the one to check collision with
     * @param dX - custom horizontal displacement
     * @param dY - custom vertical displacement
     * @return true if given matrix collides current:
     */
    collision(matrix: Matrix, dX = 0, dY = 0) {
        for (let row = 0; row < matrix.matrix.length; row++) {
            for (let coll = 0; coll < matrix.matrix[row].length; coll++) {
                if (matrix.matrix[row][coll] > 0) {
                    const x = coll + matrix.offsets.x + dX;
                    const y = row + matrix.offsets.y + dY;
                    if (!this.matrix[y] || this.matrix[y][x] > 0) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /**
     * Checks whether all non-empty cells fit within given boundaries
     * @param boundX
     * @param boundY
     */
    isInBounds(boundX: number, boundY: number) {
        for (let row = 0; row < this.matrix.length; row++) {
            for (let coll = 0; coll < this.matrix[row].length; coll++) {
                if (this.matrix[row][coll] > 0) {
                    const x = coll + this.offsets.x;
                    const y = row + this.offsets.y;
                    if (x < 0 || x >= boundX || y >= boundY) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    /**
     * Rotates the matrix
     * @param clockWise true if clockwise rotation is required
     * @example:
     *  |x| | |              | |x|x|
     *  |x| | | -> clockWise |x| | |
     *  | |x| |              | | | |
     *
     *  |x| | |                     | | | |
     *  |x| | | -> counterClockWise | | |x|
     *  | |x| |                     |x|x| |
     */
    rotate(clockWise: boolean) {
        // |x| | |    |x|x| |
        // |x| | | -> | | |x|
        // | |x| |    | | | |
        for (let y = 0; y < this.matrix.length; y++) {
            for (let x = 0; x < y; x++) {
                [this.matrix[x][y], this.matrix[y][x]] = [this.matrix[y][x], this.matrix[x][y]];
            }
        }

        clockWise ?
            this.matrix.forEach((row => row.reverse())) :
            this.matrix.reverse();
    }

    clone(){
        return Matrix.from2dArray(this.matrix);
    }

    static from2dArray(arr: number[][]) {
        // just a dummy value, will be replaced with actual 2d array:
        const matrix = new Matrix(0, 0);
        matrix.matrix = arr.map(innerArray => innerArray.slice());
        return matrix;
    }
}
