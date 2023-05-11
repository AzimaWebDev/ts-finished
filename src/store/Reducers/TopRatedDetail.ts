import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITopDetail} from "../../types/ITodos";

interface ITopRatedDetail{
    topRated:Partial<ITopDetail>
    loader:boolean
    error:string
}

const initialState:ITopRatedDetail = {
    topRated:{},
    loader:false,
    error:""
}

export const toprateddetail = createSlice({
    name:'topRated',
    initialState,
    reducers:{
        getTopDetail(state,action){
            state.loader = true
        },
        getTopDetailSuccess(state,action:PayloadAction<ITopDetail>){
            state.loader = false
            state.topRated = action.payload
            state.error = ""
        },
        getTopDetailError(state,action:PayloadAction<string>){
            state.loader = false
            state.topRated = {}
            state.error = "err"
        }
    }
})

export default toprateddetail.reducer
export const { getTopDetail,getTopDetailSuccess,getTopDetailError} = toprateddetail.actions