import {SampleButton} from './components/sample-button';
import {FreeDucks, Reducer, Action} from './freeducks/index';
import { StateDump } from './components/state-dump';
import { PottedPlant } from './components/potted-plant';
import { GameWindow } from './components/game-window';

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

const DefineWithState = (ComponentClass) => {
    class InjectedComponent extends ComponentClass {
        constructor() {
            super(freeducks);
        }
    }

    window.customElements.define(ComponentClass.componentName, InjectedComponent);
}

DefineWithState(SampleButton);
DefineWithState(StateDump);
DefineWithState(PottedPlant);
DefineWithState(GameWindow);

// class InjectedSampleButton extends SampleButton{
//     constructor() {
//         super(freeducks);
//     }
// }

// class InjectedStateDump extends StateDump{
//     constructor() {
//         super(freeducks);
//     }
// }

// class InjectedPottedPlant extends PottedPlant {
//     constructor() {
//         super(freeducks);
//     }
// }

// window.customElements.define(SampleButton.componentName, InjectedSampleButton);
// window.customElements.define(StateDump.componentName, InjectedStateDump);
// window.customElements.define(PottedPlant.componentName, InjectedPottedPlant);
