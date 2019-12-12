import {Layer} from './layer';
import {Entity} from './entity';

export class Scene {
    id: String;
    height: Number;
    width: Number;
    layers: Array<Layer>;
    entities: Array<Entity>;
}