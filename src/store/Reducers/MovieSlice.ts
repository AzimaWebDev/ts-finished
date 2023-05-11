import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IMovies } from "../../types/ITodos"

interface IMoviesState {
    movies: IMovies[]
    loader:boolean
    error:string
}

const initialState:IMoviesState = {
    movies:[],
    loader:false,
    error:'',
}

export const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        getMovies (state){
            state.loader = true
        },
        getMoviesSuccess (state, action: PayloadAction<IMovies[]>){
            state.loader = false
            state.error = ''
            state.movies = action.payload
        },
        getMoviesError(state,action:PayloadAction<string>){
            state.loader = false
            state.error = 'nan'
            state.movies = []
        }
    }

})

export const {getMovies, getMoviesError, getMoviesSuccess} = moviesSlice.actions

export default moviesSlice.reducer