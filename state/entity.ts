import {Sprite} from './sprite';

export class Entity {
    x: Number;
    y: Number;
    name: String;
    sprites: Array<Sprite>;
    onStateChange: Function;
}