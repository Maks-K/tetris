import * as PIXI from 'pixi.js';

export class Loader {
    loader: PIXI.Loader;
    loadingScreen: PIXI.Text;

    constructor(app: PIXI.Application, onAssetsLoaded: () => void) {
        this.loader = app.loader;
        this.loadAssets();
        this.loader.load(() => {
            app.stage.removeChild(this.loadingScreen);
            onAssetsLoaded();
        });
        this.generateLoadingScreen(app.screen.width, app.screen.height);
        app.stage.addChild(this.loadingScreen);
    }

    loadAssets() {
        this.loader.add('brick', './src/assets/brick.png');
    }

    generateLoadingScreen(appWidth: number, appHeight: number) {
        const style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fill: '#ffffff'
        });
        const playText = new PIXI.Text('Loading...', style);
        playText.x = (appWidth - playText.width) / 2;
        playText.y = (appHeight - playText.height) / 2;
        this.loadingScreen = playText;
    }
}
