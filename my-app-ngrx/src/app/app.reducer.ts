import {Action, createReducer, on} from '@ngrx/store';

import { createAction,props } from "@ngrx/store";

export interface messageState {
    
        text: string;
    
    
}
//objeto de initial state
export const initialState:messageState={
  
        text: 'codigo ngrx'
    
}


export const setSpanish=createAction('[Message] set Spanish')
export const setEnglish=createAction('[Message] set English')
    
    


export const messageReducer=createReducer(
    initialState,
    on(setEnglish,(state: any)=>({...state,text:'ingles'})),
    on(setSpanish,(state: any)=>({...state,text:'español'}))
   
)
