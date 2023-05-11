import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovies } from "../../types/ITodos";


interface ITopRated{
    users:IMovies[],
    loader:boolean,
    error:string
}

const initialState:ITopRated = {
    users:[],
    loader:false,
    error:""
}

export const TopRatedSlice = createSlice({
    name:"TopRated",
    initialState,
    reducers:{
        getTopRated(state){
            state.loader = true
        },

        getTopRatedSuccess(state,action:PayloadAction<IMovies[]>){
            state.loader = true
            state.users = action.payload
            state.error = ""
        },

        getTopRatedError(state,action: PayloadAction<string>){
            state.loader = true
            state.error = 'nan'
            state.users = []
        }

    }
})

export default TopRatedSlice.reducer
export const{getTopRated,getTopRatedError,getTopRatedSuccess} = TopRatedSlice.actions