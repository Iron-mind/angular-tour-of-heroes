import { createReducer, on } from "@ngrx/store";
import { Hero } from "../models/hero.model";
import { heroState } from "../models/heros.interface";
import { loadHeroes, loadHeroesSuccess } from "../state/hero.actions";

const initialState :heroState={
    loading:false,
    heroes:[]
}

export const heroReducer=createReducer(
    initialState,
    on(loadHeroes,state=>({...state,loading:!state.loading})),
    on(loadHeroesSuccess,(state,{heroes})=>({...state,loading:false,heroes}))
)
