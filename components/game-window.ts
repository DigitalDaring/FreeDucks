import {Action, FreeDucks} from '../freeducks/index';
import plantPot from '../assets/plants/plants_0.png';
import seed from '../assets/plants/plants_1.png';
import seedling from '../assets/plants/plants_2.png';
import young from '../assets/plants/plants_3.png';
import grown from '../assets/plants/plants_4.png';
import berries from '../assets/plants/plants_5.png';

export class GameWindow extends HTMLElement {
    private canvas: HTMLCanvasElement;
    private canvasContext: CanvasRenderingContext2D;
    private shadow: ShadowRoot;
    private plantPotImage = new Image();
    private seedImage = new Image();
    private seedlingImage = new Image();
    private youngImage = new Image();
    private grownImage = new Image();
    private berriesImage = new Image();

    constructor(private freeducks: FreeDucks) {
        super();
        this.shadow = this.attachShadow({mode: 'open'});

        this.plantPotImage.src = plantPot;
        this.seedImage.src = seed;
        this.seedlingImage.src = seedling;
        this.youngImage.src = young;
        this.grownImage.src = grown;
        this.berriesImage.src = berries;
        
        this.shadow.innerHTML = '<canvas id="plant-canvas" width="48px" height="72px"></canvas';
        this.canvas = this.shadow.querySelector('#plant-canvas') as HTMLCanvasElement;
        this.canvasContext = this.canvas.getContext('2d');

        this.plantPotImage.onload = () => {
            this.freeducks.subscribe((state) => {
                this.render(state);
            });

            window.setInterval(() => {
                this.freeducks.dispatch({name: 'increment'} as Action);
            }, 2000);
        };
    }

    static get componentName(): string {
        return 'game-window';
    }

    private render(state: any) {

        this.canvasContext.fillStyle = '#FFF';
        this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.canvasContext.drawImage(this.plantPotImage, 0, 0);

        if (state.count > 1 && state.count < 10) {
            this.canvasContext.drawImage(this.seedImage, 0, 0);
        } else if (state.count >= 10 && state.count < 20) {
            this.canvasContext.drawImage(this.seedlingImage, 0, 0);
        } else if (state.count >= 20 && state.count < 30) {
            this.canvasContext.drawImage(this.youngImage, 0, 0);
        } else if (state.count >= 30) {
            this.canvasContext.drawImage(this.grownImage, 0, 0);
        }
        
        if (state.count > 40) {
            this.canvasContext.drawImage(this.berriesImage, 0, 0);
        }

    }
}


// super();
// this.shadow = this.attachShadow({mode: 'open'});

// const potImg = new Image(48, 72);
// potImg.src = background;

// this.shadow.innerHTML = '<canvas id="plant-canvas" width="48px" height="72px"></canvas';
// this.canvas = this.shadow.querySelector('#plant-canvas') as HTMLCanvasElement;
// this.canvasContext = this.canvas.getContext('2d');
// this.canvasContext.fillStyle = 'rgba(0,0,0,1)';
// this.canvasContext.fillRect(0, 0, 20, 20);

// potImg.onload = (e) => {
//     this.canvasContext.drawImage(potImg, 0, 0);
    
// };

// this.freeducks.subscribe((state) => {
//     this.render(state);
// })