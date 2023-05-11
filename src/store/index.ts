import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Reducers/MovieSlice"
import  TopRatedSlice  from "./Reducers/TopRatedSlice";
import  popularSlice  from "./Reducers/PopularSlice";
import ActorSlice from "./Reducers/ActorSlice";
import ActorSliceDetail from "./Reducers/ActorDetailSlice";
import TopRatedDetail from "./Reducers/TopRatedDetail";
import  ActorsSlice from "./Reducers/ActorMovieSlice";
import SearchSlice from './Reducers/SearchSlice'
const rootReducer = combineReducers({
    moviesReducer,
    TopRatedSlice,
    popularSlice,
    TopRatedDetail,
    ActorSlice,
    ActorSliceDetail,
    ActorsSlice,
    SearchSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']