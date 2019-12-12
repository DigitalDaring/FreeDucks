import {SampleButton} from './components/sample-button';
import {FreeDucks, Reducer, Action} from './freeducks/index';
import { StateDump } from './components/state-dump';
import { PottedPlant } from './components/potted-plant';
import { GameWindow } from './components/game-window';
import { Layer } from './state/layer';
import { Scene } from './state/scene';

import plantPot from './assets/plants/plants_00.png';
import seed from './assets/plants/plants_01.png';
import seedling from './assets/plants/plants_02.png';
import young from './assets/plants/plants_03.png';
import grown from './assets/plants/plants_04.png';
import berries from './assets/plants/plants_05.png';

import brickWall from './assets/building/wall_02.png';
import leftWindow from './assets/building/wall_01.png';
import rightWindow from './assets/building/wall_00.png';
import topLeftWindow from './assets/building/wall_03.png';
import topWindow from './assets/building/wall_05.png';
import topRightWindow from './assets/building/wall_04.png';
import windowPane from './assets/building/wall_06.png';
import { Entity } from './state/entity';
import { Sprite } from './state/sprite';

const blankScene = new Scene();
blankScene.width = 10;
blankScene.height = 4;
blankScene.layers = [];
blankScene.entities = [];

const wallImage = new Image(64, 96);
wallImage.src = brickWall;

const leftWindowImage = new Image(64, 96);
leftWindowImage.src = leftWindow;

const rightWindowImage = new Image(64, 96);
rightWindowImage.src = rightWindow;

const topLeftWindowImage = new Image(64, 96);
topLeftWindowImage.src = topLeftWindow;

const topWindowImage = new Image(64, 96);
topWindowImage.src = topWindow;

const topRightWindowImage = new Image(64, 96);
topRightWindowImage.src = topRightWindow;

const windowPaneImage = new Image(64, 96);
windowPaneImage.src = windowPane;

const plantPotImage = new Image(64, 96);
plantPotImage.src = plantPot;

const seedImage = new Image(64, 96);
seedImage.src = seed;

const seedlingImage = new Image(64, 96);
seedlingImage.src = seedling;

const youngImage = new Image(64, 96);
youngImage.src = young;

const grownImage = new Image(64, 96);
grownImage.src = grown;

const berriesImage = new Image(64, 96);
berriesImage.src = berries;

const wallLayer = new Layer();
wallLayer.width = 10;
wallLayer.height = 3;
wallLayer.x = 0;
wallLayer.y = 0;
wallLayer.z = 0;
wallLayer.tileMap = new Array<Array<String>>();

const wallMapString = `
# { = = } { = = } #
# [ W W ] [ W W ] #
# # # # # # # # # #`;

const wallRows = wallMapString.split('\n');
wallLayer.tileMap = wallRows.map(row => {
    return row.trim().split(' ');
});

const pottedPlant = new Entity();
pottedPlant.name = "MyPlant";
const pot = new Sprite();
pot.image = plantPotImage;
pot.name = "pot";
pottedPlant.sprites = [
    pot
];
pottedPlant.x = 2;
pottedPlant.y = 2;

const freeducks = new FreeDucks(
    {
        count: 0,
        scene: blankScene,
        tileSet: {},
        tileSizeX: 64,
        tileSizeY: 96
    }
);

const countReducer = {
    update: (action: Action, state: any): any => {
        let newState = Object.assign({}, state);
        if(action.name === 'increment') {
            newState.count = state.count + 1;
        }
        return newState;
    }
} as Reducer

const tileSetReducer = {
    update: (action: Action, state: any): any => {
        let newState = Object.assign({}, state);
        if(action.name === 'setTile') {
            newState.tileSet[action.data.id] = action.data.tile;
        }
        return newState;
    }
}

const layerReducer = {
    update: (action: Action, state: any): any => {
        let newState = Object.assign({}, state);
        if(action.name === 'addLayer') {
            newState.scene.layers = [...newState.scene.layers, action.data];
        }
        return newState;
    }
}

const entityReducer = {
    update: (action: Action, state: any): any => {
        let newState = Object.assign({}, state);
        if(action.name === 'addEntity') {
            newState.scene.entities = [...newState.scene.entities, action.data];
        }
        return newState;
    }
}

freeducks.registerReducer(countReducer);
freeducks.registerReducer(tileSetReducer);
freeducks.registerReducer(layerReducer);
freeducks.registerReducer(entityReducer);

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

wallImage.onload = () => {

/*import leftWindow from './assets/building/wall_01.png';
import rightWindow from './assets/building/wall_00.png';
import topLeftWindow from './assets/building/wall_03.png';
import topWindow from './assets/building/wall_05.png';
import topRightWindow from './assets/building/wall_04.png';
import windowPane from './assets/building/wall_06.png';
*/

    freeducks.dispatch({name: 'setTile', data: {id: '#', tile: wallImage}} as Action);
    freeducks.dispatch({name: 'setTile', data: {id: '[', tile: leftWindowImage}} as Action);
    freeducks.dispatch({name: 'setTile', data: {id: ']', tile: rightWindowImage}} as Action);
    freeducks.dispatch({name: 'setTile', data: {id: '{', tile: topLeftWindowImage}} as Action);
    freeducks.dispatch({name: 'setTile', data: {id: '}', tile: topRightWindowImage}} as Action);
    freeducks.dispatch({name: 'setTile', data: {id: '=', tile: topWindowImage}} as Action);
    freeducks.dispatch({name: 'setTile', data: {id: 'W', tile: windowPaneImage}} as Action);
    //freeducks.dispatch({name: 'addLayer', data: backgroundLayer});
    freeducks.dispatch({name: 'addLayer', data: wallLayer} as Action);
    freeducks.dispatch({name: 'addEntity', data: pottedPlant} as Action);

};




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
