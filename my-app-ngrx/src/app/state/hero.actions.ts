import { createAction,props } from "@ngrx/store";
import { Hero } from "../models/hero.model";

export const loadHeroes=createAction('[Hero] loading Heroes')
    
    


export  const loadHeroesSuccess=createAction(
    '[Hero] loading Heroes Success',
     props<{heroes: Hero[]}>()
)
