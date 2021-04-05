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
        this.loader.add('brick', './assets/brick.png');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvR2FtZS50cyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvTG9hZGVyLnRzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy90cy9Nb2RlbC50cyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvY29tcG9uZW50cy9GYWxsaW5nVGV0cm9taW5vLnRzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy90cy9jb21wb25lbnRzL0dyaWQudHMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3RzL2NvbXBvbmVudHMvSW5mb1BhbmVsLnRzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy90cy9jb21wb25lbnRzL1RldHJvbWluby50cyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvY29uZmlnL2NvbG9ycy50cyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvY29uZmlnL2xheW91dC50cyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvY29uZmlnL3NoYXBlcy50cyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvY29uZmlnL3RpY2tlci50cyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvdHMvdXRpbHMvTWF0cml4LnRzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy90cy91dGlscy9UaWNrZXIudHMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3RzL3V0aWxzL3NjYXRlVG9XaW5kb3cudHMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3Jj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QUFDLFlBQVksQ0FBQztJQUNwRCxDQUFDO0lBRUQsZ0NBQWUsR0FBZixVQUFnQixLQUFhO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qk0sU0FBUyxhQUFhLENBQUMsTUFBeUI7SUFDbkQsMENBQTBDO0lBQzFDLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN0RCxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFFeEQseUVBQXlFO0lBQ3pFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3BELENBQUM7Ozs7Ozs7VUNSRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ042QjtBQUU3QixJQUFJLDZDQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvYWRlcn0gZnJvbSBcIi4vTG9hZGVyXCI7XG5pbXBvcnQge01vZGVsLCBUcmFuc2Zvcm1PcHRpb25zfSBmcm9tIFwiLi9Nb2RlbFwiO1xuaW1wb3J0IHtzY2FsZVRvV2luZG93fSBmcm9tIFwiLi91dGlscy9zY2F0ZVRvV2luZG93XCI7XG5pbXBvcnQge0ZhbGxpbmdUZXRyb21pbm99IGZyb20gXCIuL2NvbXBvbmVudHMvRmFsbGluZ1RldHJvbWlub1wiO1xuaW1wb3J0IHtJbmZvUGFuZWx9IGZyb20gXCIuL2NvbXBvbmVudHMvSW5mb1BhbmVsXCI7XG5pbXBvcnQge1RpY2tlcn0gZnJvbSBcIi4vdXRpbHMvVGlja2VyXCI7XG5pbXBvcnQge3RpY2tlckNvbmZpZ30gZnJvbSBcIi4vY29uZmlnL3RpY2tlclwiO1xuaW1wb3J0IHtsYXlvdXR9IGZyb20gXCIuL2NvbmZpZy9sYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG5cbiAgICBhcHA6IFBJWEkuQXBwbGljYXRpb247XG4gICAgdGlja2VyOiBUaWNrZXI7XG4gICAgZmFsbGluZ1RldHJvbWlubzogRmFsbGluZ1RldHJvbWlubztcbiAgICBpbmZvUGFuZWw6IEluZm9QYW5lbDtcbiAgICBtb2RlbDogTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hcHAgPSB0aGlzLmluaXRBcHAoKTtcblxuICAgICAgICBuZXcgTG9hZGVyKHRoaXMuYXBwLCAoKSA9PiB0aGlzLnN0YXJ0KCkpO1xuICAgIH1cblxuICAgIGluaXRBcHAoKSB7XG4gICAgICAgIGNvbnN0IGFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKHtcbiAgICAgICAgICAgIHdpZHRoOiBsYXlvdXQud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGxheW91dC5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC52aWV3KTtcblxuICAgICAgICAvLyBlbnN1cmluZyB0aGUgZ2FtZSBjb3ZlcnMgZW50aXJlIHNjcmVlbiAod2l0aCBhc3BlY3QgcmF0aW8pIG9uIGdhbWUgc3RhcnQ6XG4gICAgICAgIHNjYWxlVG9XaW5kb3coYXBwLnZpZXcpO1xuXG4gICAgICAgIC8vIGVuc3VyaW5nIHRoZSBnYW1lIGNvdmVycyBlbnRpcmUgc2NyZWVuIG9uIHNjcmVlbiBkaW1lbnNpb25zIGNoYW5nZTpcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2NhbGVUb1dpbmRvdyhhcHAudmlldyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhcHA7XG4gICAgfVxuXG4gICAgYXN5bmMgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudGlja2VyID0gbmV3IFRpY2tlcih0aWNrZXJDb25maWcpO1xuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IE1vZGVsKHRoaXMuYXBwLnN0YWdlLCAoKSA9PiB0aGlzLnJlc2V0KCkpO1xuICAgICAgICB0aGlzLmZhbGxpbmdUZXRyb21pbm8gPSBuZXcgRmFsbGluZ1RldHJvbWlubyh0aGlzLmFwcC5zdGFnZSk7XG4gICAgICAgIHRoaXMuaW5mb1BhbmVsID0gbmV3IEluZm9QYW5lbCh0aGlzLmFwcC5zdGFnZSk7XG5cbiAgICAgICAgdGhpcy5zZXR1cEludGVyYWN0aW9uKCk7XG5cbiAgICAgICAgLy8gaW5maW5pdGUgYXN5bmMgbG9vcCBvZiBjb25zZWN1dGl2ZSBnYW1lIHN0YXRlczpcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5ncmlkLmhhc1dpblJvd3MoKSA/XG4gICAgICAgICAgICB0aGlzLnBsYXlXaW4oKSA6XG4gICAgICAgICAgICB0aGlzLm1vdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5nbGUgY2VsbCBkb3dud2FyZHMgbW90aW9uIChhbmQgZmFsbGluZyBpdGVtIHJlc2V0LCBpZiBuZWVkZWQpXG4gICAgICovXG4gICAgbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZmFsbGluZ1RldHJvbWlubyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mYWxsaW5nVGV0cm9taW5vLnJlc2V0KHRoaXMuaW5mb1BhbmVsLmdldE5leHRTaGFwZSgpKTtcbiAgICAgICAgICAgIHRoaXMuaW5mb1BhbmVsLnVwZGF0ZU5leHRUZXRyb21pbm8oKTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZmFsbGluZ1RldHJvbWlubyA9IHRoaXMuZmFsbGluZ1RldHJvbWlubztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9kZWwudHJhbnNmb3JtKFRyYW5zZm9ybU9wdGlvbnMuRE9XTik7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aGlzLnRpY2tlci5nZXRUaWNrRHVyYXRpb24oKSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZ2hsaWdodCBjdXJyZW50bHkgd2lubmluZyByb3dzOlxuICAgICAqL1xuICAgIHBsYXlXaW4oKSB7XG4gICAgICAgIC8vIHNldCB3aW5uaW5nIHJvd3Mgb24gbWF0cml4OlxuICAgICAgICB0aGlzLm1vZGVsLmdyaWQuYXBwbHlXaW5Sb3dzKCk7XG4gICAgICAgIC8vIGFuZCByZW5kZXIgdGhlbTpcbiAgICAgICAgdGhpcy5tb2RlbC5kcmF3R2FtZVN0YXRlKCk7XG4gICAgICAgIC8vIHVwZGF0ZSBpbmZvO1xuICAgICAgICB0aGlzLmluZm9QYW5lbC51cGRhdGVWYWx1ZXModGhpcy5tb2RlbC5ncmlkLmdldEZpbGxlZFJvd3MoKS5sZW5ndGgpO1xuICAgICAgICAvLyB1cGRhdGUgZ2FtZSBzcGVlZDpcbiAgICAgICAgdGhpcy50aWNrZXIuc2V0Q3VycmVudExldmVsKHRoaXMuaW5mb1BhbmVsLmdldExldmVsKCkpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5ncmlkLmNsZWFyV2luUm93cygpO1xuICAgICAgICAgICAgLy8gaW50ZXJhY3Rpb24gaXMgZGlzYWJsZWQgZHVyaW5nIHdpbiBwcmVzZW50YXRpb24sIGVuYWJsaW5nIG9uY2UgZG9uZTpcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0SW50ZXJhY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sIHRoaXMudGlja2VyLmdldFRpY2tEdXJhdGlvbigpKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0dGluZyBpbml0aWFsIGdhbWUgc3RhdGU6XG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMubW9kZWwuZ3JpZC5yZXNldCgpO1xuICAgICAgICB0aGlzLnRpY2tlci5zZXRDdXJyZW50TGV2ZWwoMCk7XG4gICAgICAgIHRoaXMuaW5mb1BhbmVsLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsIHRoZSB1c2VyIGlucHV0cyBhcmUgaGFuZGxlZCBoZXJlIHNvIGZhcjpcbiAgICAgKi9cbiAgICBzZXR1cEludGVyYWN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoVHJhbnNmb3JtT3B0aW9ucykuaW5jbHVkZXMoZS5jb2RlIGFzIFRyYW5zZm9ybU9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC50cmFuc2Zvcm0oZS5jb2RlIGFzIFRyYW5zZm9ybU9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiIsImV4cG9ydCBjbGFzcyBMb2FkZXIge1xuICAgIGxvYWRlcjogUElYSS5Mb2FkZXI7XG4gICAgbG9hZGluZ1NjcmVlbjogUElYSS5UZXh0O1xuXG4gICAgY29uc3RydWN0b3IoYXBwOiBQSVhJLkFwcGxpY2F0aW9uLCBvbkFzc2V0c0xvYWRlZDogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmxvYWRlciA9IGFwcC5sb2FkZXI7XG4gICAgICAgIHRoaXMubG9hZEFzc2V0cygpO1xuICAgICAgICB0aGlzLmxvYWRlci5sb2FkKCgpID0+IHtcbiAgICAgICAgICAgIGFwcC5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLmxvYWRpbmdTY3JlZW4pO1xuICAgICAgICAgICAgb25Bc3NldHNMb2FkZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVMb2FkaW5nU2NyZWVuKGFwcC5zY3JlZW4ud2lkdGgsIGFwcC5zY3JlZW4uaGVpZ2h0KTtcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMubG9hZGluZ1NjcmVlbik7XG4gICAgfVxuXG4gICAgbG9hZEFzc2V0cygpIHtcbiAgICAgICAgdGhpcy5sb2FkZXIuYWRkKCdicmljaycsICcuL2Fzc2V0cy9icmljay5wbmcnKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUxvYWRpbmdTY3JlZW4oYXBwV2lkdGg6IG51bWJlciwgYXBwSGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoe1xuICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAzNixcbiAgICAgICAgICAgIGZpbGw6ICcjZmZmZmZmJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcGxheVRleHQgPSBuZXcgUElYSS5UZXh0KCdMb2FkaW5nLi4uJywgc3R5bGUpO1xuICAgICAgICBwbGF5VGV4dC54ID0gKGFwcFdpZHRoIC0gcGxheVRleHQud2lkdGgpIC8gMjtcbiAgICAgICAgcGxheVRleHQueSA9IChhcHBIZWlnaHQgLSBwbGF5VGV4dC5oZWlnaHQpIC8gMjtcbiAgICAgICAgdGhpcy5sb2FkaW5nU2NyZWVuID0gcGxheVRleHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtNYXRyaXh9IGZyb20gXCIuL3V0aWxzL01hdHJpeFwiO1xuaW1wb3J0IHtHcmlkfSBmcm9tIFwiLi9jb21wb25lbnRzL0dyaWRcIjtcbmltcG9ydCB7RmFsbGluZ1RldHJvbWlub30gZnJvbSBcIi4vY29tcG9uZW50cy9GYWxsaW5nVGV0cm9taW5vXCI7XG5pbXBvcnQge0NPTFMsIFJPV1N9IGZyb20gXCIuL2NvbmZpZy9sYXlvdXRcIjtcblxuZXhwb3J0IGVudW0gVHJhbnNmb3JtT3B0aW9ucyB7XG4gICAgUk9UQVRFID0gXCJTcGFjZVwiLFxuICAgIERPV04gPSBcIkFycm93RG93blwiLFxuICAgIExFRlQgPSBcIkFycm93TGVmdFwiLFxuICAgIFJJR0hUID0gXCJBcnJvd1JpZ2h0XCJcbn1cblxuLyoqXG4gKiBNYW5hZ2VzIGdhbWUgY29yZSBsb2dpY1xuICovXG5leHBvcnQgY2xhc3MgTW9kZWwge1xuXG4gICAgY29udGFpbmVyOiBQSVhJLkNvbnRhaW5lcjtcbiAgICBmYWxsaW5nVGV0cm9taW5vOiBGYWxsaW5nVGV0cm9taW5vO1xuICAgIGdyaWQ6IEdyaWQ7XG4gICAgaXNJbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgcmVzZXQ6ICgpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IFBJWEkuQ29udGFpbmVyLCByZXNldDogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5mYWxsaW5nVGV0cm9taW5vID0gbnVsbDtcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQoUk9XUywgQ09MUywgdGhpcy5jb250YWluZXIpO1xuICAgICAgICB0aGlzLnJlc2V0ID0gcmVzZXQ7XG4gICAgfVxuXG4gICAgc2V0SW50ZXJhY3RpdmUobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0ludGVyYWN0aXZlID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGFsbCBwb3NzaWJsZSBjb2xsaXNpb25zIGZvciBnaXZlbiB0YXJnZXRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICovXG4gICAgY29sbGlzaW9uKHRhcmdldDogTWF0cml4KSB7XG4gICAgICAgIGNvbnN0IGlzSW5Cb3VuZHMgPSB0YXJnZXQuaXNJbkJvdW5kcyhDT0xTLCBST1dTKTtcbiAgICAgICAgY29uc3QgaXNHcmlkQ29sbGlzaW9uID0gdGhpcy5ncmlkLmNvbGxpc2lvbih0YXJnZXQpO1xuXG4gICAgICAgIHJldHVybiAhaXNJbkJvdW5kcyB8fCBpc0dyaWRDb2xsaXNpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVkcmF3cyBwbGF5IGFyZWEsIGJhc2VkIG9uIGN1cnJlbnQgZ2FtZSBzdGF0ZTpcbiAgICAgKi9cbiAgICBkcmF3R2FtZVN0YXRlKCkge1xuICAgICAgICB0aGlzLmdyaWQucmVkcmF3KCk7XG4gICAgICAgIHRoaXMuZmFsbGluZ1RldHJvbWlubz8ucmVkcmF3KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsIHN1cHBvcnRlZCB0ZXRyb21pbm8gdHJhbnNmb3JtYXRpb25zIGFyZSBoYW5kbGVkIGhlcmU6XG4gICAgICogQHBhcmFtIG9wdGlvblxuICAgICAqL1xuICAgIHRyYW5zZm9ybShvcHRpb246IFRyYW5zZm9ybU9wdGlvbnMpIHtcblxuICAgICAgICBpZiAodGhpcy5mYWxsaW5nVGV0cm9taW5vID09PSBudWxsIHx8ICF0aGlzLmlzSW50ZXJhY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAob3B0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFRyYW5zZm9ybU9wdGlvbnMuRE9XTjpcbiAgICAgICAgICAgICAgICB0aGlzLnRyeU1vdmVEb3duKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRyYW5zZm9ybU9wdGlvbnMuUk9UQVRFOlxuICAgICAgICAgICAgICAgIHRoaXMudHJ5Um90YXRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRyYW5zZm9ybU9wdGlvbnMuTEVGVDpcbiAgICAgICAgICAgICAgICB0aGlzLnRyeU1vdmVIb3Jpem9udGFsbHkoLTEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUcmFuc2Zvcm1PcHRpb25zLlJJR0hUOlxuICAgICAgICAgICAgICAgIHRoaXMudHJ5TW92ZUhvcml6b250YWxseSgxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVW5zdXBwb3J0ZWQgdHJhbnNmb3JtIG9wdGlvbiwgZXhwZWN0ZWQgJHtUcmFuc2Zvcm1PcHRpb25zfSwgd2FzICR7b3B0aW9ufWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmF3R2FtZVN0YXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZXMgdGV0cm9taW5vIG9uZSBjZWxsIGRvd24sIGlmIHBvc3NpYmxlXG4gICAgICovXG4gICAgdHJ5TW92ZURvd24oKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQuY29sbGlzaW9uKHRoaXMuZmFsbGluZ1RldHJvbWluby5zaGFwZSwgMCwgMSkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0dyaWRDb2xsaXNpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZ1RldHJvbWluby5tb3ZlKDAsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyByZWFjaGluZyB0aGUgZ3JpZCBldmVudDpcbiAgICAgKi9cbiAgICBwcm9jZXNzR3JpZENvbGxpc2lvbigpIHtcbiAgICAgICAgLy8gdGhlIHRldHJvbWlubyBiZWNvbWVzIHBhcnQgb2YgdGhlIGdyaWQgbm93OlxuICAgICAgICB0aGlzLmdyaWQuYWRkKHRoaXMuZmFsbGluZ1RldHJvbWluby5zaGFwZSk7XG5cbiAgICAgICAgLy8gcHJldmVudGluZyBpbnRlcmFjdGlvbnMgd2hpbGUgd2luIHJvd3MgYXJlIGJ1cm5pbmc6XG4gICAgICAgIGlmICh0aGlzLmdyaWQuaGFzV2luUm93cygpKSB7XG4gICAgICAgICAgICB0aGlzLnNldEludGVyYWN0aXZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXRyb21pbm8gaGl0cyB0aGUgZ3JpZCBvbiB0aGUgdmVyeSBzdGFydCAtIGdhbWUgaXMgb3ZlciBhdCB0aGlzIHBvaW50OlxuICAgICAgICBpZiAodGhpcy5mYWxsaW5nVGV0cm9taW5vLnkgPT09IDApIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVG9vIGJhZCA6KFwiKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsZWFyaW5nIGN1cnJlbnQgdGV0cm9taW5vXG4gICAgICAgIHRoaXMuZmFsbGluZ1RldHJvbWluby5oaWRlKCk7XG4gICAgICAgIHRoaXMuZmFsbGluZ1RldHJvbWlubyA9IG51bGw7XG4gICAgfVxuXG4gICAgdHJ5TW92ZUhvcml6b250YWxseShkWDogbnVtYmVyKSB7XG4gICAgICAgIC8vIG1vdmUgYW5kIGNoZWNrIGlmIGl0J3Mgb2tcbiAgICAgICAgdGhpcy5mYWxsaW5nVGV0cm9taW5vLm1vdmUoZFgsIDApO1xuICAgICAgICAvLyBpZiBpdCdzIG5vdC4uLlxuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb24odGhpcy5mYWxsaW5nVGV0cm9taW5vLnNoYXBlKSkge1xuICAgICAgICAgICAgLy8gdGhlbiByZXZlcnQgdGhlIG9yaWdpbmFsIG1vdmluZzpcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZ1RldHJvbWluby5tb3ZlKC1kWCwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cnlSb3RhdGUoKSB7XG4gICAgICAgIC8vIHJvdGF0ZSBhbmQgY2hlY2sgaWYgaXQncyBva1xuICAgICAgICB0aGlzLmZhbGxpbmdUZXRyb21pbm8uc2hhcGUucm90YXRlKHRydWUpO1xuICAgICAgICAvLyBpZiBpdCdzIG5vdC4uLlxuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb24odGhpcy5mYWxsaW5nVGV0cm9taW5vLnNoYXBlKSkge1xuICAgICAgICAgICAgLy8gdGhlbiByZXZlcnQgdGhlIG9yaWdpbmFsIHJvdGF0aW9uOlxuICAgICAgICAgICAgdGhpcy5mYWxsaW5nVGV0cm9taW5vLnNoYXBlLnJvdGF0ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge01hdHJpeH0gZnJvbSBcIi4uL3V0aWxzL01hdHJpeFwiO1xuaW1wb3J0IHtUZXRyb21pbm99IGZyb20gXCIuL1RldHJvbWlub1wiO1xuaW1wb3J0IHtCTE9DS19TSURFX0xFTkdUSCwgQ09MU30gZnJvbSBcIi4uL2NvbmZpZy9sYXlvdXRcIjtcblxuZXhwb3J0IGNsYXNzIEZhbGxpbmdUZXRyb21pbm8gZXh0ZW5kcyBUZXRyb21pbm8ge1xuXG4gICAgcmVzZXQoc2hhcGU6IE1hdHJpeCkge1xuICAgICAgICBzdXBlci5yZXNldChzaGFwZSk7XG5cbiAgICAgICAgdGhpcy5hbGlnblRvQ2VudGVyKCk7XG5cbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2VzIHRldHJvbWlubyB0byB0aGUgY2FudGVyIG9mIHBsYXkgYXJlYTpcbiAgICAgKi9cbiAgICBhbGlnblRvQ2VudGVyKCkge1xuICAgICAgICBjb25zdCBwbGF5QXJlYUNlbnRlciA9IE1hdGguZmxvb3IoQ09MUyAvIDIpO1xuICAgICAgICBjb25zdCBzaGFwZUNlbnRlciA9IE1hdGguZmxvb3IodGhpcy5zaGFwZS5tYXRyaXgubGVuZ3RoIC8gMik7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHBsYXlBcmVhQ2VudGVyIC0gc2hhcGVDZW50ZXI7XG5cbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy54ID0gY2VudGVyICogQkxPQ0tfU0lERV9MRU5HVEg7XG4gICAgICAgIHRoaXMuc2hhcGUucmVzZXQoY2VudGVyLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseWluZyBhbnkgY2hhbmdlcyB0byBwb3NpdGlvbjpcbiAgICAgKiBAcGFyYW0gZFggaG9yaXpvbnRhbCBkaXNwbGFjZW1lbnRcbiAgICAgKiBAcGFyYW0gZFkgdmVydGljYWwgZGlzcGxhY2VtZW50XG4gICAgICovXG4gICAgbW92ZShkWDogbnVtYmVyLCBkWTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCArPSBCTE9DS19TSURFX0xFTkdUSCAqIGRYO1xuICAgICAgICB0aGlzLnkgKz0gQkxPQ0tfU0lERV9MRU5HVEggKiBkWTtcblxuICAgICAgICAvLyBhcHBseWluZyBvZmZzZXRzIHRvIHRoZSBtYXRyaXggKG5lZWRlZCBmb3IgY29sbGlzaW9ucyBjYWxjdWxhdGlvbnMpOlxuICAgICAgICB0aGlzLnNoYXBlLmFwcGx5T2Zmc2V0cyhkWCwgZFkpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtNYXRyaXh9IGZyb20gXCIuLi91dGlscy9NYXRyaXhcIjtcbmltcG9ydCB7QkxPQ0tfU0lERV9MRU5HVEh9IGZyb20gXCIuLi9jb25maWcvbGF5b3V0XCI7XG5pbXBvcnQge0NPTE9SU30gZnJvbSBcIi4uL2NvbmZpZy9jb2xvcnNcIjtcblxuZXhwb3J0IGNsYXNzIEdyaWQgZXh0ZW5kcyBNYXRyaXgge1xuXG4gICAgV0lOX0NPTE9SID0gODtcbiAgICBFTVBUWV9DT0xPUiA9IDA7XG4gICAgY29sczogbnVtYmVyO1xuICAgIHJvd3M6IG51bWJlcjtcbiAgICBnZng6IFBJWEkuR3JhcGhpY3M7XG5cbiAgICBjb25zdHJ1Y3Rvcihyb3dzOiBudW1iZXIsIGNvbHM6IG51bWJlciwgcGFyZW50OiBQSVhJLkNvbnRhaW5lcikge1xuICAgICAgICBzdXBlcihyb3dzLCBjb2xzLCAwKTtcbiAgICAgICAgdGhpcy5jb2xzID0gY29scztcbiAgICAgICAgdGhpcy5yb3dzID0gcm93cztcbiAgICAgICAgdGhpcy5nZnggPSB0aGlzLmluaXRDZWxsc0dGWChwYXJlbnQpO1xuICAgICAgICB0aGlzLmFkZEZyYW1lKHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy88ZWRpdG9yLWZvbGQgZGVzYz1cIklOSVRcIj5cbiAgICAvKipcbiAgICAgKiBQSVhJLkdyYXBoaWNzIHRvIHJlbmRlciBjZWxscyBvbjpcbiAgICAgKiBAcGFyYW0gcGFyZW50XG4gICAgICovXG4gICAgaW5pdENlbGxzR0ZYKHBhcmVudDogUElYSS5Db250YWluZXIpe1xuICAgICAgICBjb25zdCBjZWxscyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgICAgIC8vIGluc3RlYWQgb2YgbXVsdGlwbHlpbmcgb24gZXZlcnkgcmVkcmF3OlxuICAgICAgICBjZWxscy5zY2FsZS5zZXQoQkxPQ0tfU0lERV9MRU5HVEgpO1xuICAgICAgICByZXR1cm4gcGFyZW50LmFkZENoaWxkKGNlbGxzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBKdXN0IGEgZnJhbWUgYXJvdW5kIHBsYXlpbmcgYXJlYVxuICAgICAqIEBwYXJhbSBwYXJlbnRcbiAgICAgKi9cbiAgICBhZGRGcmFtZShwYXJlbnQ6IFBJWEkuQ29udGFpbmVyKXtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgICAgICBmcmFtZS5saW5lU3R5bGUoNCwgMHhkZGFiN2MsIDEpO1xuICAgICAgICBmcmFtZS5kcmF3UmVjdCgwLCAwLCB0aGlzLmNvbHMgKiBCTE9DS19TSURFX0xFTkdUSCwgdGhpcy5yb3dzICogQkxPQ0tfU0lERV9MRU5HVEgpO1xuICAgICAgICBmcmFtZS5lbmRGaWxsKCk7XG4gICAgICAgIHBhcmVudC5hZGRDaGlsZChmcmFtZSk7XG4gICAgfVxuICAgIC8vPC9lZGl0b3ItZm9sZD5cblxuICAgIC8vPGVkaXRvci1mb2xkIGRlc2M9XCJXSU5cIj5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIGFycmF5IG9mIHJvd3MgaW5kZXhlcywgdGhhdCB0aGF0IGhhdmUgbm8gYmxhbmsgYmxvY2tzXG4gICAgICovXG4gICAgZ2V0RmlsbGVkUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4LnJlZHVjZSgocmVzdWx0LCBjdXJyZW50LCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC5ldmVyeShjZWxsID0+IGNlbGwgIT09IHRoaXMuRU1QVFlfQ09MT1IpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3dpdGNoaW5nIHdpbiByb3dzIHRvIFwid2luXCIgY29sb3JcbiAgICAgKi9cbiAgICBhcHBseVdpblJvd3MoKSB7XG4gICAgICAgIHRoaXMuZ2V0RmlsbGVkUm93cygpLmZvckVhY2gocm93SW5kZXggPT4ge1xuICAgICAgICAgICAgdGhpcy5tYXRyaXhbcm93SW5kZXhdLmZpbGwodGhpcy5XSU5fQ09MT1IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYXNXaW5Sb3dzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxsZWRSb3dzKCkubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXR0aW5nIHJpZCBvZiBhbGwgdGhlIHdpbiByb3dzIChhZGRpbmcgZW1wdHkgb25lcyBvbiB0b3AgaW5zdGVhZCk6XG4gICAgICovXG4gICAgY2xlYXJXaW5Sb3dzKCkge1xuICAgICAgICB0aGlzLmdldEZpbGxlZFJvd3MoKS5mb3JFYWNoKHJvd0luZGV4ID0+IHtcbiAgICAgICAgICAgIHRoaXMubWF0cml4LnNwbGljZShyb3dJbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLm1hdHJpeC51bnNoaWZ0KG5ldyBBcnJheSh0aGlzLmNvbHMpLmZpbGwodGhpcy5FTVBUWV9DT0xPUikpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy88L2VkaXRvci1mb2xkPlxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyaW5nIGN1cnJlbnQgZ3JpZCBzdGF0ZTpcbiAgICAgKi9cbiAgICByZWRyYXcoKXtcbiAgICAgICAgdGhpcy5nZnguY2xlYXIoKTtcblxuICAgICAgICB0aGlzLmZvckVhY2hDZWxsKChjZWxsLCByb3dJbmRleCwgY29sbEluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdmeC5iZWdpbkZpbGwoQ09MT1JTW2NlbGxdKTtcbiAgICAgICAgICAgIC8vIHByb3BlciBkaW1lbnNpb25zIGFyZSBoYW5kbGVkIG9uIGdmeCBpbml0aWFsaXphdGlvbjpcbiAgICAgICAgICAgIHRoaXMuZ2Z4LmRyYXdSZWN0KGNvbGxJbmRleCwgcm93SW5kZXgsIDEsIDEpO1xuICAgICAgICAgICAgdGhpcy5nZnguZW5kRmlsbCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldCgpe1xuICAgICAgICB0aGlzLmZvckVhY2hDZWxsKChjZWxsLCByb3dJbmRleCwgY29sbEluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hdHJpeFtyb3dJbmRleF1bY29sbEluZGV4XSA9IHRoaXMuRU1QVFlfQ09MT1I7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7VGV0cm9taW5vfSBmcm9tIFwiLi9UZXRyb21pbm9cIjtcbmltcG9ydCB7Z2V0UmFuZG9tU2hhcGV9IGZyb20gXCIuLi9jb25maWcvc2hhcGVzXCI7XG5pbXBvcnQge3RpY2tlckNvbmZpZ30gZnJvbSBcIi4uL2NvbmZpZy90aWNrZXJcIjtcbmltcG9ydCB7QkxPQ0tfU0lERV9MRU5HVEgsIENPTFMsIGluZm9QYW5lbExheW91dCwgUk9XU30gZnJvbSBcIi4uL2NvbmZpZy9sYXlvdXRcIjtcblxuZXhwb3J0IGNsYXNzIEluZm9QYW5lbCBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcblxuICAgIG5leHQ6IFRldHJvbWlubztcbiAgICBsZXZlbFZhbHVlOiBudW1iZXI7XG4gICAgYnVybnNWYWx1ZTogbnVtYmVyO1xuICAgIGxldmVsVGV4dDogUElYSS5UZXh0O1xuICAgIGJ1cm5zVGV4dDogUElYSS5UZXh0O1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBQSVhJLkNvbnRhaW5lcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBwYXJlbnQuYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIC8vIHBsYXkgYXJlYSB3aWR0aCArIGhhbGYgb2YgcGFuZWwgd2lkdGggKHRvIGVuc3VyZSBhbGwgYmxvY2tzIGFyZSBlYXNpbHkgY2VudGVyZWQgaG9yaXpvbnRhbGx5KTpcbiAgICAgICAgdGhpcy54ID0gQ09MUyAqIEJMT0NLX1NJREVfTEVOR1RIICsgaW5mb1BhbmVsTGF5b3V0LldJRFRIIC8gMjtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIC8vPGVkaXRvci1mb2xkIGRlc2M9XCJJTklUXCI+XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0QkcoKTtcbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5pbml0TmV4dFRldHJvbWlubygpO1xuICAgICAgICB0aGlzLmxldmVsVGV4dCA9IHRoaXMuaW5pdFRleHRCbG9jayhpbmZvUGFuZWxMYXlvdXQuTEVWRUwsIFwiTEVWRUw6XCIpO1xuICAgICAgICB0aGlzLmJ1cm5zVGV4dCA9IHRoaXMuaW5pdFRleHRCbG9jayhpbmZvUGFuZWxMYXlvdXQuQlVSTlMsIFwiVE9UQUwgQlVSTlM6XCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNpbXBseSBmaWxsaW5nIHRoZSBlbnRpcmUgbGF5b3V0IHdpdGggY29sb3JcbiAgICAgKi9cbiAgICBpbml0QkcoKSB7XG4gICAgICAgIGNvbnN0IGdmeCA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgICAgIGdmeC5iZWdpbkZpbGwoMHhGRkZGRkYsIDAuMyk7XG4gICAgICAgIC8vIHRoZSBlbnRpcmUgcGFuZWwgaXMgc2hpZnRlZCBieSBoYWxmIG9mIHRoZSB3aWR0aCBob3Jpem9udGFsbHksIGZvciBlYXNlIGNoaWxkcmVuIG9mIGNlbnRlcmluZyxcbiAgICAgICAgLy8gY29tcGVuc2F0aW5nIGhlcmU6XG4gICAgICAgIGdmeC5kcmF3UmVjdCgtaW5mb1BhbmVsTGF5b3V0LldJRFRIIC8gMiwgMCwgaW5mb1BhbmVsTGF5b3V0LldJRFRILCBST1dTICogQkxPQ0tfU0lERV9MRU5HVEgpO1xuICAgICAgICBnZnguZW5kRmlsbCgpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGdmeCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIFwiTkVYVFwiIGJsb2NrIHdpdGggdGV0cm9taW5vIHRvIGJlIGFkZGVkIGFmdGVyIGN1cnJlbnRseSBmYWxsaW5nIGlzIGRvbmU6XG4gICAgICovXG4gICAgaW5pdE5leHRUZXRyb21pbm8oKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLmFkZENoaWxkKG5ldyBQSVhJLkNvbnRhaW5lcigpKTtcbiAgICAgICAgd3JhcHBlci55ID0gaW5mb1BhbmVsTGF5b3V0Lk5FWFQ7XG5cbiAgICAgICAgdGhpcy5hZGRUaXRsZSh3cmFwcGVyLCBcIk5FWFRcIik7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBUZXRyb21pbm8od3JhcHBlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGl0bGUgKyB2YWx1ZSBibG9jazpcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IHZlcnRpY2FsIG9mZnNldCBvZiB0aGUgYmxvY2tcbiAgICAgKiBAcGFyYW0gdGl0bGUgbmFtZSBvZiB0aGUgYmxvY2tcbiAgICAgKi9cbiAgICBpbml0VGV4dEJsb2NrKG9mZnNldDogbnVtYmVyLCB0aXRsZTogc3RyaW5nKXtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuYWRkQ2hpbGQobmV3IFBJWEkuQ29udGFpbmVyKCkpO1xuICAgICAgICB3cmFwcGVyLnkgPSBvZmZzZXQ7XG5cbiAgICAgICAgdGhpcy5hZGRUaXRsZSh3cmFwcGVyLCB0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBuZXcgUElYSS5UZXh0KFwiXCIsIHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdUZXRyaXMnLFxuICAgICAgICAgICAgZm9udFNpemU6IDEwMFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aXRsZSBpcyBhZGRlZCB3aXRoIG5lZ2F0aXZlIG9mZnNldCwgdGhlcmVmb3JlIG5vIGFkZGl0aW9uYWwgcG9zaXRpb25pbmcgb2YgdmFsdWUgaXMgbmVlZGVkOlxuICAgICAgICB2YWx1ZS5hbmNob3IueCA9IDAuNTtcblxuICAgICAgICByZXR1cm4gd3JhcHBlci5hZGRDaGlsZCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHRpdGxlIHRvIHRoZSBibG9jayB3aXRoIHByZWRlZmluZWQgdmVydGljYWwgbmVnYXRpdmUgb2Zmc2V0ICh0byBtYWtlIHN1cmUgaXQncyBcIm9uIHRvcFwiIG9mIGJsb2NrJ3MgdmFsdWUpOlxuICAgICAqIEBwYXJhbSBibG9ja1xuICAgICAqIEBwYXJhbSB0ZXh0XG4gICAgICovXG4gICAgYWRkVGl0bGUoYmxvY2s6IFBJWEkuQ29udGFpbmVyLCB0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBibG9jay5hZGRDaGlsZChuZXcgUElYSS5UZXh0KHRleHQsIHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICBmb250U2l6ZTogMzYsXG4gICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICB9KSk7XG4gICAgICAgIHRpdGxlLmFuY2hvci5zZXQoMC41KTtcbiAgICAgICAgdGl0bGUueSA9IGluZm9QYW5lbExheW91dC5USVRMRV9PRkZTRVQ7XG4gICAgICAgIHJldHVybiBibG9jay5hZGRDaGlsZCh0aXRsZSk7XG4gICAgfVxuICAgIC8vPC9lZGl0b3ItZm9sZD5cblxuICAgIGdldE5leHRTaGFwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmV4dC5nZXRTaGFwZSgpLmNsb25lKCk7XG4gICAgfVxuXG4gICAgZ2V0TGV2ZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxldmVsVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBuZXh0IHRldHJvbWlubyBhbmQgc2hvdyBpdCBvbiB0aGUgcGFuZWw6XG4gICAgICovXG4gICAgdXBkYXRlTmV4dFRldHJvbWlubygpIHtcbiAgICAgICAgdGhpcy5uZXh0LnJlc2V0KGdldFJhbmRvbVNoYXBlKCkpO1xuICAgICAgICB0aGlzLm5leHQucmVkcmF3KCk7XG4gICAgICAgIHRoaXMubmV4dC5hbGlnblRvQ2VudGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0ZXh0IGJsb2NrcyB2YWx1ZXMsIGJhc2VkIG9uIGJ1cm5lZCByb3dzIG51bWJlclxuICAgICAqIEBwYXJhbSBidXJuZWRSb3dzIGFkZGVkIGJ1cm5lZCByb3dzXG4gICAgICovXG4gICAgdXBkYXRlVmFsdWVzKGJ1cm5lZFJvd3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLmJ1cm5zVmFsdWUgKz0gYnVybmVkUm93cztcbiAgICAgICAgY29uc3QgcmF3TGV2ZWxzVmFsdWUgPSBNYXRoLmZsb29yKHRoaXMuYnVybnNWYWx1ZSAvIHRpY2tlckNvbmZpZy5CVVJOU19QRVJfTEVWRUwpO1xuICAgICAgICB0aGlzLmxldmVsVmFsdWUgPSBNYXRoLm1pbihyYXdMZXZlbHNWYWx1ZSwgdGlja2VyQ29uZmlnLkxFVkVMUy5sZW5ndGggLSAxKTtcblxuICAgICAgICB0aGlzLmJ1cm5zVGV4dC50ZXh0ID0gdGhpcy5idXJuc1ZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIC8vIHVzZXIgY291bnRzIGZyb20gMSwgbm90IGZyb20gMDpcbiAgICAgICAgdGhpcy5sZXZlbFRleHQudGV4dCA9ICh0aGlzLmxldmVsVmFsdWUgKyAxKS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyaW5nIHRoZSBzdGF0ZSB0byBzdGFydCBmcm9tIGNsZWFyIHNoZWV0OlxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmJ1cm5zVmFsdWUgPSAwO1xuICAgICAgICB0aGlzLmxldmVsVmFsdWUgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcygwKTtcbiAgICAgICAgdGhpcy51cGRhdGVOZXh0VGV0cm9taW5vKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtNYXRyaXh9IGZyb20gXCIuLi91dGlscy9NYXRyaXhcIjtcbmltcG9ydCB7QkxPQ0tfU0lERV9MRU5HVEh9IGZyb20gXCIuLi9jb25maWcvbGF5b3V0XCI7XG5pbXBvcnQge0NPTE9SU30gZnJvbSBcIi4uL2NvbmZpZy9jb2xvcnNcIjtcblxuLyoqXG4gKiBUaGUgXCJ0ZXRyb21pbm9cIi1zaGFwZWQgaXRlbSwgY29uc2lzdGluZyBvZiBzZXBhcmF0ZSBzcHJpdGVzXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXRyb21pbm8gZXh0ZW5kcyBQSVhJLkNvbnRhaW5lcntcbiAgICBzaGFwZTogTWF0cml4O1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBQSVhJLkNvbnRhaW5lcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBwYXJlbnQuYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIC8vIGFwcGx5aW5nIHNjYWxlIG9uY2UsIG9uIGluaXRcbiAgICAgICAgdGhpcy5zY2FsZS5zZXQoQkxPQ0tfU0lERV9MRU5HVEgpO1xuICAgIH1cblxuICAgIHJlc2V0KHNoYXBlOiBNYXRyaXgpIHtcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgICAgICB0aGlzLnNldHVwSW1hZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkaW5nIHRoZSBuZWVkZWQgbnVtYmVyIG9mIGJyaWNrcy9wbGFjZWhvbGRlcnMsIGRlcGVuZGluZyBvbiBjdXJyZW50IHNoYXBlOlxuICAgICAqL1xuICAgIHNldHVwSW1hZ2VzKCkge1xuICAgICAgICB0aGlzLnNoYXBlLmZvckVhY2hDZWxsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSgpO1xuICAgICAgICAgICAgLy8gcHJvcGVyIGRpbWVuc2lvbnMgYXJlIGhhbmRsZWQgb24gaW5pdDpcbiAgICAgICAgICAgIHNwcml0ZS53aWR0aCA9IHNwcml0ZS5oZWlnaHQgPSAxO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChzcHJpdGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGN1cnJlbnQgdGV0cm9taW5vIHNoYXBlOlxuICAgICAqL1xuICAgIHJlZHJhdygpIHtcbiAgICAgICAgbGV0IGNlbGxDb3VudCA9IDA7XG5cbiAgICAgICAgdGhpcy5zaGFwZS5mb3JFYWNoQ2VsbCgoY2VsbCwgcm93LCBjb2xsKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGUgc3ByaXRlcyBhcmUgYWRkZWQgdGhyb3VnaCB0aGUgc2FtZSBsb29wLCB0aGVyZWZvcmUgaXQncyBzYWZlIHRvIHJlbHkgb24gMToxIG1hdGNoOlxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5nZXRDaGlsZEF0KGNlbGxDb3VudCkgYXMgUElYSS5TcHJpdGU7XG5cbiAgICAgICAgICAgIC8vIDAgc3RhbmRzIGZvciBcImVtcHR5IGNlbGxcIlxuICAgICAgICAgICAgc3ByaXRlLnRleHR1cmUgPSBjZWxsID4gMCA/XG4gICAgICAgICAgICAgICAgUElYSS51dGlscy5UZXh0dXJlQ2FjaGVbXCJicmlja1wiXSA6XG4gICAgICAgICAgICAgICAgUElYSS5UZXh0dXJlLkVNUFRZO1xuXG4gICAgICAgICAgICAvLyBwcm9wZXIgZGltZW5zaW9ucyBhcmUgaGFuZGxlZCBvbiBpbml0OlxuICAgICAgICAgICAgc3ByaXRlLnBvc2l0aW9uLnNldChjb2xsLCByb3cpO1xuXG4gICAgICAgICAgICAvLyBlYWNoIHNoYXBlIGhhcyBpdCdzIG93biBjb2xvcjpcbiAgICAgICAgICAgIHNwcml0ZS50aW50ID0gQ09MT1JTW2NlbGxdO1xuXG4gICAgICAgICAgICBjZWxsQ291bnQrKztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0U2hhcGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hhcGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmFzaWNhbGx5LCBlbXVsYXRpbmcgYW5jaG9yLnggPSAwLjUgZm9yIGNvbnRhaW5lcjpcbiAgICAgKi9cbiAgICBhbGlnblRvQ2VudGVyKCkge1xuICAgICAgICB0aGlzLnggPSAtdGhpcy53aWR0aCAvIDI7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IENPTE9SUyA9IFtcbiAgICAweDAwMDAwMCxcbiAgICAweEZGMDAwMCxcbiAgICAweDAwRkYwMCxcbiAgICAweDAwMDBGRixcbiAgICAweEZGRkYwMCxcbiAgICAweDAwRkZGRixcbiAgICAweDEwRkYwMSxcbiAgICAweEYwMDBGRixcbiAgICAweDAwMDAwMFxuXTtcbiIsImV4cG9ydCBjb25zdCBCTE9DS19TSURFX0xFTkdUSCA9IDQ1O1xuZXhwb3J0IGNvbnN0IFJPV1MgPSAyMDtcbmV4cG9ydCBjb25zdCBDT0xTID0gMTA7XG5cbmV4cG9ydCBjb25zdCBpbmZvUGFuZWxMYXlvdXQgPSB7XG4gICAgV0lEVEg6IDMwMCxcbiAgICBORVhUOiAyMDAsXG4gICAgTEVWRUw6IDQxMCxcbiAgICBCVVJOUzogNjAwLFxuICAgIFRJVExFX09GRlNFVDogLTI1XG59O1xuXG5leHBvcnQgY29uc3QgbGF5b3V0ID0ge1xuICAgIHdpZHRoOiBDT0xTICogQkxPQ0tfU0lERV9MRU5HVEggKyBpbmZvUGFuZWxMYXlvdXQuV0lEVEgsXG4gICAgaGVpZ2h0OiBST1dTICogQkxPQ0tfU0lERV9MRU5HVEhcbn07XG4iLCJpbXBvcnQge01hdHJpeH0gZnJvbSBcIi4uL3V0aWxzL01hdHJpeFwiO1xuXG5jb25zdCBTSEFQRVMgPSBbXG4gICAgW1xuICAgICAgICBbMCwgMCwgMCwgMF0sXG4gICAgICAgIFsxLCAxLCAxLCAxXSxcbiAgICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgICBbMCwgMCwgMCwgMF1cbiAgICBdLFxuICAgIFtcbiAgICAgICAgWzIsIDAsIDBdLFxuICAgICAgICBbMiwgMiwgMl0sXG4gICAgICAgIFswLCAwLCAwXSxcbiAgICBdLFxuICAgIFtcbiAgICAgICAgWzAsIDAsIDNdLFxuICAgICAgICBbMywgMywgM10sXG4gICAgICAgIFswLCAwLCAwXSxcbiAgICBdLFxuICAgIFtcbiAgICAgICAgWzQsIDRdLFxuICAgICAgICBbNCwgNF0sXG4gICAgXSxcbiAgICBbXG4gICAgICAgIFswLCA1LCA1XSxcbiAgICAgICAgWzUsIDUsIDBdLFxuICAgICAgICBbMCwgMCwgMF0sXG4gICAgXSxcbiAgICBbXG4gICAgICAgIFswLCA2LCAwXSxcbiAgICAgICAgWzYsIDYsIDZdLFxuICAgICAgICBbMCwgMCwgMF0sXG4gICAgXSxcbiAgICBbXG4gICAgICAgIFs3LCA3LCAwXSxcbiAgICAgICAgWzAsIDcsIDddLFxuICAgICAgICBbMCwgMCwgMF0sXG4gICAgXVxuXS5tYXAoYXJyID0+IE1hdHJpeC5mcm9tMmRBcnJheShhcnIpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbVNoYXBlKCkge1xuICAgIHJldHVybiBTSEFQRVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogU0hBUEVTLmxlbmd0aCldO1xufVxuIiwiZXhwb3J0IGNvbnN0IHRpY2tlckNvbmZpZyA9IHtcbiAgICBSQVdfVElDS19EVVJBVElPTjogMTAwMCxcbiAgICBCVVJOU19QRVJfTEVWRUw6IDEwLCAvLyB0aGUgbnVtYmVyIG9mIGxpbmVzIGJ1cm5lZCByZXF1aXJlZCB0byBtYWtlIGl0IHRvIG5leHQgbGV2ZWxcbiAgICBMRVZFTFM6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMC45LFxuICAgICAgICAwLjgsXG4gICAgICAgIDAuNyxcbiAgICAgICAgMC42LFxuICAgICAgICAwLjUsXG4gICAgICAgIDAuNCxcbiAgICAgICAgMC4zLFxuICAgICAgICAwLjMsXG4gICAgICAgIDAuMlxuICAgIF1cbn07XG4iLCJpbnRlcmZhY2UgRm9yRWFjaENlbGxDYWxsYmFjayB7XG4gICAgKGNlbGxWYWxlOiBudW1iZXIsIHJvd0luZGV4OiBudW1iZXIsIGNvbHVtbkluZGV4OiBudW1iZXIpOiB2b2lkO1xufVxuXG4vKipcbiAqIENvbnRhaW5zIGFsbCB0aGUgbWF0cml4IHRyYW5zZm9ybWF0aW9ucyByZWxhdGVkIGxvZ2ljXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXRyaXgge1xuXG4gICAgbWF0cml4OiBudW1iZXJbXVtdO1xuICAgIG9mZnNldHM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcblxuICAgIGNvbnN0cnVjdG9yKHJvd3M6IG51bWJlciwgY29sczogbnVtYmVyLCBpbml0VmFsdWU/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBuZXcgQXJyYXkocm93cykuZmlsbChbXSlcbiAgICAgICAgICAgIC5tYXAoKCkgPT4gbmV3IEFycmF5KGNvbHMpLmZpbGwoaW5pdFZhbHVlKSk7XG4gICAgfVxuXG4gICAgcmVzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5vZmZzZXRzID0ge3gsIHl9O1xuICAgIH1cblxuICAgIGFwcGx5T2Zmc2V0cyhkWDogbnVtYmVyLCBkWTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0cy54ICs9IGRYO1xuICAgICAgICB0aGlzLm9mZnNldHMueSArPSBkWTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAyZCBmb3JFYWNoXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgZm9yRWFjaENlbGwoY2FsbGJhY2s6IEZvckVhY2hDZWxsQ2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5tYXRyaXguZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGNlbGwsIGNvbGxJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGNlbGwsIHJvd0luZGV4LCBjb2xsSW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgZ2l2ZW4gbWF0cml4IHRvIGN1cnJlbnQ6XG4gICAgICogQHBhcmFtIG1hdHJpeFxuICAgICAqL1xuICAgIGFkZChtYXRyaXg6IE1hdHJpeCkge1xuICAgICAgICBtYXRyaXguZm9yRWFjaENlbGwoKGNlbGwsIHJvdywgY29sbCkgPT4ge1xuICAgICAgICAgICAgLy8gc2tpcHBpbmcgZW1wdHkgY2VsbHM6XG4gICAgICAgICAgICBpZiAoY2VsbCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdHJpeFtyb3cgKyBtYXRyaXgub2Zmc2V0cy55XVtjb2xsICsgbWF0cml4Lm9mZnNldHMueF0gPSBjZWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciBub24tZW1wdHkgY2VsbHMgb2YgZ2l2ZW4gbWF0cml4IGNvbGxpZGUgd2l0aCBjdXJyZW50IG9uZTpcbiAgICAgKiBAcGFyYW0gbWF0cml4IC0gdGhlIG9uZSB0byBjaGVjayBjb2xsaXNpb24gd2l0aFxuICAgICAqIEBwYXJhbSBkWCAtIGN1c3RvbSBob3Jpem9udGFsIGRpc3BsYWNlbWVudFxuICAgICAqIEBwYXJhbSBkWSAtIGN1c3RvbSB2ZXJ0aWNhbCBkaXNwbGFjZW1lbnRcbiAgICAgKiBAcmV0dXJuIHRydWUgaWYgZ2l2ZW4gbWF0cml4IGNvbGxpZGVzIGN1cnJlbnQ6XG4gICAgICovXG4gICAgY29sbGlzaW9uKG1hdHJpeDogTWF0cml4LCBkWCA9IDAsIGRZID0gMCkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtYXRyaXgubWF0cml4Lmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbGwgPSAwOyBjb2xsIDwgbWF0cml4Lm1hdHJpeFtyb3ddLmxlbmd0aDsgY29sbCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdHJpeC5tYXRyaXhbcm93XVtjb2xsXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IGNvbGwgKyBtYXRyaXgub2Zmc2V0cy54ICsgZFg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSByb3cgKyBtYXRyaXgub2Zmc2V0cy55ICsgZFk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5tYXRyaXhbeV0gfHwgdGhpcy5tYXRyaXhbeV1beF0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgYWxsIG5vbi1lbXB0eSBjZWxscyBmaXQgd2l0aGluIGdpdmVuIGJvdW5kYXJpZXNcbiAgICAgKiBAcGFyYW0gYm91bmRYXG4gICAgICogQHBhcmFtIGJvdW5kWVxuICAgICAqL1xuICAgIGlzSW5Cb3VuZHMoYm91bmRYOiBudW1iZXIsIGJvdW5kWTogbnVtYmVyKSB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMubWF0cml4Lmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbGwgPSAwOyBjb2xsIDwgdGhpcy5tYXRyaXhbcm93XS5sZW5ndGg7IGNvbGwrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdHJpeFtyb3ddW2NvbGxdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gY29sbCArIHRoaXMub2Zmc2V0cy54O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gcm93ICsgdGhpcy5vZmZzZXRzLnk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4IDwgMCB8fCB4ID49IGJvdW5kWCB8fCB5ID49IGJvdW5kWSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIG1hdHJpeFxuICAgICAqIEBwYXJhbSBjbG9ja1dpc2UgdHJ1ZSBpZiBjbG9ja3dpc2Ugcm90YXRpb24gaXMgcmVxdWlyZWRcbiAgICAgKiBAZXhhbXBsZTpcbiAgICAgKiAgfHh8IHwgfCAgICAgICAgICAgICAgfCB8eHx4fFxuICAgICAqICB8eHwgfCB8IC0+IGNsb2NrV2lzZSB8eHwgfCB8XG4gICAgICogIHwgfHh8IHwgICAgICAgICAgICAgIHwgfCB8IHxcbiAgICAgKlxuICAgICAqICB8eHwgfCB8ICAgICAgICAgICAgICAgICAgICAgfCB8IHwgfFxuICAgICAqICB8eHwgfCB8IC0+IGNvdW50ZXJDbG9ja1dpc2UgfCB8IHx4fFxuICAgICAqICB8IHx4fCB8ICAgICAgICAgICAgICAgICAgICAgfHh8eHwgfFxuICAgICAqL1xuICAgIHJvdGF0ZShjbG9ja1dpc2U6IGJvb2xlYW4pIHtcbiAgICAgICAgLy8gfHh8IHwgfCAgICB8eHx4fCB8XG4gICAgICAgIC8vIHx4fCB8IHwgLT4gfCB8IHx4fFxuICAgICAgICAvLyB8IHx4fCB8ICAgIHwgfCB8IHxcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLm1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB5OyB4KyspIHtcbiAgICAgICAgICAgICAgICBbdGhpcy5tYXRyaXhbeF1beV0sIHRoaXMubWF0cml4W3ldW3hdXSA9IFt0aGlzLm1hdHJpeFt5XVt4XSwgdGhpcy5tYXRyaXhbeF1beV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2xvY2tXaXNlID9cbiAgICAgICAgICAgIHRoaXMubWF0cml4LmZvckVhY2goKHJvdyA9PiByb3cucmV2ZXJzZSgpKSkgOlxuICAgICAgICAgICAgdGhpcy5tYXRyaXgucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIGNsb25lKCl7XG4gICAgICAgIHJldHVybiBNYXRyaXguZnJvbTJkQXJyYXkodGhpcy5tYXRyaXgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tMmRBcnJheShhcnI6IG51bWJlcltdW10pIHtcbiAgICAgICAgLy8ganVzdCBhIGR1bW15IHZhbHVlLCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggYWN0dWFsIDJkIGFycmF5OlxuICAgICAgICBjb25zdCBtYXRyaXggPSBuZXcgTWF0cml4KDAsIDApO1xuICAgICAgICBtYXRyaXgubWF0cml4ID0gYXJyLm1hcChpbm5lckFycmF5ID0+IGlubmVyQXJyYXkuc2xpY2UoKSk7XG4gICAgICAgIHJldHVybiBtYXRyaXg7XG4gICAgfVxufVxuIiwiaW1wb3J0IHt0aWNrZXJDb25maWd9IGZyb20gXCIuLi9jb25maWcvdGlja2VyXCI7XG5cbi8qKlxuICogSGVscGVyIGNsYXNzIHRvIGhhbmRsZSBnYW1lIHNwZWVkLCBiYXNlZCBvbiBjdXJyZW50IGxldmVsXG4gKi9cbmV4cG9ydCBjbGFzcyBUaWNrZXJ7XG5cbiAgICByYXdUaWNrRHVyYXRpb246IG51bWJlcjtcbiAgICBsZXZlbHM6IG51bWJlcltdO1xuICAgIGN1cnJlbnRMZXZlbDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiB0eXBlb2YgdGlja2VyQ29uZmlnKSB7XG4gICAgICAgIHRoaXMucmF3VGlja0R1cmF0aW9uID0gY29uZmlnLlJBV19USUNLX0RVUkFUSU9OO1xuICAgICAgICB0aGlzLmxldmVscyA9IGNvbmZpZy5MRVZFTFM7XG4gICAgICAgIHRoaXMuY3VycmVudExldmVsID0gdGhpcy5sZXZlbHNbMF07XG4gICAgfVxuXG4gICAgZ2V0VGlja0R1cmF0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJhd1RpY2tEdXJhdGlvbiAqIHRoaXMuY3VycmVudExldmVsO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRMZXZlbChpbmRleDogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSB0aGlzLmxldmVsc1tpbmRleF07XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNjYWxlVG9XaW5kb3coY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIC8vRmlndXJlIG91dCB0aGUgc2NhbGUgYW1vdW50IG9uIGVhY2ggYXhpc1xuICAgIGNvbnN0IHNjYWxlWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gY2FudmFzLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHNjYWxlWSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIGNhbnZhcy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAvL1NjYWxlIHRoZSBjYW52YXMgYmFzZWQgb24gd2hpY2hldmVyIHZhbHVlIGlzIGxlc3M6IGBzY2FsZVhgIG9yIGBzY2FsZVlgXG4gICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7XG4gICAgY2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoXCIgKyBzY2FsZSArIFwiKVwiO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi90cy9HYW1lXCI7XG5cbm5ldyBHYW1lKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9