import {ISearch} from "../../types/ITodos";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SearchSlice {
    search: ISearch[]
    loading: boolean
    error: string
}

const initialState: SearchSlice = {
    search: [],
    loading: false,
    error: ''
}

const SearchSlice = createSlice({
    name: 'nkl',
    initialState,
    reducers: {
        fetSearch(state, action: PayloadAction<any>) {
            state.loading = true
        },
        fetSearchSuccess(state, action: PayloadAction<ISearch[]>) {
            state.loading = false
            state.error = ""
            state.search = action.payload
        },

        fetSearchError(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = 'nan'
            state.search = []
        }
    }
})


export const {fetSearch, fetSearchSuccess, fetSearchError} = SearchSlice.actions

export default SearchSlice.reducer