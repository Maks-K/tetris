/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Game.ts":
/*!************************!*\
  !*** ./src/ts/Game.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader */ "./src/ts/Loader.ts");
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Model */ "./src/ts/Model.ts");
/* harmony import */ var _utils_scateToWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/scateToWindow */ "./src/ts/utils/scateToWindow.ts");
/* harmony import */ var _components_FallingTetromino__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FallingTetromino */ "./src/ts/components/FallingTetromino.ts");
/* harmony import */ var _components_InfoPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/InfoPanel */ "./src/ts/components/InfoPanel.ts");
/* harmony import */ var _utils_Ticker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/Ticker */ "./src/ts/utils/Ticker.ts");
/* harmony import */ var _config_ticker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/ticker */ "./src/ts/config/ticker.ts");
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/layout */ "./src/ts/config/layout.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.app = this.initApp();
        new _Loader__WEBPACK_IMPORTED_MODULE_0__.Loader(this.app, function () { return _this.start(); });
    }
    Game.prototype.initApp = function () {
        var app = new PIXI.Application({
            width: _config_layout__WEBPACK_IMPORTED_MODULE_7__.layout.width,
            height: _config_layout__WEBPACK_IMPORTED_MODULE_7__.layout.height
        });
        window.document.body.appendChild(app.view);
        // ensuring the game covers entire screen (with aspect ratio) on game start:
        (0,_utils_scateToWindow__WEBPACK_IMPORTED_MODULE_2__.scaleToWindow)(app.view);
        // ensuring the game covers entire screen on screen dimensions change:
        window.addEventListener("resize", function () {
            (0,_utils_scateToWindow__WEBPACK_IMPORTED_MODULE_2__.scaleToWindow)(app.view);
        });
        return app;
    };
    Game.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.ticker = new _utils_Ticker__WEBPACK_IMPORTED_MODULE_5__.Ticker(_config_ticker__WEBPACK_IMPORTED_MODULE_6__.tickerConfig);
                        this.model = new _Model__WEBPACK_IMPORTED_MODULE_1__.Model(this.app.stage, function () { return _this.reset(); });
                        this.fallingTetromino = new _components_FallingTetromino__WEBPACK_IMPORTED_MODULE_3__.FallingTetromino(this.app.stage);
                        this.infoPanel = new _components_InfoPanel__WEBPACK_IMPORTED_MODULE_4__.InfoPanel(this.app.stage);
                        this.setupInteraction();
                        _a.label = 1;
                    case 1:
                        if (false) {}
                        return [4 /*yield*/, this.state()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.state = function () {
        return this.model.grid.hasWinRows() ?
            this.playWin() :
            this.move();
    };
    /**
     * Single cell downwards motion (and falling item reset, if needed)
     */
    Game.prototype.move = function () {
        var _this = this;
        if (this.model.fallingTetromino === null) {
            this.fallingTetromino.reset(this.infoPanel.getNextShape());
            this.infoPanel.updateNextTetromino();
            this.model.fallingTetromino = this.fallingTetromino;
        }
        this.model.transform(_Model__WEBPACK_IMPORTED_MODULE_1__.TransformOptions.DOWN);
        return new Promise(function (resolve) { return setTimeout(resolve, _this.ticker.getTickDuration()); });
    };
    /**
     * Highlight currently winning rows:
     */
    Game.prototype.playWin = function () {
        var _this = this;
        // set winning rows on matrix:
        this.model.grid.applyWinRows();
        // and render them:
        this.model.drawGameState();
        // update info;
        this.infoPanel.updateValues(this.model.grid.getFilledRows().length);
        // update game speed:
        this.ticker.setCurrentLevel(this.infoPanel.getLevel());
        return new Promise(function (resolve) { return setTimeout(function () {
            _this.model.grid.clearWinRows();
            // interaction is disabled during win presentation, enabling once done:
            _this.model.setInteractive(true);
            resolve();
        }, _this.ticker.getTickDuration()); });
    };
    /**
     * Setting initial game state:
     */
    Game.prototype.reset = function () {
        this.model.grid.reset();
        this.ticker.setCurrentLevel(0);
        this.infoPanel.reset();
    };
    /**
     * All the user inputs are handled here so far:
     */
    Game.prototype.setupInteraction = function () {
        var _this = this;
        document.addEventListener("keydown", function (e) {
            if (Object.values(_Model__WEBPACK_IMPORTED_MODULE_1__.TransformOptions).includes(e.code)) {
                _this.model.transform(e.code);
            }
        });
    };
    return Game;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/ts/Loader.ts":
/*!**************************!*\
  !*** ./src/ts/Loader.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
var Loader = /** @class */ (function () {
    function Loader(app, onAssetsLoaded) {
        var _this = this;
        this.loader = app.loader;
        this.loadAssets();
        this.loader.load(function () {
            app.stage.removeChild(_this.loadingScreen);
            onAssetsLoaded();
        });
        this.generateLoadingScreen(app.screen.width, app.screen.height);
        app.stage.addChild(this.loadingScreen);
    }
    Loader.prototype.loadAssets = function () {
        this.loader.add('brick', './src/assets/brick.png');
    };
    Loader.prototype.generateLoadingScreen = function (appWidth, appHeight) {
        var style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fill: '#ffffff'
        });
        var playText = new PIXI.Text('Loading...', style);
        playText.x = (appWidth - playText.width) / 2;
        playText.y = (appHeight - playText.height) / 2;
        this.loadingScreen = playText;
    };
    return Loader;
}());



/***/ }),

/***/ "./src/ts/Model.ts":
/*!*************************!*\
  !*** ./src/ts/Model.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransformOptions": () => (/* binding */ TransformOptions),
/* harmony export */   "Model": () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Grid */ "./src/ts/components/Grid.ts");
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/layout */ "./src/ts/config/layout.ts");


var TransformOptions;
(function (TransformOptions) {
    TransformOptions["ROTATE"] = "Space";
    TransformOptions["DOWN"] = "ArrowDown";
    TransformOptions["LEFT"] = "ArrowLeft";
    TransformOptions["RIGHT"] = "ArrowRight";
})(TransformOptions || (TransformOptions = {}));
/**
 * Manages game core logic
 */
var Model = /** @class */ (function () {
    function Model(parent, reset) {
        this.isInteractive = true;
        this.container = parent;
        this.fallingTetromino = null;
        this.grid = new _components_Grid__WEBPACK_IMPORTED_MODULE_0__.Grid(_config_layout__WEBPACK_IMPORTED_MODULE_1__.ROWS, _config_layout__WEBPACK_IMPORTED_MODULE_1__.COLS, this.container);
        this.reset = reset;
    }
    Model.prototype.setInteractive = function (newValue) {
        this.isInteractive = newValue;
    };
    /**
     * Checks all possible collisions for given target
     * @param target
     */
    Model.prototype.collision = function (target) {
        var isInBounds = target.isInBounds(_config_layout__WEBPACK_IMPORTED_MODULE_1__.COLS, _config_layout__WEBPACK_IMPORTED_MODULE_1__.ROWS);
        var isGridCollision = this.grid.collision(target);
        return !isInBounds || isGridCollision;
    };
    /**
     * Redraws play area, based on current game state:
     */
    Model.prototype.drawGameState = function () {
        var _a;
        this.grid.redraw();
        (_a = this.fallingTetromino) === null || _a === void 0 ? void 0 : _a.redraw();
    };
    /**
     * All supported tetromino transformations are handled here:
     * @param option
     */
    Model.prototype.transform = function (option) {
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
                console.error("Unsupported transform option, expected " + TransformOptions + ", was " + option);
        }
        this.drawGameState();
    };
    /**
     * Moves tetromino one cell down, if possible
     */
    Model.prototype.tryMoveDown = function () {
        if (this.grid.collision(this.fallingTetromino.shape, 0, 1)) {
            this.processGridCollision();
        }
        else {
            this.fallingTetromino.move(0, 1);
        }
    };
    /**
     * Handles reaching the grid event:
     */
    Model.prototype.processGridCollision = function () {
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
    };
    Model.prototype.tryMoveHorizontally = function (dX) {
        // move and check if it's ok
        this.fallingTetromino.move(dX, 0);
        // if it's not...
        if (this.collision(this.fallingTetromino.shape)) {
            // then revert the original moving:
            this.fallingTetromino.move(-dX, 0);
        }
    };
    Model.prototype.tryRotate = function () {
        // rotate and check if it's ok
        this.fallingTetromino.shape.rotate(true);
        // if it's not...
        if (this.collision(this.fallingTetromino.shape)) {
            // then revert the original rotation:
            this.fallingTetromino.shape.rotate(false);
        }
    };
    return Model;
}());



/***/ }),

/***/ "./src/ts/components/FallingTetromino.ts":
/*!***********************************************!*\
  !*** ./src/ts/components/FallingTetromino.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FallingTetromino": () => (/* binding */ FallingTetromino)
/* harmony export */ });
/* harmony import */ var _Tetromino__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tetromino */ "./src/ts/components/Tetromino.ts");
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/layout */ "./src/ts/config/layout.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FallingTetromino = /** @class */ (function (_super) {
    __extends(FallingTetromino, _super);
    function FallingTetromino() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FallingTetromino.prototype.reset = function (shape) {
        _super.prototype.reset.call(this, shape);
        this.alignToCenter();
        this.show();
    };
    /**
     * Places tetromino to the canter of play area:
     */
    FallingTetromino.prototype.alignToCenter = function () {
        var playAreaCenter = Math.floor(_config_layout__WEBPACK_IMPORTED_MODULE_1__.COLS / 2);
        var shapeCenter = Math.floor(this.shape.matrix.length / 2);
        var center = playAreaCenter - shapeCenter;
        this.y = 0;
        this.x = center * _config_layout__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIDE_LENGTH;
        this.shape.reset(center, 0);
    };
    /**
     * Applying any changes to position:
     * @param dX horizontal displacement
     * @param dY vertical displacement
     */
    FallingTetromino.prototype.move = function (dX, dY) {
        this.x += _config_layout__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIDE_LENGTH * dX;
        this.y += _config_layout__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIDE_LENGTH * dY;
        // applying offsets to the matrix (needed for collisions calculations):
        this.shape.applyOffsets(dX, dY);
    };
    FallingTetromino.prototype.hide = function () {
        this.visible = false;
    };
    FallingTetromino.prototype.show = function () {
        this.visible = true;
    };
    return FallingTetromino;
}(_Tetromino__WEBPACK_IMPORTED_MODULE_0__.Tetromino));



/***/ }),

/***/ "./src/ts/components/Grid.ts":
/*!***********************************!*\
  !*** ./src/ts/components/Grid.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Grid": () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _utils_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Matrix */ "./src/ts/utils/Matrix.ts");
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/layout */ "./src/ts/config/layout.ts");
/* harmony import */ var _config_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/colors */ "./src/ts/config/colors.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid(rows, cols, parent) {
        var _this = _super.call(this, rows, cols, 0) || this;
        _this.WIN_COLOR = 8;
        _this.EMPTY_COLOR = 0;
        _this.cols = cols;
        _this.rows = rows;
        _this.gfx = _this.initCellsGFX(parent);
        _this.addFrame(parent);
        return _this;
    }
    //<editor-fold desc="INIT">
    /**
     * PIXI.Graphics to render cells on:
     * @param parent
     */
    Grid.prototype.initCellsGFX = function (parent) {
        var cells = new PIXI.Graphics();
        // instead of multiplying on every redraw:
        cells.scale.set(_config_layout__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIDE_LENGTH);
        return parent.addChild(cells);
    };
    /**
     * Just a frame around playing area
     * @param parent
     */
    Grid.prototype.addFrame = function (parent) {
        var frame = new PIXI.Graphics();
        frame.lineStyle(4, 0xddab7c, 1);
        frame.drawRect(0, 0, this.cols * _config_layout__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIDE_LENGTH, this.rows * _config_layout__WEBPACK_IMPORTED_MODULE_1__.BLOCK_SIDE_LENGTH);
        frame.endFill();
        parent.addChild(frame);
    };
    //</editor-fold>
    //<editor-fold desc="WIN">
    /**
     * @return array of rows indexes, that that have no blank blocks
     */
    Grid.prototype.getFilledRows = function () {
        var _this = this;
        return this.matrix.reduce(function (result, current, i) {
            if (current.every(function (cell) { return cell !== _this.EMPTY_COLOR; })) {
                result.push(i);
            }
            return result;
        }, []);
    };
    /**
     * Switching win rows to "win" color
     */
    Grid.prototype.applyWinRows = function () {
        var _this = this;
        this.getFilledRows().forEach(function (rowIndex) {
            _this.matrix[rowIndex].fill(_this.WIN_COLOR);
        });
    };
    Grid.prototype.hasWinRows = function () {
        return this.getFilledRows().length > 0;
    };
    /**
     * Getting rid of all the win rows (adding empty ones on top instead):
     */
    Grid.prototype.clearWinRows = function () {
        var _this = this;
        this.getFilledRows().forEach(function (rowIndex) {
            _this.matrix.splice(rowIndex, 1);
            _this.matrix.unshift(new Array(_this.cols).fill(_this.EMPTY_COLOR));
        });
    };
    //</editor-fold>
    /**
     * Rendering current grid state:
     */
    Grid.prototype.redraw = function () {
        var _this = this;
        this.gfx.clear();
        this.forEachCell(function (cell, rowIndex, collIndex) {
            _this.gfx.beginFill(_config_colors__WEBPACK_IMPORTED_MODULE_2__.COLORS[cell]);
            // proper dimensions are handled on gfx initialization:
            _this.gfx.drawRect(collIndex, rowIndex, 1, 1);
            _this.gfx.endFill();
        });
    };
    Grid.prototype.reset = function () {
        var _this = this;
        this.forEachCell(function (cell, rowIndex, collIndex) {
            _this.matrix[rowIndex][collIndex] = _this.EMPTY_COLOR;
        });
    };
    return Grid;
}(_utils_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix));



/***/ }),

/***/ "./src/ts/components/InfoPanel.ts":
/*!****************************************!*\
  !*** ./src/ts/components/InfoPanel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPanel": () => (/* binding */ InfoPanel)
/* harmony export */ });
/* harmony import */ var _Tetromino__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tetromino */ "./src/ts/components/Tetromino.ts");
/* harmony import */ var _config_shapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/shapes */ "./src/ts/config/shapes.ts");
/* harmony import */ var _config_ticker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/ticker */ "./src/ts/config/ticker.ts");
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/layout */ "./src/ts/config/layout.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var InfoPanel = /** @class */ (function (_super) {
    __extends(InfoPanel, _super);
    function InfoPanel(parent) {
        var _this = _super.call(this) || this;
        parent.addChild(_this);
        // play area width + half of panel width (to ensure all blocks are easily centered horizontally):
        _this.x = _config_layout__WEBPACK_IMPORTED_MODULE_3__.COLS * _config_layout__WEBPACK_IMPORTED_MODULE_3__.BLOCK_SIDE_LENGTH + _config_layout__WEBPACK_IMPORTED_MODULE_3__.infoPanelLayout.WIDTH / 2;
        _this.init();
        _this.reset();
        return _this;
    }
    //<editor-fold desc="INIT">
    InfoPanel.prototype.init = function () {
        this.initBG();
        this.next = this.initNextTetromino();
        this.levelText = this.initTextBlock(_config_layout__WEBPACK_IMPORTED_MODULE_3__.infoPanelLayout.LEVEL, "LEVEL:");
        this.burnsText = this.initTextBlock(_config_layout__WEBPACK_IMPORTED_MODULE_3__.infoPanelLayout.BURNS, "TOTAL BURNS:");
    };
    /**
     * Simply filling the entire layout with color
     */
    InfoPanel.prototype.initBG = function () {
        var gfx = new PIXI.Graphics();
        gfx.beginFill(0xFFFFFF, 0.3);
        // the entire panel is shifted by half of the width horizontally, for ease children of centering,
        // compensating here:
        gfx.drawRect(-_config_layout__WEBPACK_IMPORTED_MODULE_3__.infoPanelLayout.WIDTH / 2, 0, _config_layout__WEBPACK_IMPORTED_MODULE_3__.infoPanelLayout.WIDTH, _config_layout__WEBPACK_IMPORTED_MODULE_3__.ROWS * _config_layout__WEBPACK_IMPORTED_MODULE_3__.BLOCK_SIDE_LENGTH);
        gfx.endFill();
        this.addChild(gfx);
    };
    /**
     * The "NEXT" block with tetromino to be added after currently falling is done:
     */
    InfoPanel.prototype.initNextTetromino = function () {
        var wrapper = this.addChild(new PIXI.Container());
        wrapper.y = _config_layout__WEBPACK_IMPORTED_MODULE_3__.infoPanelLayout.NEXT;
        this.addTitle(wrapper, "NEXT");
        return new _Tetromino__WEBPACK_IMPORTED_MODULE_0__.Tetromino(wrapper);
    };
    /**
     * Title + value block:
     * @param offset vertical offset of the block
     * @param title name of the block
     */
    InfoPanel.prototype.initTextBlock = function (offset, title) {
        var wrapper = this.addChild(new PIXI.Container());
        wrapper.y = offset;
        this.addTitle(wrapper, title);
        var value = new PIXI.Text("", {
            fontFamily: 'Tetris',
            fontSize: 100
        });
        // title is added with negative offset, therefore no additional positioning of value is needed:
        value.anchor.x = 0.5;
        return wrapper.addChild(value);
    };
    /**
     * Add title to the block with predefined vertical negative offset (to make sure it's "on top" of block's value):
     * @param block
     * @param text
     */
    InfoPanel.prototype.addTitle = function (block, text) {
        var title = block.addChild(new PIXI.Text(text, {
            fontFamily: 'Arial',
            fontSize: 36,
            fill: 'white',
        }));
        title.anchor.set(0.5);
        title.y = _config_layout__WEBPACK_IMPORTED_MODULE_3__.infoPanelLayout.TITLE_OFFSET;
        return block.addChild(title);
    };
    //</editor-fold>
    InfoPanel.prototype.getNextShape = function () {
        return this.next.getShape().clone();
    };
    InfoPanel.prototype.getLevel = function () {
        return this.levelValue;
    };
    /**
     * Select the next tetromino and show it on the panel:
     */
    InfoPanel.prototype.updateNextTetromino = function () {
        this.next.reset((0,_config_shapes__WEBPACK_IMPORTED_MODULE_1__.getRandomShape)());
        this.next.redraw();
        this.next.alignToCenter();
    };
    /**
     * Updates text blocks values, based on burned rows number
     * @param burnedRows added burned rows
     */
    InfoPanel.prototype.updateValues = function (burnedRows) {
        this.burnsValue += burnedRows;
        var rawLevelsValue = Math.floor(this.burnsValue / _config_ticker__WEBPACK_IMPORTED_MODULE_2__.tickerConfig.BURNS_PER_LEVEL);
        this.levelValue = Math.min(rawLevelsValue, _config_ticker__WEBPACK_IMPORTED_MODULE_2__.tickerConfig.LEVELS.length - 1);
        this.burnsText.text = this.burnsValue.toString();
        // user counts from 1, not from 0:
        this.levelText.text = (this.levelValue + 1).toString();
    };
    /**
     * Clearing the state to start from clear sheet:
     */
    InfoPanel.prototype.reset = function () {
        this.burnsValue = 0;
        this.levelValue = 0;
        this.updateValues(0);
        this.updateNextTetromino();
    };
    return InfoPanel;
}(PIXI.Container));



/***/ }),

/***/ "./src/ts/components/Tetromino.ts":
/*!****************************************!*\
  !*** ./src/ts/components/Tetromino.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tetromino": () => (/* binding */ Tetromino)
/* harmony export */ });
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/layout */ "./src/ts/config/layout.ts");
/* harmony import */ var _config_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/colors */ "./src/ts/config/colors.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * The "tetromino"-shaped item, consisting of separate sprites
 */
var Tetromino = /** @class */ (function (_super) {
    __extends(Tetromino, _super);
    function Tetromino(parent) {
        var _this = _super.call(this) || this;
        parent.addChild(_this);
        // applying scale once, on init
        _this.scale.set(_config_layout__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIDE_LENGTH);
        return _this;
    }
    Tetromino.prototype.reset = function (shape) {
        this.shape = shape;
        this.removeChildren();
        this.setupImages();
    };
    /**
     * Adding the needed number of bricks/placeholders, depending on current shape:
     */
    Tetromino.prototype.setupImages = function () {
        var _this = this;
        this.shape.forEachCell(function () {
            var sprite = new PIXI.Sprite();
            // proper dimensions are handled on init:
            sprite.width = sprite.height = 1;
            _this.addChild(sprite);
        });
    };
    /**
     * Renders current tetromino shape:
     */
    Tetromino.prototype.redraw = function () {
        var _this = this;
        var cellCount = 0;
        this.shape.forEachCell(function (cell, row, coll) {
            // the sprites are added through the same loop, therefore it's safe to rely on 1:1 match:
            var sprite = _this.getChildAt(cellCount);
            // 0 stands for "empty cell"
            sprite.texture = cell > 0 ?
                PIXI.utils.TextureCache["brick"] :
                PIXI.Texture.EMPTY;
            // proper dimensions are handled on init:
            sprite.position.set(coll, row);
            // each shape has it's own color:
            sprite.tint = _config_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS[cell];
            cellCount++;
        });
    };
    Tetromino.prototype.getShape = function () {
        return this.shape;
    };
    /**
     * Basically, emulating anchor.x = 0.5 for container:
     */
    Tetromino.prototype.alignToCenter = function () {
        this.x = -this.width / 2;
    };
    return Tetromino;
}(PIXI.Container));



/***/ }),

/***/ "./src/ts/config/colors.ts":
/*!*********************************!*\
  !*** ./src/ts/config/colors.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLORS": () => (/* binding */ COLORS)
/* harmony export */ });
var COLORS = [
    0x000000,
    0xFF0000,
    0x00FF00,
    0x0000FF,
    0xFFFF00,
    0x00FFFF,
    0x10FF01,
    0xF000FF,
    0x000000
];


/***/ }),

/***/ "./src/ts/config/layout.ts":
/*!*********************************!*\
  !*** ./src/ts/config/layout.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BLOCK_SIDE_LENGTH": () => (/* binding */ BLOCK_SIDE_LENGTH),
/* harmony export */   "ROWS": () => (/* binding */ ROWS),
/* harmony export */   "COLS": () => (/* binding */ COLS),
/* harmony export */   "infoPanelLayout": () => (/* binding */ infoPanelLayout),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
var BLOCK_SIDE_LENGTH = 45;
var ROWS = 20;
var COLS = 10;
var infoPanelLayout = {
    WIDTH: 300,
    NEXT: 200,
    LEVEL: 410,
    BURNS: 600,
    TITLE_OFFSET: -25
};
var layout = {
    width: COLS * BLOCK_SIDE_LENGTH + infoPanelLayout.WIDTH,
    height: ROWS * BLOCK_SIDE_LENGTH
};


/***/ }),

/***/ "./src/ts/config/shapes.ts":
/*!*********************************!*\
  !*** ./src/ts/config/shapes.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomShape": () => (/* binding */ getRandomShape)
/* harmony export */ });
/* harmony import */ var _utils_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Matrix */ "./src/ts/utils/Matrix.ts");

var SHAPES = [
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [2, 0, 0],
        [2, 2, 2],
        [0, 0, 0],
    ],
    [
        [0, 0, 3],
        [3, 3, 3],
        [0, 0, 0],
    ],
    [
        [4, 4],
        [4, 4],
    ],
    [
        [0, 5, 5],
        [5, 5, 0],
        [0, 0, 0],
    ],
    [
        [0, 6, 0],
        [6, 6, 6],
        [0, 0, 0],
    ],
    [
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0],
    ]
].map(function (arr) { return _utils_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix.from2dArray(arr); });
function getRandomShape() {
    return SHAPES[Math.floor(Math.random() * SHAPES.length)];
}


/***/ }),

/***/ "./src/ts/config/ticker.ts":
/*!*********************************!*\
  !*** ./src/ts/config/ticker.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tickerConfig": () => (/* binding */ tickerConfig)
/* harmony export */ });
var tickerConfig = {
    RAW_TICK_DURATION: 1000,
    BURNS_PER_LEVEL: 10,
    LEVELS: [
        1,
        0.9,
        0.8,
        0.7,
        0.6,
        0.5,
        0.4,
        0.3,
        0.3,
        0.2
    ]
};


/***/ }),

/***/ "./src/ts/utils/Matrix.ts":
/*!********************************!*\
  !*** ./src/ts/utils/Matrix.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix": () => (/* binding */ Matrix)
/* harmony export */ });
/**
 * Contains all the matrix transformations related logic
 */
var Matrix = /** @class */ (function () {
    function Matrix(rows, cols, initValue) {
        this.matrix = new Array(rows).fill([])
            .map(function () { return new Array(cols).fill(initValue); });
    }
    Matrix.prototype.reset = function (x, y) {
        this.offsets = { x: x, y: y };
    };
    Matrix.prototype.applyOffsets = function (dX, dY) {
        this.offsets.x += dX;
        this.offsets.y += dY;
    };
    /**
     * 2d forEach
     * @param callback
     */
    Matrix.prototype.forEachCell = function (callback) {
        this.matrix.forEach(function (row, rowIndex) {
            row.forEach(function (cell, collIndex) {
                callback(cell, rowIndex, collIndex);
            });
        });
    };
    /**
     * Adds given matrix to current:
     * @param matrix
     */
    Matrix.prototype.add = function (matrix) {
        var _this = this;
        matrix.forEachCell(function (cell, row, coll) {
            // skipping empty cells:
            if (cell > 0) {
                _this.matrix[row + matrix.offsets.y][coll + matrix.offsets.x] = cell;
            }
        });
    };
    /**
     * Checks whether non-empty cells of given matrix collide with current one:
     * @param matrix - the one to check collision with
     * @param dX - custom horizontal displacement
     * @param dY - custom vertical displacement
     * @return true if given matrix collides current:
     */
    Matrix.prototype.collision = function (matrix, dX, dY) {
        if (dX === void 0) { dX = 0; }
        if (dY === void 0) { dY = 0; }
        for (var row = 0; row < matrix.matrix.length; row++) {
            for (var coll = 0; coll < matrix.matrix[row].length; coll++) {
                if (matrix.matrix[row][coll] > 0) {
                    var x = coll + matrix.offsets.x + dX;
                    var y = row + matrix.offsets.y + dY;
                    if (!this.matrix[y] || this.matrix[y][x] > 0) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    /**
     * Checks whether all non-empty cells fit within given boundaries
     * @param boundX
     * @param boundY
     */
    Matrix.prototype.isInBounds = function (boundX, boundY) {
        for (var row = 0; row < this.matrix.length; row++) {
            for (var coll = 0; coll < this.matrix[row].length; coll++) {
                if (this.matrix[row][coll] > 0) {
                    var x = coll + this.offsets.x;
                    var y = row + this.offsets.y;
                    if (x < 0 || x >= boundX || y >= boundY) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
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
    Matrix.prototype.rotate = function (clockWise) {
        var _a;
        // |x| | |    |x|x| |
        // |x| | | -> | | |x|
        // | |x| |    | | | |
        for (var y = 0; y < this.matrix.length; y++) {
            for (var x = 0; x < y; x++) {
                _a = [this.matrix[y][x], this.matrix[x][y]], this.matrix[x][y] = _a[0], this.matrix[y][x] = _a[1];
            }
        }
        clockWise ?
            this.matrix.forEach((function (row) { return row.reverse(); })) :
            this.matrix.reverse();
    };
    Matrix.prototype.clone = function () {
        return Matrix.from2dArray(this.matrix);
    };
    Matrix.from2dArray = function (arr) {
        // just a dummy value, will be replaced with actual 2d array:
        var matrix = new Matrix(0, 0);
        matrix.matrix = arr.map(function (innerArray) { return innerArray.slice(); });
        return matrix;
    };
    return Matrix;
}());



/***/ }),

/***/ "./src/ts/utils/Ticker.ts":
/*!********************************!*\
  !*** ./src/ts/utils/Ticker.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ticker": () => (/* binding */ Ticker)
/* harmony export */ });
/**
 * Helper class to handle game speed, based on current level
 */
var Ticker = /** @class */ (function () {
    function Ticker(config) {
        this.rawTickDuration = config.RAW_TICK_DURATION;
        this.levels = config.LEVELS;
        this.currentLevel = this.levels[0];
    }
    Ticker.prototype.getTickDuration = function () {
        return this.rawTickDuration * this.currentLevel;
    };
    Ticker.prototype.setCurrentLevel = function (index) {
        this.currentLevel = this.levels[index];
    };
    return Ticker;
}());



/***/ }),

/***/ "./src/ts/utils/scateToWindow.ts":
/*!***************************************!*\
  !*** ./src/ts/utils/scateToWindow.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scaleToWindow": () => (/* binding */ scaleToWindow)
/* harmony export */ });
function scaleToWindow(canvas) {
    //Figure out the scale amount on each axis
    var scaleX = window.innerWidth / canvas.offsetWidth;
    var scaleY = window.innerHeight / canvas.offsetHeight;
    //Scale the canvas based on whichever value is less: `scaleX` or `scaleY`
    var scale = Math.min(scaleX, scaleY);
    canvas.style.transform = "scale(" + scale + ")";
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ts_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/Game */ "./src/ts/Game.ts");

new _ts_Game__WEBPACK_IMPORTED_MODULE_0__.default();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvR2FtZS50cyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvTG9hZGVyLnRzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy90cy9Nb2RlbC50cyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvY29tcG9uZW50cy9GYWxsaW5nVGV0cm9taW5vLnRzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy90cy9jb21wb25lbnRzL0dyaWQudHMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3RzL2NvbXBvbmVudHMvSW5mb1BhbmVsLnRzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy90cy9jb21wb25lbnRzL1RldHJvbWluby50cyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvY29uZmlnL2NvbG9ycy50cyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvY29uZmlnL2xheW91dC50cyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvY29uZmlnL3NoYXBlcy50cyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvY29uZmlnL3RpY2tlci50cyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvdXRpbHMvTWF0cml4LnRzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy90cy91dGlscy9UaWNrZXIudHMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3RzL3V0aWxzL3NjYXRlVG9XaW5kb3cudHMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3Jj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QUFDLFlBQVksQ0FBQztJQUNwRCxDQUFDO0lBRUQsZ0NBQWUsR0FBZixVQUFnQixLQUFhO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qk0sU0FBUyxhQUFhLENBQUMsTUFBeUI7SUFDbkQsMENBQTBDO0lBQzFDLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN0RCxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFFeEQseUVBQXlFO0lBQ3pFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3BELENBQUM7Ozs7Ozs7VUNSRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ042QjtBQUU3QixJQUFJLDZDQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvYWRlcn0gZnJvbSBcIi4vTG9hZGVyXCI7XG5pbXBvcnQge01vZGVsLCBUcmFuc2Zvcm1PcHRpb25zfSBmcm9tIFwiLi9Nb2RlbFwiO1xuaW1wb3J0IHtzY2FsZVRvV2luZG93fSBmcm9tIFwiLi91dGlscy9zY2F0ZVRvV2luZG93XCI7XG5pbXBvcnQge0ZhbGxpbmdUZXRyb21pbm99IGZyb20gXCIuL2NvbXBvbmVudHMvRmFsbGluZ1RldHJvbWlub1wiO1xuaW1wb3J0IHtJbmZvUGFuZWx9IGZyb20gXCIuL2NvbXBvbmVudHMvSW5mb1BhbmVsXCI7XG5pbXBvcnQge1RpY2tlcn0gZnJvbSBcIi4vdXRpbHMvVGlja2VyXCI7XG5pbXBvcnQge3RpY2tlckNvbmZpZ30gZnJvbSBcIi4vY29uZmlnL3RpY2tlclwiO1xuaW1wb3J0IHtsYXlvdXR9IGZyb20gXCIuL2NvbmZpZy9sYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG5cbiAgICBhcHA6IFBJWEkuQXBwbGljYXRpb247XG4gICAgdGlja2VyOiBUaWNrZXI7XG4gICAgZmFsbGluZ1RldHJvbWlubzogRmFsbGluZ1RldHJvbWlubztcbiAgICBpbmZvUGFuZWw6IEluZm9QYW5lbDtcbiAgICBtb2RlbDogTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hcHAgPSB0aGlzLmluaXRBcHAoKTtcblxuICAgICAgICBuZXcgTG9hZGVyKHRoaXMuYXBwLCAoKSA9PiB0aGlzLnN0YXJ0KCkpO1xuICAgIH1cblxuICAgIGluaXRBcHAoKSB7XG4gICAgICAgIGNvbnN0IGFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKHtcbiAgICAgICAgICAgIHdpZHRoOiBsYXlvdXQud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGxheW91dC5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC52aWV3KTtcblxuICAgICAgICAvLyBlbnN1cmluZyB0aGUgZ2FtZSBjb3ZlcnMgZW50aXJlIHNjcmVlbiAod2l0aCBhc3BlY3QgcmF0aW8pIG9uIGdhbWUgc3RhcnQ6XG4gICAgICAgIHNjYWxlVG9XaW5kb3coYXBwLnZpZXcpO1xuXG4gICAgICAgIC8vIGVuc3VyaW5nIHRoZSBnYW1lIGNvdmVycyBlbnRpcmUgc2NyZWVuIG9uIHNjcmVlbiBkaW1lbnNpb25zIGNoYW5nZTpcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2NhbGVUb1dpbmRvdyhhcHAudmlldyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhcHA7XG4gICAgfVxuXG4gICAgYXN5bmMgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudGlja2VyID0gbmV3IFRpY2tlcih0aWNrZXJDb25maWcpO1xuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IE1vZGVsKHRoaXMuYXBwLnN0YWdlLCAoKSA9PiB0aGlzLnJlc2V0KCkpO1xuICAgICAgICB0aGlzLmZhbGxpbmdUZXRyb21pbm8gPSBuZXcgRmFsbGluZ1RldHJvbWlubyh0aGlzLmFwcC5zdGFnZSk7XG4gICAgICAgIHRoaXMuaW5mb1BhbmVsID0gbmV3IEluZm9QYW5lbCh0aGlzLmFwcC5zdGFnZSk7XG5cbiAgICAgICAgdGhpcy5zZXR1cEludGVyYWN0aW9uKCk7XG5cbiAgICAgICAgLy8gaW5maW5pdGUgYXN5bmMgbG9vcCBvZiBjb25zZWN1dGl2ZSBnYW1lIHN0YXRlczpcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5ncmlkLmhhc1dpblJvd3MoKSA/XG4gICAgICAgICAgICB0aGlzLnBsYXlXaW4oKSA6XG4gICAgICAgICAgICB0aGlzLm1vdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5nbGUgY2VsbCBkb3dud2FyZHMgbW90aW9uIChhbmQgZmFsbGluZyBpdGVtIHJlc2V0LCBpZiBuZWVkZWQpXG4gICAgICovXG4gICAgbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZmFsbGluZ1RldHJvbWlubyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mYWxsaW5nVGV0cm9taW5vLnJlc2V0KHRoaXMuaW5mb1BhbmVsLmdldE5leHRTaGFwZSgpKTtcbiAgICAgICAgICAgIHRoaXMuaW5mb1BhbmVsLnVwZGF0ZU5leHRUZXRyb21pbm8oKTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZmFsbGluZ1RldHJvbWlubyA9IHRoaXMuZmFsbGluZ1RldHJvbWlubztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9kZWwudHJhbnNmb3JtKFRyYW5zZm9ybU9wdGlvbnMuRE9XTik7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aGlzLnRpY2tlci5nZXRUaWNrRHVyYXRpb24oKSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZ2hsaWdodCBjdXJyZW50bHkgd2lubmluZyByb3dzOlxuICAgICAqL1xuICAgIHBsYXlXaW4oKSB7XG4gICAgICAgIC8vIHNldCB3aW5uaW5nIHJvd3Mgb24gbWF0cml4OlxuICAgICAgICB0aGlzLm1vZGVsLmdyaWQuYXBwbHlXaW5Sb3dzKCk7XG4gICAgICAgIC8vIGFuZCByZW5kZXIgdGhlbTpcbiAgICAgICAgdGhpcy5tb2RlbC5kcmF3R2FtZVN0YXRlKCk7XG4gICAgICAgIC8vIHVwZGF0ZSBpbmZvO1xuICAgICAgICB0aGlzLmluZm9QYW5lbC51cGRhdGVWYWx1ZXModGhpcy5tb2RlbC5ncmlkLmdldEZpbGxlZFJvd3MoKS5sZW5ndGgpO1xuICAgICAgICAvLyB1cGRhdGUgZ2FtZSBzcGVlZDpcbiAgICAgICAgdGhpcy50aWNrZXIuc2V0Q3VycmVudExldmVsKHRoaXMuaW5mb1BhbmVsLmdldExldmVsKCkpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5ncmlkLmNsZWFyV2luUm93cygpO1xuICAgICAgICAgICAgLy8gaW50ZXJhY3Rpb24gaXMgZGlzYWJsZWQgZHVyaW5nIHdpbiBwcmVzZW50YXRpb24sIGVuYWJsaW5nIG9uY2UgZG9uZTpcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0SW50ZXJhY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sIHRoaXMudGlja2VyLmdldFRpY2tEdXJhdGlvbigpKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0dGluZyBpbml0aWFsIGdhbWUgc3RhdGU6XG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMubW9kZWwuZ3JpZC5yZXNldCgpO1xuICAgICAgICB0aGlzLnRpY2tlci5zZXRDdXJyZW50TGV2ZWwoMCk7XG4gICAgICAgIHRoaXMuaW5mb1BhbmVsLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsIHRoZSB1c2VyIGlucHV0cyBhcmUgaGFuZGxlZCBoZXJlIHNvIGZhcjpcbiAgICAgKi9cbiAgICBzZXR1cEludGVyYWN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoVHJhbnNmb3JtT3B0aW9ucykuaW5jbHVkZXMoZS5jb2RlIGFzIFRyYW5zZm9ybU9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC50cmFuc2Zvcm0oZS5jb2RlIGFzIFRyYW5zZm9ybU9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiIsImV4cG9ydCBjbGFzcyBMb2FkZXIge1xuICAgIGxvYWRlcjogUElYSS5Mb2FkZXI7XG4gICAgbG9hZGluZ1NjcmVlbjogUElYSS5UZXh0O1xuXG4gICAgY29uc3RydWN0b3IoYXBwOiBQSVhJLkFwcGxpY2F0aW9uLCBvbkFzc2V0c0xvYWRlZDogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmxvYWRlciA9IGFwcC5sb2FkZXI7XG4gICAgICAgIHRoaXMubG9hZEFzc2V0cygpO1xuICAgICAgICB0aGlzLmxvYWRlci5sb2FkKCgpID0+IHtcbiAgICAgICAgICAgIGFwcC5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLmxvYWRpbmdTY3JlZW4pO1xuICAgICAgICAgICAgb25Bc3NldHNMb2FkZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVMb2FkaW5nU2NyZWVuKGFwcC5zY3JlZW4ud2lkdGgsIGFwcC5zY3JlZW4uaGVpZ2h0KTtcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMubG9hZGluZ1NjcmVlbik7XG4gICAgfVxuXG4gICAgbG9hZEFzc2V0cygpIHtcbiAgICAgICAgdGhpcy5sb2FkZXIuYWRkKCdicmljaycsICcuL3NyYy9hc3NldHMvYnJpY2sucG5nJyk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVMb2FkaW5nU2NyZWVuKGFwcFdpZHRoOiBudW1iZXIsIGFwcEhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICBmb250U2l6ZTogMzYsXG4gICAgICAgICAgICBmaWxsOiAnI2ZmZmZmZidcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBsYXlUZXh0ID0gbmV3IFBJWEkuVGV4dCgnTG9hZGluZy4uLicsIHN0eWxlKTtcbiAgICAgICAgcGxheVRleHQueCA9IChhcHBXaWR0aCAtIHBsYXlUZXh0LndpZHRoKSAvIDI7XG4gICAgICAgIHBsYXlUZXh0LnkgPSAoYXBwSGVpZ2h0IC0gcGxheVRleHQuaGVpZ2h0KSAvIDI7XG4gICAgICAgIHRoaXMubG9hZGluZ1NjcmVlbiA9IHBsYXlUZXh0O1xuICAgIH1cbn1cbiIsImltcG9ydCB7TWF0cml4fSBmcm9tIFwiLi91dGlscy9NYXRyaXhcIjtcbmltcG9ydCB7R3JpZH0gZnJvbSBcIi4vY29tcG9uZW50cy9HcmlkXCI7XG5pbXBvcnQge0ZhbGxpbmdUZXRyb21pbm99IGZyb20gXCIuL2NvbXBvbmVudHMvRmFsbGluZ1RldHJvbWlub1wiO1xuaW1wb3J0IHtDT0xTLCBST1dTfSBmcm9tIFwiLi9jb25maWcvbGF5b3V0XCI7XG5cbmV4cG9ydCBlbnVtIFRyYW5zZm9ybU9wdGlvbnMge1xuICAgIFJPVEFURSA9IFwiU3BhY2VcIixcbiAgICBET1dOID0gXCJBcnJvd0Rvd25cIixcbiAgICBMRUZUID0gXCJBcnJvd0xlZnRcIixcbiAgICBSSUdIVCA9IFwiQXJyb3dSaWdodFwiXG59XG5cbi8qKlxuICogTWFuYWdlcyBnYW1lIGNvcmUgbG9naWNcbiAqL1xuZXhwb3J0IGNsYXNzIE1vZGVsIHtcblxuICAgIGNvbnRhaW5lcjogUElYSS5Db250YWluZXI7XG4gICAgZmFsbGluZ1RldHJvbWlubzogRmFsbGluZ1RldHJvbWlubztcbiAgICBncmlkOiBHcmlkO1xuICAgIGlzSW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgIHJlc2V0OiAoKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBQSVhJLkNvbnRhaW5lciwgcmVzZXQ6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuZmFsbGluZ1RldHJvbWlubyA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKFJPV1MsIENPTFMsIHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5yZXNldCA9IHJlc2V0O1xuICAgIH1cblxuICAgIHNldEludGVyYWN0aXZlKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNJbnRlcmFjdGl2ZSA9IG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBhbGwgcG9zc2libGUgY29sbGlzaW9ucyBmb3IgZ2l2ZW4gdGFyZ2V0XG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqL1xuICAgIGNvbGxpc2lvbih0YXJnZXQ6IE1hdHJpeCkge1xuICAgICAgICBjb25zdCBpc0luQm91bmRzID0gdGFyZ2V0LmlzSW5Cb3VuZHMoQ09MUywgUk9XUyk7XG4gICAgICAgIGNvbnN0IGlzR3JpZENvbGxpc2lvbiA9IHRoaXMuZ3JpZC5jb2xsaXNpb24odGFyZ2V0KTtcblxuICAgICAgICByZXR1cm4gIWlzSW5Cb3VuZHMgfHwgaXNHcmlkQ29sbGlzaW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZHJhd3MgcGxheSBhcmVhLCBiYXNlZCBvbiBjdXJyZW50IGdhbWUgc3RhdGU6XG4gICAgICovXG4gICAgZHJhd0dhbWVTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5ncmlkLnJlZHJhdygpO1xuICAgICAgICB0aGlzLmZhbGxpbmdUZXRyb21pbm8/LnJlZHJhdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbCBzdXBwb3J0ZWQgdGV0cm9taW5vIHRyYW5zZm9ybWF0aW9ucyBhcmUgaGFuZGxlZCBoZXJlOlxuICAgICAqIEBwYXJhbSBvcHRpb25cbiAgICAgKi9cbiAgICB0cmFuc2Zvcm0ob3B0aW9uOiBUcmFuc2Zvcm1PcHRpb25zKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuZmFsbGluZ1RldHJvbWlubyA9PT0gbnVsbCB8fCAhdGhpcy5pc0ludGVyYWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKG9wdGlvbikge1xuICAgICAgICAgICAgY2FzZSBUcmFuc2Zvcm1PcHRpb25zLkRPV046XG4gICAgICAgICAgICAgICAgdGhpcy50cnlNb3ZlRG93bigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUcmFuc2Zvcm1PcHRpb25zLlJPVEFURTpcbiAgICAgICAgICAgICAgICB0aGlzLnRyeVJvdGF0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUcmFuc2Zvcm1PcHRpb25zLkxFRlQ6XG4gICAgICAgICAgICAgICAgdGhpcy50cnlNb3ZlSG9yaXpvbnRhbGx5KC0xKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVHJhbnNmb3JtT3B0aW9ucy5SSUdIVDpcbiAgICAgICAgICAgICAgICB0aGlzLnRyeU1vdmVIb3Jpem9udGFsbHkoMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFVuc3VwcG9ydGVkIHRyYW5zZm9ybSBvcHRpb24sIGV4cGVjdGVkICR7VHJhbnNmb3JtT3B0aW9uc30sIHdhcyAke29wdGlvbn1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZHJhd0dhbWVTdGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmVzIHRldHJvbWlubyBvbmUgY2VsbCBkb3duLCBpZiBwb3NzaWJsZVxuICAgICAqL1xuICAgIHRyeU1vdmVEb3duKCkge1xuICAgICAgICBpZiAodGhpcy5ncmlkLmNvbGxpc2lvbih0aGlzLmZhbGxpbmdUZXRyb21pbm8uc2hhcGUsIDAsIDEpKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NHcmlkQ29sbGlzaW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZhbGxpbmdUZXRyb21pbm8ubW92ZSgwLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgcmVhY2hpbmcgdGhlIGdyaWQgZXZlbnQ6XG4gICAgICovXG4gICAgcHJvY2Vzc0dyaWRDb2xsaXNpb24oKSB7XG4gICAgICAgIC8vIHRoZSB0ZXRyb21pbm8gYmVjb21lcyBwYXJ0IG9mIHRoZSBncmlkIG5vdzpcbiAgICAgICAgdGhpcy5ncmlkLmFkZCh0aGlzLmZhbGxpbmdUZXRyb21pbm8uc2hhcGUpO1xuXG4gICAgICAgIC8vIHByZXZlbnRpbmcgaW50ZXJhY3Rpb25zIHdoaWxlIHdpbiByb3dzIGFyZSBidXJuaW5nOlxuICAgICAgICBpZiAodGhpcy5ncmlkLmhhc1dpblJvd3MoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRJbnRlcmFjdGl2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGV0cm9taW5vIGhpdHMgdGhlIGdyaWQgb24gdGhlIHZlcnkgc3RhcnQgLSBnYW1lIGlzIG92ZXIgYXQgdGhpcyBwb2ludDpcbiAgICAgICAgaWYgKHRoaXMuZmFsbGluZ1RldHJvbWluby55ID09PSAwKSB7XG4gICAgICAgICAgICBhbGVydChcIlRvbyBiYWQgOihcIik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbGVhcmluZyBjdXJyZW50IHRldHJvbWlub1xuICAgICAgICB0aGlzLmZhbGxpbmdUZXRyb21pbm8uaGlkZSgpO1xuICAgICAgICB0aGlzLmZhbGxpbmdUZXRyb21pbm8gPSBudWxsO1xuICAgIH1cblxuICAgIHRyeU1vdmVIb3Jpem9udGFsbHkoZFg6IG51bWJlcikge1xuICAgICAgICAvLyBtb3ZlIGFuZCBjaGVjayBpZiBpdCdzIG9rXG4gICAgICAgIHRoaXMuZmFsbGluZ1RldHJvbWluby5tb3ZlKGRYLCAwKTtcbiAgICAgICAgLy8gaWYgaXQncyBub3QuLi5cbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uKHRoaXMuZmFsbGluZ1RldHJvbWluby5zaGFwZSkpIHtcbiAgICAgICAgICAgIC8vIHRoZW4gcmV2ZXJ0IHRoZSBvcmlnaW5hbCBtb3Zpbmc6XG4gICAgICAgICAgICB0aGlzLmZhbGxpbmdUZXRyb21pbm8ubW92ZSgtZFgsIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJ5Um90YXRlKCkge1xuICAgICAgICAvLyByb3RhdGUgYW5kIGNoZWNrIGlmIGl0J3Mgb2tcbiAgICAgICAgdGhpcy5mYWxsaW5nVGV0cm9taW5vLnNoYXBlLnJvdGF0ZSh0cnVlKTtcbiAgICAgICAgLy8gaWYgaXQncyBub3QuLi5cbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uKHRoaXMuZmFsbGluZ1RldHJvbWluby5zaGFwZSkpIHtcbiAgICAgICAgICAgIC8vIHRoZW4gcmV2ZXJ0IHRoZSBvcmlnaW5hbCByb3RhdGlvbjpcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZ1RldHJvbWluby5zaGFwZS5yb3RhdGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtNYXRyaXh9IGZyb20gXCIuLi91dGlscy9NYXRyaXhcIjtcbmltcG9ydCB7VGV0cm9taW5vfSBmcm9tIFwiLi9UZXRyb21pbm9cIjtcbmltcG9ydCB7QkxPQ0tfU0lERV9MRU5HVEgsIENPTFN9IGZyb20gXCIuLi9jb25maWcvbGF5b3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBGYWxsaW5nVGV0cm9taW5vIGV4dGVuZHMgVGV0cm9taW5vIHtcblxuICAgIHJlc2V0KHNoYXBlOiBNYXRyaXgpIHtcbiAgICAgICAgc3VwZXIucmVzZXQoc2hhcGUpO1xuXG4gICAgICAgIHRoaXMuYWxpZ25Ub0NlbnRlcigpO1xuXG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlcyB0ZXRyb21pbm8gdG8gdGhlIGNhbnRlciBvZiBwbGF5IGFyZWE6XG4gICAgICovXG4gICAgYWxpZ25Ub0NlbnRlcigpIHtcbiAgICAgICAgY29uc3QgcGxheUFyZWFDZW50ZXIgPSBNYXRoLmZsb29yKENPTFMgLyAyKTtcbiAgICAgICAgY29uc3Qgc2hhcGVDZW50ZXIgPSBNYXRoLmZsb29yKHRoaXMuc2hhcGUubWF0cml4Lmxlbmd0aCAvIDIpO1xuICAgICAgICBjb25zdCBjZW50ZXIgPSBwbGF5QXJlYUNlbnRlciAtIHNoYXBlQ2VudGVyO1xuXG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMueCA9IGNlbnRlciAqIEJMT0NLX1NJREVfTEVOR1RIO1xuICAgICAgICB0aGlzLnNoYXBlLnJlc2V0KGNlbnRlciwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHlpbmcgYW55IGNoYW5nZXMgdG8gcG9zaXRpb246XG4gICAgICogQHBhcmFtIGRYIGhvcml6b250YWwgZGlzcGxhY2VtZW50XG4gICAgICogQHBhcmFtIGRZIHZlcnRpY2FsIGRpc3BsYWNlbWVudFxuICAgICAqL1xuICAgIG1vdmUoZFg6IG51bWJlciwgZFk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggKz0gQkxPQ0tfU0lERV9MRU5HVEggKiBkWDtcbiAgICAgICAgdGhpcy55ICs9IEJMT0NLX1NJREVfTEVOR1RIICogZFk7XG5cbiAgICAgICAgLy8gYXBwbHlpbmcgb2Zmc2V0cyB0byB0aGUgbWF0cml4IChuZWVkZWQgZm9yIGNvbGxpc2lvbnMgY2FsY3VsYXRpb25zKTpcbiAgICAgICAgdGhpcy5zaGFwZS5hcHBseU9mZnNldHMoZFgsIGRZKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7TWF0cml4fSBmcm9tIFwiLi4vdXRpbHMvTWF0cml4XCI7XG5pbXBvcnQge0JMT0NLX1NJREVfTEVOR1RIfSBmcm9tIFwiLi4vY29uZmlnL2xheW91dFwiO1xuaW1wb3J0IHtDT0xPUlN9IGZyb20gXCIuLi9jb25maWcvY29sb3JzXCI7XG5cbmV4cG9ydCBjbGFzcyBHcmlkIGV4dGVuZHMgTWF0cml4IHtcblxuICAgIFdJTl9DT0xPUiA9IDg7XG4gICAgRU1QVFlfQ09MT1IgPSAwO1xuICAgIGNvbHM6IG51bWJlcjtcbiAgICByb3dzOiBudW1iZXI7XG4gICAgZ2Z4OiBQSVhJLkdyYXBoaWNzO1xuXG4gICAgY29uc3RydWN0b3Iocm93czogbnVtYmVyLCBjb2xzOiBudW1iZXIsIHBhcmVudDogUElYSS5Db250YWluZXIpIHtcbiAgICAgICAgc3VwZXIocm93cywgY29scywgMCk7XG4gICAgICAgIHRoaXMuY29scyA9IGNvbHM7XG4gICAgICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgICAgIHRoaXMuZ2Z4ID0gdGhpcy5pbml0Q2VsbHNHRlgocGFyZW50KTtcbiAgICAgICAgdGhpcy5hZGRGcmFtZShwYXJlbnQpO1xuICAgIH1cblxuICAgIC8vPGVkaXRvci1mb2xkIGRlc2M9XCJJTklUXCI+XG4gICAgLyoqXG4gICAgICogUElYSS5HcmFwaGljcyB0byByZW5kZXIgY2VsbHMgb246XG4gICAgICogQHBhcmFtIHBhcmVudFxuICAgICAqL1xuICAgIGluaXRDZWxsc0dGWChwYXJlbnQ6IFBJWEkuQ29udGFpbmVyKXtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgICAgICAvLyBpbnN0ZWFkIG9mIG11bHRpcGx5aW5nIG9uIGV2ZXJ5IHJlZHJhdzpcbiAgICAgICAgY2VsbHMuc2NhbGUuc2V0KEJMT0NLX1NJREVfTEVOR1RIKTtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5hZGRDaGlsZChjZWxscyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSnVzdCBhIGZyYW1lIGFyb3VuZCBwbGF5aW5nIGFyZWFcbiAgICAgKiBAcGFyYW0gcGFyZW50XG4gICAgICovXG4gICAgYWRkRnJhbWUocGFyZW50OiBQSVhJLkNvbnRhaW5lcil7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgZnJhbWUubGluZVN0eWxlKDQsIDB4ZGRhYjdjLCAxKTtcbiAgICAgICAgZnJhbWUuZHJhd1JlY3QoMCwgMCwgdGhpcy5jb2xzICogQkxPQ0tfU0lERV9MRU5HVEgsIHRoaXMucm93cyAqIEJMT0NLX1NJREVfTEVOR1RIKTtcbiAgICAgICAgZnJhbWUuZW5kRmlsbCgpO1xuICAgICAgICBwYXJlbnQuYWRkQ2hpbGQoZnJhbWUpO1xuICAgIH1cbiAgICAvLzwvZWRpdG9yLWZvbGQ+XG5cbiAgICAvLzxlZGl0b3ItZm9sZCBkZXNjPVwiV0lOXCI+XG4gICAgLyoqXG4gICAgICogQHJldHVybiBhcnJheSBvZiByb3dzIGluZGV4ZXMsIHRoYXQgdGhhdCBoYXZlIG5vIGJsYW5rIGJsb2Nrc1xuICAgICAqL1xuICAgIGdldEZpbGxlZFJvd3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5yZWR1Y2UoKHJlc3VsdCwgY3VycmVudCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQuZXZlcnkoY2VsbCA9PiBjZWxsICE9PSB0aGlzLkVNUFRZX0NPTE9SKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwgW10pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN3aXRjaGluZyB3aW4gcm93cyB0byBcIndpblwiIGNvbG9yXG4gICAgICovXG4gICAgYXBwbHlXaW5Sb3dzKCkge1xuICAgICAgICB0aGlzLmdldEZpbGxlZFJvd3MoKS5mb3JFYWNoKHJvd0luZGV4ID0+IHtcbiAgICAgICAgICAgIHRoaXMubWF0cml4W3Jvd0luZGV4XS5maWxsKHRoaXMuV0lOX0NPTE9SKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFzV2luUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsbGVkUm93cygpLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0dGluZyByaWQgb2YgYWxsIHRoZSB3aW4gcm93cyAoYWRkaW5nIGVtcHR5IG9uZXMgb24gdG9wIGluc3RlYWQpOlxuICAgICAqL1xuICAgIGNsZWFyV2luUm93cygpIHtcbiAgICAgICAgdGhpcy5nZXRGaWxsZWRSb3dzKCkuZm9yRWFjaChyb3dJbmRleCA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hdHJpeC5zcGxpY2Uocm93SW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5tYXRyaXgudW5zaGlmdChuZXcgQXJyYXkodGhpcy5jb2xzKS5maWxsKHRoaXMuRU1QVFlfQ09MT1IpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vPC9lZGl0b3ItZm9sZD5cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcmluZyBjdXJyZW50IGdyaWQgc3RhdGU6XG4gICAgICovXG4gICAgcmVkcmF3KCl7XG4gICAgICAgIHRoaXMuZ2Z4LmNsZWFyKCk7XG5cbiAgICAgICAgdGhpcy5mb3JFYWNoQ2VsbCgoY2VsbCwgcm93SW5kZXgsIGNvbGxJbmRleCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZnguYmVnaW5GaWxsKENPTE9SU1tjZWxsXSk7XG4gICAgICAgICAgICAvLyBwcm9wZXIgZGltZW5zaW9ucyBhcmUgaGFuZGxlZCBvbiBnZnggaW5pdGlhbGl6YXRpb246XG4gICAgICAgICAgICB0aGlzLmdmeC5kcmF3UmVjdChjb2xsSW5kZXgsIHJvd0luZGV4LCAxLCAxKTtcbiAgICAgICAgICAgIHRoaXMuZ2Z4LmVuZEZpbGwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzZXQoKXtcbiAgICAgICAgdGhpcy5mb3JFYWNoQ2VsbCgoY2VsbCwgcm93SW5kZXgsIGNvbGxJbmRleCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYXRyaXhbcm93SW5kZXhdW2NvbGxJbmRleF0gPSB0aGlzLkVNUFRZX0NPTE9SO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1RldHJvbWlub30gZnJvbSBcIi4vVGV0cm9taW5vXCI7XG5pbXBvcnQge2dldFJhbmRvbVNoYXBlfSBmcm9tIFwiLi4vY29uZmlnL3NoYXBlc1wiO1xuaW1wb3J0IHt0aWNrZXJDb25maWd9IGZyb20gXCIuLi9jb25maWcvdGlja2VyXCI7XG5pbXBvcnQge0JMT0NLX1NJREVfTEVOR1RILCBDT0xTLCBpbmZvUGFuZWxMYXlvdXQsIFJPV1N9IGZyb20gXCIuLi9jb25maWcvbGF5b3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBJbmZvUGFuZWwgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XG5cbiAgICBuZXh0OiBUZXRyb21pbm87XG4gICAgbGV2ZWxWYWx1ZTogbnVtYmVyO1xuICAgIGJ1cm5zVmFsdWU6IG51bWJlcjtcbiAgICBsZXZlbFRleHQ6IFBJWEkuVGV4dDtcbiAgICBidXJuc1RleHQ6IFBJWEkuVGV4dDtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogUElYSS5Db250YWluZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgcGFyZW50LmFkZENoaWxkKHRoaXMpO1xuICAgICAgICAvLyBwbGF5IGFyZWEgd2lkdGggKyBoYWxmIG9mIHBhbmVsIHdpZHRoICh0byBlbnN1cmUgYWxsIGJsb2NrcyBhcmUgZWFzaWx5IGNlbnRlcmVkIGhvcml6b250YWxseSk6XG4gICAgICAgIHRoaXMueCA9IENPTFMgKiBCTE9DS19TSURFX0xFTkdUSCArIGluZm9QYW5lbExheW91dC5XSURUSCAvIDI7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvLzxlZGl0b3ItZm9sZCBkZXNjPVwiSU5JVFwiPlxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEJHKCk7XG4gICAgICAgIHRoaXMubmV4dCA9IHRoaXMuaW5pdE5leHRUZXRyb21pbm8oKTtcbiAgICAgICAgdGhpcy5sZXZlbFRleHQgPSB0aGlzLmluaXRUZXh0QmxvY2soaW5mb1BhbmVsTGF5b3V0LkxFVkVMLCBcIkxFVkVMOlwiKTtcbiAgICAgICAgdGhpcy5idXJuc1RleHQgPSB0aGlzLmluaXRUZXh0QmxvY2soaW5mb1BhbmVsTGF5b3V0LkJVUk5TLCBcIlRPVEFMIEJVUk5TOlwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW1wbHkgZmlsbGluZyB0aGUgZW50aXJlIGxheW91dCB3aXRoIGNvbG9yXG4gICAgICovXG4gICAgaW5pdEJHKCkge1xuICAgICAgICBjb25zdCBnZnggPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgICAgICBnZnguYmVnaW5GaWxsKDB4RkZGRkZGLCAwLjMpO1xuICAgICAgICAvLyB0aGUgZW50aXJlIHBhbmVsIGlzIHNoaWZ0ZWQgYnkgaGFsZiBvZiB0aGUgd2lkdGggaG9yaXpvbnRhbGx5LCBmb3IgZWFzZSBjaGlsZHJlbiBvZiBjZW50ZXJpbmcsXG4gICAgICAgIC8vIGNvbXBlbnNhdGluZyBoZXJlOlxuICAgICAgICBnZnguZHJhd1JlY3QoLWluZm9QYW5lbExheW91dC5XSURUSCAvIDIsIDAsIGluZm9QYW5lbExheW91dC5XSURUSCwgUk9XUyAqIEJMT0NLX1NJREVfTEVOR1RIKTtcbiAgICAgICAgZ2Z4LmVuZEZpbGwoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChnZngpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBcIk5FWFRcIiBibG9jayB3aXRoIHRldHJvbWlubyB0byBiZSBhZGRlZCBhZnRlciBjdXJyZW50bHkgZmFsbGluZyBpcyBkb25lOlxuICAgICAqL1xuICAgIGluaXROZXh0VGV0cm9taW5vKCkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5hZGRDaGlsZChuZXcgUElYSS5Db250YWluZXIoKSk7XG4gICAgICAgIHdyYXBwZXIueSA9IGluZm9QYW5lbExheW91dC5ORVhUO1xuXG4gICAgICAgIHRoaXMuYWRkVGl0bGUod3JhcHBlciwgXCJORVhUXCIpO1xuXG4gICAgICAgIHJldHVybiBuZXcgVGV0cm9taW5vKHdyYXBwZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRpdGxlICsgdmFsdWUgYmxvY2s6XG4gICAgICogQHBhcmFtIG9mZnNldCB2ZXJ0aWNhbCBvZmZzZXQgb2YgdGhlIGJsb2NrXG4gICAgICogQHBhcmFtIHRpdGxlIG5hbWUgb2YgdGhlIGJsb2NrXG4gICAgICovXG4gICAgaW5pdFRleHRCbG9jayhvZmZzZXQ6IG51bWJlciwgdGl0bGU6IHN0cmluZyl7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLmFkZENoaWxkKG5ldyBQSVhJLkNvbnRhaW5lcigpKTtcbiAgICAgICAgd3JhcHBlci55ID0gb2Zmc2V0O1xuXG4gICAgICAgIHRoaXMuYWRkVGl0bGUod3JhcHBlciwgdGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IFBJWEkuVGV4dChcIlwiLCB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiAnVGV0cmlzJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAxMDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGl0bGUgaXMgYWRkZWQgd2l0aCBuZWdhdGl2ZSBvZmZzZXQsIHRoZXJlZm9yZSBubyBhZGRpdGlvbmFsIHBvc2l0aW9uaW5nIG9mIHZhbHVlIGlzIG5lZWRlZDpcbiAgICAgICAgdmFsdWUuYW5jaG9yLnggPSAwLjU7XG5cbiAgICAgICAgcmV0dXJuIHdyYXBwZXIuYWRkQ2hpbGQodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCB0aXRsZSB0byB0aGUgYmxvY2sgd2l0aCBwcmVkZWZpbmVkIHZlcnRpY2FsIG5lZ2F0aXZlIG9mZnNldCAodG8gbWFrZSBzdXJlIGl0J3MgXCJvbiB0b3BcIiBvZiBibG9jaydzIHZhbHVlKTpcbiAgICAgKiBAcGFyYW0gYmxvY2tcbiAgICAgKiBAcGFyYW0gdGV4dFxuICAgICAqL1xuICAgIGFkZFRpdGxlKGJsb2NrOiBQSVhJLkNvbnRhaW5lciwgdGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gYmxvY2suYWRkQ2hpbGQobmV3IFBJWEkuVGV4dCh0ZXh0LCB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgICAgICAgZm9udFNpemU6IDM2LFxuICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgfSkpO1xuICAgICAgICB0aXRsZS5hbmNob3Iuc2V0KDAuNSk7XG4gICAgICAgIHRpdGxlLnkgPSBpbmZvUGFuZWxMYXlvdXQuVElUTEVfT0ZGU0VUO1xuICAgICAgICByZXR1cm4gYmxvY2suYWRkQ2hpbGQodGl0bGUpO1xuICAgIH1cbiAgICAvLzwvZWRpdG9yLWZvbGQ+XG5cbiAgICBnZXROZXh0U2hhcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5leHQuZ2V0U2hhcGUoKS5jbG9uZSgpO1xuICAgIH1cblxuICAgIGdldExldmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgbmV4dCB0ZXRyb21pbm8gYW5kIHNob3cgaXQgb24gdGhlIHBhbmVsOlxuICAgICAqL1xuICAgIHVwZGF0ZU5leHRUZXRyb21pbm8oKSB7XG4gICAgICAgIHRoaXMubmV4dC5yZXNldChnZXRSYW5kb21TaGFwZSgpKTtcbiAgICAgICAgdGhpcy5uZXh0LnJlZHJhdygpO1xuICAgICAgICB0aGlzLm5leHQuYWxpZ25Ub0NlbnRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGV4dCBibG9ja3MgdmFsdWVzLCBiYXNlZCBvbiBidXJuZWQgcm93cyBudW1iZXJcbiAgICAgKiBAcGFyYW0gYnVybmVkUm93cyBhZGRlZCBidXJuZWQgcm93c1xuICAgICAqL1xuICAgIHVwZGF0ZVZhbHVlcyhidXJuZWRSb3dzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5idXJuc1ZhbHVlICs9IGJ1cm5lZFJvd3M7XG4gICAgICAgIGNvbnN0IHJhd0xldmVsc1ZhbHVlID0gTWF0aC5mbG9vcih0aGlzLmJ1cm5zVmFsdWUgLyB0aWNrZXJDb25maWcuQlVSTlNfUEVSX0xFVkVMKTtcbiAgICAgICAgdGhpcy5sZXZlbFZhbHVlID0gTWF0aC5taW4ocmF3TGV2ZWxzVmFsdWUsIHRpY2tlckNvbmZpZy5MRVZFTFMubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgdGhpcy5idXJuc1RleHQudGV4dCA9IHRoaXMuYnVybnNWYWx1ZS50b1N0cmluZygpO1xuICAgICAgICAvLyB1c2VyIGNvdW50cyBmcm9tIDEsIG5vdCBmcm9tIDA6XG4gICAgICAgIHRoaXMubGV2ZWxUZXh0LnRleHQgPSAodGhpcy5sZXZlbFZhbHVlICsgMSkudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcmluZyB0aGUgc3RhdGUgdG8gc3RhcnQgZnJvbSBjbGVhciBzaGVldDpcbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5idXJuc1ZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbFZhbHVlID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoMCk7XG4gICAgICAgIHRoaXMudXBkYXRlTmV4dFRldHJvbWlubygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7TWF0cml4fSBmcm9tIFwiLi4vdXRpbHMvTWF0cml4XCI7XG5pbXBvcnQge0JMT0NLX1NJREVfTEVOR1RIfSBmcm9tIFwiLi4vY29uZmlnL2xheW91dFwiO1xuaW1wb3J0IHtDT0xPUlN9IGZyb20gXCIuLi9jb25maWcvY29sb3JzXCI7XG5cbi8qKlxuICogVGhlIFwidGV0cm9taW5vXCItc2hhcGVkIGl0ZW0sIGNvbnNpc3Rpbmcgb2Ygc2VwYXJhdGUgc3ByaXRlc1xuICovXG5leHBvcnQgY2xhc3MgVGV0cm9taW5vIGV4dGVuZHMgUElYSS5Db250YWluZXJ7XG4gICAgc2hhcGU6IE1hdHJpeDtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogUElYSS5Db250YWluZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgcGFyZW50LmFkZENoaWxkKHRoaXMpO1xuICAgICAgICAvLyBhcHBseWluZyBzY2FsZSBvbmNlLCBvbiBpbml0XG4gICAgICAgIHRoaXMuc2NhbGUuc2V0KEJMT0NLX1NJREVfTEVOR1RIKTtcbiAgICB9XG5cbiAgICByZXNldChzaGFwZTogTWF0cml4KSB7XG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcblxuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XG5cbiAgICAgICAgdGhpcy5zZXR1cEltYWdlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZGluZyB0aGUgbmVlZGVkIG51bWJlciBvZiBicmlja3MvcGxhY2Vob2xkZXJzLCBkZXBlbmRpbmcgb24gY3VycmVudCBzaGFwZTpcbiAgICAgKi9cbiAgICBzZXR1cEltYWdlcygpIHtcbiAgICAgICAgdGhpcy5zaGFwZS5mb3JFYWNoQ2VsbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUoKTtcbiAgICAgICAgICAgIC8vIHByb3BlciBkaW1lbnNpb25zIGFyZSBoYW5kbGVkIG9uIGluaXQ6XG4gICAgICAgICAgICBzcHJpdGUud2lkdGggPSBzcHJpdGUuaGVpZ2h0ID0gMTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoc3ByaXRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBjdXJyZW50IHRldHJvbWlubyBzaGFwZTpcbiAgICAgKi9cbiAgICByZWRyYXcoKSB7XG4gICAgICAgIGxldCBjZWxsQ291bnQgPSAwO1xuXG4gICAgICAgIHRoaXMuc2hhcGUuZm9yRWFjaENlbGwoKGNlbGwsIHJvdywgY29sbCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhlIHNwcml0ZXMgYXJlIGFkZGVkIHRocm91Z2ggdGhlIHNhbWUgbG9vcCwgdGhlcmVmb3JlIGl0J3Mgc2FmZSB0byByZWx5IG9uIDE6MSBtYXRjaDpcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuZ2V0Q2hpbGRBdChjZWxsQ291bnQpIGFzIFBJWEkuU3ByaXRlO1xuXG4gICAgICAgICAgICAvLyAwIHN0YW5kcyBmb3IgXCJlbXB0eSBjZWxsXCJcbiAgICAgICAgICAgIHNwcml0ZS50ZXh0dXJlID0gY2VsbCA+IDAgP1xuICAgICAgICAgICAgICAgIFBJWEkudXRpbHMuVGV4dHVyZUNhY2hlW1wiYnJpY2tcIl0gOlxuICAgICAgICAgICAgICAgIFBJWEkuVGV4dHVyZS5FTVBUWTtcblxuICAgICAgICAgICAgLy8gcHJvcGVyIGRpbWVuc2lvbnMgYXJlIGhhbmRsZWQgb24gaW5pdDpcbiAgICAgICAgICAgIHNwcml0ZS5wb3NpdGlvbi5zZXQoY29sbCwgcm93KTtcblxuICAgICAgICAgICAgLy8gZWFjaCBzaGFwZSBoYXMgaXQncyBvd24gY29sb3I6XG4gICAgICAgICAgICBzcHJpdGUudGludCA9IENPTE9SU1tjZWxsXTtcblxuICAgICAgICAgICAgY2VsbENvdW50Kys7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFNoYXBlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnNoYXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJhc2ljYWxseSwgZW11bGF0aW5nIGFuY2hvci54ID0gMC41IGZvciBjb250YWluZXI6XG4gICAgICovXG4gICAgYWxpZ25Ub0NlbnRlcigpIHtcbiAgICAgICAgdGhpcy54ID0gLXRoaXMud2lkdGggLyAyO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDT0xPUlMgPSBbXG4gICAgMHgwMDAwMDAsXG4gICAgMHhGRjAwMDAsXG4gICAgMHgwMEZGMDAsXG4gICAgMHgwMDAwRkYsXG4gICAgMHhGRkZGMDAsXG4gICAgMHgwMEZGRkYsXG4gICAgMHgxMEZGMDEsXG4gICAgMHhGMDAwRkYsXG4gICAgMHgwMDAwMDBcbl07XG4iLCJleHBvcnQgY29uc3QgQkxPQ0tfU0lERV9MRU5HVEggPSA0NTtcbmV4cG9ydCBjb25zdCBST1dTID0gMjA7XG5leHBvcnQgY29uc3QgQ09MUyA9IDEwO1xuXG5leHBvcnQgY29uc3QgaW5mb1BhbmVsTGF5b3V0ID0ge1xuICAgIFdJRFRIOiAzMDAsXG4gICAgTkVYVDogMjAwLFxuICAgIExFVkVMOiA0MTAsXG4gICAgQlVSTlM6IDYwMCxcbiAgICBUSVRMRV9PRkZTRVQ6IC0yNVxufTtcblxuZXhwb3J0IGNvbnN0IGxheW91dCA9IHtcbiAgICB3aWR0aDogQ09MUyAqIEJMT0NLX1NJREVfTEVOR1RIICsgaW5mb1BhbmVsTGF5b3V0LldJRFRILFxuICAgIGhlaWdodDogUk9XUyAqIEJMT0NLX1NJREVfTEVOR1RIXG59O1xuIiwiaW1wb3J0IHtNYXRyaXh9IGZyb20gXCIuLi91dGlscy9NYXRyaXhcIjtcblxuY29uc3QgU0hBUEVTID0gW1xuICAgIFtcbiAgICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgICBbMSwgMSwgMSwgMV0sXG4gICAgICAgIFswLCAwLCAwLCAwXSxcbiAgICAgICAgWzAsIDAsIDAsIDBdXG4gICAgXSxcbiAgICBbXG4gICAgICAgIFsyLCAwLCAwXSxcbiAgICAgICAgWzIsIDIsIDJdLFxuICAgICAgICBbMCwgMCwgMF0sXG4gICAgXSxcbiAgICBbXG4gICAgICAgIFswLCAwLCAzXSxcbiAgICAgICAgWzMsIDMsIDNdLFxuICAgICAgICBbMCwgMCwgMF0sXG4gICAgXSxcbiAgICBbXG4gICAgICAgIFs0LCA0XSxcbiAgICAgICAgWzQsIDRdLFxuICAgIF0sXG4gICAgW1xuICAgICAgICBbMCwgNSwgNV0sXG4gICAgICAgIFs1LCA1LCAwXSxcbiAgICAgICAgWzAsIDAsIDBdLFxuICAgIF0sXG4gICAgW1xuICAgICAgICBbMCwgNiwgMF0sXG4gICAgICAgIFs2LCA2LCA2XSxcbiAgICAgICAgWzAsIDAsIDBdLFxuICAgIF0sXG4gICAgW1xuICAgICAgICBbNywgNywgMF0sXG4gICAgICAgIFswLCA3LCA3XSxcbiAgICAgICAgWzAsIDAsIDBdLFxuICAgIF1cbl0ubWFwKGFyciA9PiBNYXRyaXguZnJvbTJkQXJyYXkoYXJyKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21TaGFwZSgpIHtcbiAgICByZXR1cm4gU0hBUEVTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNIQVBFUy5sZW5ndGgpXTtcbn1cbiIsImV4cG9ydCBjb25zdCB0aWNrZXJDb25maWcgPSB7XG4gICAgUkFXX1RJQ0tfRFVSQVRJT046IDEwMDAsXG4gICAgQlVSTlNfUEVSX0xFVkVMOiAxMCwgLy8gdGhlIG51bWJlciBvZiBsaW5lcyBidXJuZWQgcmVxdWlyZWQgdG8gbWFrZSBpdCB0byBuZXh0IGxldmVsXG4gICAgTEVWRUxTOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDAuOSxcbiAgICAgICAgMC44LFxuICAgICAgICAwLjcsXG4gICAgICAgIDAuNixcbiAgICAgICAgMC41LFxuICAgICAgICAwLjQsXG4gICAgICAgIDAuMyxcbiAgICAgICAgMC4zLFxuICAgICAgICAwLjJcbiAgICBdXG59O1xuIiwiaW50ZXJmYWNlIEZvckVhY2hDZWxsQ2FsbGJhY2sge1xuICAgIChjZWxsVmFsZTogbnVtYmVyLCByb3dJbmRleDogbnVtYmVyLCBjb2x1bW5JbmRleDogbnVtYmVyKTogdm9pZDtcbn1cblxuLyoqXG4gKiBDb250YWlucyBhbGwgdGhlIG1hdHJpeCB0cmFuc2Zvcm1hdGlvbnMgcmVsYXRlZCBsb2dpY1xuICovXG5leHBvcnQgY2xhc3MgTWF0cml4IHtcblxuICAgIG1hdHJpeDogbnVtYmVyW11bXTtcbiAgICBvZmZzZXRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihyb3dzOiBudW1iZXIsIGNvbHM6IG51bWJlciwgaW5pdFZhbHVlPzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubWF0cml4ID0gbmV3IEFycmF5KHJvd3MpLmZpbGwoW10pXG4gICAgICAgICAgICAubWFwKCgpID0+IG5ldyBBcnJheShjb2xzKS5maWxsKGluaXRWYWx1ZSkpO1xuICAgIH1cblxuICAgIHJlc2V0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0cyA9IHt4LCB5fTtcbiAgICB9XG5cbiAgICBhcHBseU9mZnNldHMoZFg6IG51bWJlciwgZFk6IG51bWJlcikge1xuICAgICAgICB0aGlzLm9mZnNldHMueCArPSBkWDtcbiAgICAgICAgdGhpcy5vZmZzZXRzLnkgKz0gZFk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogMmQgZm9yRWFjaFxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGZvckVhY2hDZWxsKGNhbGxiYWNrOiBGb3JFYWNoQ2VsbENhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubWF0cml4LmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjZWxsLCBjb2xsSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjZWxsLCByb3dJbmRleCwgY29sbEluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGdpdmVuIG1hdHJpeCB0byBjdXJyZW50OlxuICAgICAqIEBwYXJhbSBtYXRyaXhcbiAgICAgKi9cbiAgICBhZGQobWF0cml4OiBNYXRyaXgpIHtcbiAgICAgICAgbWF0cml4LmZvckVhY2hDZWxsKChjZWxsLCByb3csIGNvbGwpID0+IHtcbiAgICAgICAgICAgIC8vIHNraXBwaW5nIGVtcHR5IGNlbGxzOlxuICAgICAgICAgICAgaWYgKGNlbGwgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbcm93ICsgbWF0cml4Lm9mZnNldHMueV1bY29sbCArIG1hdHJpeC5vZmZzZXRzLnhdID0gY2VsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgbm9uLWVtcHR5IGNlbGxzIG9mIGdpdmVuIG1hdHJpeCBjb2xsaWRlIHdpdGggY3VycmVudCBvbmU6XG4gICAgICogQHBhcmFtIG1hdHJpeCAtIHRoZSBvbmUgdG8gY2hlY2sgY29sbGlzaW9uIHdpdGhcbiAgICAgKiBAcGFyYW0gZFggLSBjdXN0b20gaG9yaXpvbnRhbCBkaXNwbGFjZW1lbnRcbiAgICAgKiBAcGFyYW0gZFkgLSBjdXN0b20gdmVydGljYWwgZGlzcGxhY2VtZW50XG4gICAgICogQHJldHVybiB0cnVlIGlmIGdpdmVuIG1hdHJpeCBjb2xsaWRlcyBjdXJyZW50OlxuICAgICAqL1xuICAgIGNvbGxpc2lvbihtYXRyaXg6IE1hdHJpeCwgZFggPSAwLCBkWSA9IDApIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbWF0cml4Lm1hdHJpeC5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2xsID0gMDsgY29sbCA8IG1hdHJpeC5tYXRyaXhbcm93XS5sZW5ndGg7IGNvbGwrKykge1xuICAgICAgICAgICAgICAgIGlmIChtYXRyaXgubWF0cml4W3Jvd11bY29sbF0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSBjb2xsICsgbWF0cml4Lm9mZnNldHMueCArIGRYO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gcm93ICsgbWF0cml4Lm9mZnNldHMueSArIGRZO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWF0cml4W3ldIHx8IHRoaXMubWF0cml4W3ldW3hdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIGFsbCBub24tZW1wdHkgY2VsbHMgZml0IHdpdGhpbiBnaXZlbiBib3VuZGFyaWVzXG4gICAgICogQHBhcmFtIGJvdW5kWFxuICAgICAqIEBwYXJhbSBib3VuZFlcbiAgICAgKi9cbiAgICBpc0luQm91bmRzKGJvdW5kWDogbnVtYmVyLCBib3VuZFk6IG51bWJlcikge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLm1hdHJpeC5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2xsID0gMDsgY29sbCA8IHRoaXMubWF0cml4W3Jvd10ubGVuZ3RoOyBjb2xsKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRyaXhbcm93XVtjb2xsXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IGNvbGwgKyB0aGlzLm9mZnNldHMueDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IHJvdyArIHRoaXMub2Zmc2V0cy55O1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IDAgfHwgeCA+PSBib3VuZFggfHwgeSA+PSBib3VuZFkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSBtYXRyaXhcbiAgICAgKiBAcGFyYW0gY2xvY2tXaXNlIHRydWUgaWYgY2xvY2t3aXNlIHJvdGF0aW9uIGlzIHJlcXVpcmVkXG4gICAgICogQGV4YW1wbGU6XG4gICAgICogIHx4fCB8IHwgICAgICAgICAgICAgIHwgfHh8eHxcbiAgICAgKiAgfHh8IHwgfCAtPiBjbG9ja1dpc2UgfHh8IHwgfFxuICAgICAqICB8IHx4fCB8ICAgICAgICAgICAgICB8IHwgfCB8XG4gICAgICpcbiAgICAgKiAgfHh8IHwgfCAgICAgICAgICAgICAgICAgICAgIHwgfCB8IHxcbiAgICAgKiAgfHh8IHwgfCAtPiBjb3VudGVyQ2xvY2tXaXNlIHwgfCB8eHxcbiAgICAgKiAgfCB8eHwgfCAgICAgICAgICAgICAgICAgICAgIHx4fHh8IHxcbiAgICAgKi9cbiAgICByb3RhdGUoY2xvY2tXaXNlOiBib29sZWFuKSB7XG4gICAgICAgIC8vIHx4fCB8IHwgICAgfHh8eHwgfFxuICAgICAgICAvLyB8eHwgfCB8IC0+IHwgfCB8eHxcbiAgICAgICAgLy8gfCB8eHwgfCAgICB8IHwgfCB8XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5tYXRyaXgubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgeTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgW3RoaXMubWF0cml4W3hdW3ldLCB0aGlzLm1hdHJpeFt5XVt4XV0gPSBbdGhpcy5tYXRyaXhbeV1beF0sIHRoaXMubWF0cml4W3hdW3ldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNsb2NrV2lzZSA/XG4gICAgICAgICAgICB0aGlzLm1hdHJpeC5mb3JFYWNoKChyb3cgPT4gcm93LnJldmVyc2UoKSkpIDpcbiAgICAgICAgICAgIHRoaXMubWF0cml4LnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICBjbG9uZSgpe1xuICAgICAgICByZXR1cm4gTWF0cml4LmZyb20yZEFycmF5KHRoaXMubWF0cml4KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbTJkQXJyYXkoYXJyOiBudW1iZXJbXVtdKSB7XG4gICAgICAgIC8vIGp1c3QgYSBkdW1teSB2YWx1ZSwgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGFjdHVhbCAyZCBhcnJheTpcbiAgICAgICAgY29uc3QgbWF0cml4ID0gbmV3IE1hdHJpeCgwLCAwKTtcbiAgICAgICAgbWF0cml4Lm1hdHJpeCA9IGFyci5tYXAoaW5uZXJBcnJheSA9PiBpbm5lckFycmF5LnNsaWNlKCkpO1xuICAgICAgICByZXR1cm4gbWF0cml4O1xuICAgIH1cbn1cbiIsImltcG9ydCB7dGlja2VyQ29uZmlnfSBmcm9tIFwiLi4vY29uZmlnL3RpY2tlclwiO1xuXG4vKipcbiAqIEhlbHBlciBjbGFzcyB0byBoYW5kbGUgZ2FtZSBzcGVlZCwgYmFzZWQgb24gY3VycmVudCBsZXZlbFxuICovXG5leHBvcnQgY2xhc3MgVGlja2Vye1xuXG4gICAgcmF3VGlja0R1cmF0aW9uOiBudW1iZXI7XG4gICAgbGV2ZWxzOiBudW1iZXJbXTtcbiAgICBjdXJyZW50TGV2ZWw6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogdHlwZW9mIHRpY2tlckNvbmZpZykge1xuICAgICAgICB0aGlzLnJhd1RpY2tEdXJhdGlvbiA9IGNvbmZpZy5SQVdfVElDS19EVVJBVElPTjtcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBjb25maWcuTEVWRUxTO1xuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IHRoaXMubGV2ZWxzWzBdO1xuICAgIH1cblxuICAgIGdldFRpY2tEdXJhdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5yYXdUaWNrRHVyYXRpb24gKiB0aGlzLmN1cnJlbnRMZXZlbDtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50TGV2ZWwoaW5kZXg6IG51bWJlcil7XG4gICAgICAgIHRoaXMuY3VycmVudExldmVsID0gdGhpcy5sZXZlbHNbaW5kZXhdO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzY2FsZVRvV2luZG93KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAvL0ZpZ3VyZSBvdXQgdGhlIHNjYWxlIGFtb3VudCBvbiBlYWNoIGF4aXNcbiAgICBjb25zdCBzY2FsZVggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIGNhbnZhcy5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBzY2FsZVkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyBjYW52YXMub2Zmc2V0SGVpZ2h0O1xuXG4gICAgLy9TY2FsZSB0aGUgY2FudmFzIGJhc2VkIG9uIHdoaWNoZXZlciB2YWx1ZSBpcyBsZXNzOiBgc2NhbGVYYCBvciBgc2NhbGVZYFxuICAgIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpO1xuICAgIGNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKFwiICsgc2NhbGUgKyBcIilcIjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vdHMvR2FtZVwiO1xuXG5uZXcgR2FtZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==