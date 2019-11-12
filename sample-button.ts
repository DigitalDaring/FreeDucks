import {Action, FreeDucks} from './freeducks/index';

export class SampleButton extends HTMLElement {
    private shadow: ShadowRoot;
    private clickCount = 0;

    constructor(private freeducks: FreeDucks) {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
        this.addEventListener('click', this.incrementCount);
        this.freeducks.subscribe((state: any) => {
            this.clickCount = state.count;
            this.render();
        });
    }

    static get componentName(): string {
        return 'sample-button';
    }

    private incrementCount() {
        this.freeducks.dispatch({name: 'increment'} as Action);
    }

    private get css(): string {
        return `
            a.clickable {
                padding: 10px;
                border-radius: 10px;
                background-color: #66C;
                color: #FFF;
                cursor: pointer;
                box-shadow: 1px 2px 3px #ccc;
            }

            a.clickable:hover {
                box-shadow: 0px 1px 2px #bbb;
            }
        `;
    }

    private render() {
        this.shadow.innerHTML = `
            <style>${this.css}</style>
            <a class="clickable">
                Clicked ${this.clickCount} times!
            </a>
        `;
    }
}