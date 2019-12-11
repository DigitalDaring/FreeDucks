import {FreeDucks} from '../freeducks/index';

export class StateDump extends HTMLElement {

    private shadow: ShadowRoot;

    constructor(private freeducks: FreeDucks) {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        freeducks.subscribe((state) => {
            this.render(state);
        });
    }

    static get componentName(): string {
        return 'state-dump';
    }

    private get css(): string {
        return `

        `;
    }

    private render(state: any) {
        const friendlyState = JSON.stringify(state, null, 2);
        this.shadow.innerHTML = `<pre>${friendlyState}</pre>`
    }


}