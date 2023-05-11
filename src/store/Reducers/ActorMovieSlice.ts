import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IActorMovie} from "../../types/ITodos";

interface IActorsMovieSlice {
    actor: IActorMovie[]
    loader: boolean
    error: string
}

const initialState: IActorsMovieSlice = {
    actor: [],
    loader: false,
    error: ''
}
export const ActorsSlice = createSlice({
    name: 'actorMovie',
    initialState,
    reducers: {
        getActorsDetail(state, action: PayloadAction<any>) {
            state.loader = true
        },
        getActorsSuccess(state, action: PayloadAction<IActorMovie[]>) {
            state.loader = false
            state.actor = action.payload
            state.error = ''
        },
        getActorsError(state, action: PayloadAction<string>) {
            state.loader = false
            state.actor = []
            state.error = action.payload
        }
    }
})
export default  ActorsSlice.reducer
export  const {getActorsDetail,getActorsSuccess,getActorsError}=ActorsSlice.actions