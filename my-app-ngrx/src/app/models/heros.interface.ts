import { Hero } from "./hero.model";

export interface heroState {
    loading:boolean;
    heroes:ReadonlyArray<Hero>
}