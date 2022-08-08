import { createSelector } from "@ngrx/store";
import { messageState } from "src/app/app.reducer";
import { appState } from "../app.state";

const selectMessageFeature= (state:appState )=> state.message;

export const selectMessage = createSelector(
    selectMessageFeature,
    (state:messageState)=>state.text
)