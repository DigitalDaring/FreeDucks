import {FreeDucks} from '../freeducks/index';
import background from '../assets/plants/plants_00.png';
import seed from '../assets/plants/plants_01.png';
import seedling from '../assets/plants/plants_02.png';
import young from '../assets/plants/plants_03.png';
import grown from '../assets/plants/plants_04.png';
import berries from '../assets/plants/plants_05.png';

export class PottedPlant extends HTMLElement {
    private canvas: HTMLCanvasElement;
    private canvasContext: CanvasRenderingContext2D;
    private shadow: ShadowRoot;

    constructor(private freeducks: FreeDucks) {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        
        //'<canvas id="plant-canvas" width="48px" height="72px"></canvas';
        // this.canvas = this.shadow.querySelector('#plant-canvas') as HTMLCanvasElement;
        // this.canvasContext = this.canvas.getContext('2d');
        // this.canvasContext.fillStyle = 'rgba(0,0,0,1)';
        // this.canvasContext.fillRect(0, 0, 20, 20);

        this.freeducks.subscribe((state) => {
            this.render(state);
        })

    }

    static get componentName(): string {
        return 'potted-plant';
    }

    private get css(): string {
        return `
            .shelf {
                position: relative;
                width: 48px;
                height: 72px;
            }

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 48px;
                height: 72px;
            }

            img.pot {
                z-index: 100;
            }

            img.plant {
                z-index: 200;
            }

            img.berries {
                z-index: 300;
            }
        `
    }

    private render(state: any) {

        let plantProgress;
        let berriesProgress;
        if (state.count > 1) {
            plantProgress = seed;
        }

        if (state.count > 10) {
            plantProgress = seedling;
        }

        if (state.count > 20) {
            plantProgress = young;
        }

        if (state.count > 30) {
            plantProgress = grown;
        }

        if (state.count > 40) {
            berriesProgress = berries;
        }

        const plantImage = `<img class="plant" src="${plantProgress}">`;
        const berriesImage = `<img class="berries" src="${berriesProgress}">`;

        this.shadow.innerHTML = `
            <style>
                ${this.css}
            </style>
            <div class="shelf">
                <img class="pot" src="${background}">
                ${berriesProgress ? berriesImage: ''}
                ${plantProgress ? plantImage: ''}
            </div>
        `
    }
}