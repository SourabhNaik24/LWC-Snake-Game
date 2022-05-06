import { LightningElement, track } from 'lwc';

export default class SnakeGame extends LightningElement {

    score;
    blockSize = 20; // 20 as game-block size is 20px

    @track gameBlocks = []; // Empty Array

    renderComplete = false;

    renderedCallback(){
        if(!this.renderComplete) {

            // Get canvas width and height of game-container
            let canvasWidth = this.template.querySelector(".game-container").clientWidth;
            let canvasHeight = this.template.querySelector(".game-container").clientHeight;

            // Get Number of boxes to be created on X-axis and Y-axis
            let xAxisMax = Math.floor(canvasWidth/this.blockSize);
            let yAxisMax = Math.floor(canvasHeight/this.blockSize);

            let tempGameBlock = []; // To avoid infinte loop as DOM calls renderedcallback

            for(let y = 0; y < yAxisMax; y++) {
                for(let x = 0; x < xAxisMax; x++) {
                    let obj = {id: `${x}:${y}`};
                    tempGameBlock.push(obj);
                }
            }

            this.renderComplete = true;
            this.gameBlocks = tempGameBlock;
        }
    }
}