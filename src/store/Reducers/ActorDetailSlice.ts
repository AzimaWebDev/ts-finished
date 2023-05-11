import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface IActorDetail{
    actor:Partial<any>,
    loader:boolean,
    error:string
}

const initialState:IActorDetail = {
    actor:{},
    loader:false,
    error:""
}
export const ActorSliceDetail = createSlice({
    name: "ActorDetail",
    initialState,
    reducers:{
        getActorDetail(state){
            state.loader = true
        },

        getActorDetailSuccess(state,action:PayloadAction<any>){
            state.loader = true
            state.actor = action.payload
            state.error = ""
        },

        getActorDetailError(state,action:PayloadAction<string>){
            state.loader = true
            state.error = 'err'
            state.actor = {}
        }
    }

})


export default ActorSliceDetail.reducer

export const {getActorDetail,getActorDetailSuccess, getActorDetailError} = ActorSliceDetail.actions