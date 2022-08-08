import { ActionReducerMap } from "@ngrx/store";
import { messageReducer, messageState } from "../app.reducer";
import { Hero } from "../models/hero.model";
import { heroState } from "../models/heros.interface";
import { heroReducer } from "../reducer/hero.reducer";

export interface appState{
    message:messageState,
    heroes:heroState
}

export const ROOT_REDUCER:ActionReducerMap<appState>={
   heroes:heroReducer,
    message:messageReducer
}