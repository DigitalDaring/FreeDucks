import {Action, FreeDucks} from '../freeducks/index';

export class GameWindow extends HTMLElement {
    private canvas: HTMLCanvasElement;
    private canvasContext: CanvasRenderingContext2D;
    private shadow: ShadowRoot;

    constructor(private freeducks: FreeDucks) {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        
        this.shadow.innerHTML = '<canvas id="plant-canvas" width="48px" height="72px"></canvas>';
        this.canvas = this.shadow.querySelector('#plant-canvas') as HTMLCanvasElement;
        this.canvasContext = this.canvas.getContext('2d');

        this.freeducks.subscribe((state) => {
            this.render(state);
        });

        window.setInterval(() => {
            this.freeducks.dispatch({name: 'increment'} as Action);
        }, 2000);
    }

    static get componentName(): string {
        return 'game-window';
    }

    private render(state: any) {
        this.canvas.width = state.tileSizeX * state.scene.width;
        this.canvas.height = state.tileSizeY * state.scene.height;

        this.canvasContext.fillStyle = '#FFF';
        this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);

        state.scene.layers.forEach(layer => {
            layer.tileMap.forEach((row, yIdx) => {
                const y = yIdx * state.tileSizeY;
                row.forEach((cell, xIdx) => {
                    const x = xIdx * state.tileSizeX;
                    this.canvasContext.drawImage(state.tileSet[cell], x, y);
                });
            })
        });
    }
}
