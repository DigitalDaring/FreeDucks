import {SampleButton} from './sample-button';
import {FreeDucks, Reducer, Action} from './freeducks/index';
import { SampleDump } from './sample-dump';
import { SamplePlant } from './sample-plant';

const freeducks = new FreeDucks({count: 0});

const countReducer = {
    update: (action: Action, state: any): any => {
        let newState = Object.assign({}, state);
        if(action.name === 'increment') {
            newState.count = state.count + 1;
        }
        return newState;
    }
} as Reducer

freeducks.registerReducer(countReducer);

class InjectedSampleButton extends SampleButton{
    constructor() {
        super(freeducks);
    }
}

class InjectedSampleDump extends SampleDump{
    constructor() {
        super(freeducks);
    }
}

class InjectedSamplePlant extends SamplePlant {
    constructor() {
        super(freeducks);
    }
}

window.customElements.define(SampleButton.componentName, InjectedSampleButton);
window.customElements.define(SampleDump.componentName, InjectedSampleDump);
window.customElements.define(SamplePlant.componentName, InjectedSamplePlant);
