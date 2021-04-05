import {tickerConfig} from "../config/ticker";

/**
 * Helper class to handle game speed, based on current level
 */
export class Ticker{

    rawTickDuration: number;
    levels: number[];
    currentLevel: number;

    constructor(config: typeof tickerConfig) {
        this.rawTickDuration = config.RAW_TICK_DURATION;
        this.levels = config.LEVELS;
        this.currentLevel = this.levels[0];
    }

    getTickDuration(){
        return this.rawTickDuration * this.currentLevel;
    }

    setCurrentLevel(index: number){
        this.currentLevel = this.levels[index];
    }
}
