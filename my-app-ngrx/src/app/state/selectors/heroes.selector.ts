import { createSelector } from "@ngrx/store";
import { heroState } from "src/app/models/heros.interface";
import { appState } from "../app.state";


export const selectHeroesFeature = (state: appState) => state.heroes;

export const selectHeroes = createSelector(
    selectHeroesFeature,
    (state: heroState) => state.heroes
);

export const selectLoading = createSelector(
    selectHeroesFeature,
    (state: heroState) => state.loading
);