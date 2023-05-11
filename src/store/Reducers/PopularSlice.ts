import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import  {IPopularDetail} from "../../types/ITodos"

interface IPopularSlice {
    popular: Partial<IPopularDetail>
    loader: boolean
    error: string,
    valueS: any
    mode: boolean
}

const initialState: IPopularSlice = {
    popular: {},
    loader: false,
    error: "",
    mode:false,
    valueS: {
        usa: "en-US",
        ru: "ru-RU",
        fr:"fr-RU",
        cr:"cr-CR"



    }
}
export const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {
        fetchingDetail(state , action){
            state.loader = true
        },
        fetchingDetailSuccess(state, action:PayloadAction<IPopularDetail>){
            state.loader = false
            state.popular = action.payload
            state.error = ''
        },
        fetchingDetailError(state, action: PayloadAction<string>) {
            state.loader = false
            state.popular = {}
            state.error = "error"
        },
        getValue(state,action) {
            state.valueS = action.payload
        },

        upDate(state,action:PayloadAction<boolean>){
            state.mode = action.payload
        }
    }
})
export default popularSlice.reducer
export const {fetchingDetail, fetchingDetailSuccess, fetchingDetailError,getValue,upDate} = popularSlice.actions