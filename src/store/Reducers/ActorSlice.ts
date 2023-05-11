import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IActor } from "../../types/ITodos";

interface IActorSlice {
    users: IActor[];
    loader: boolean;
    error: string;
}

const initialState : IActorSlice = {
    users: [],
    loader: false,
    error: '',

}
export const ActorSlice = createSlice({
    name: 'action',
    initialState,
    reducers: {
        fetchingActorDetail(state, action: PayloadAction<any>) {
            state.loader = true
        },
        fetchingActorSuccess(state, action: PayloadAction<IActor[]>) {
            state.loader = false
            state.users = action.payload
            state.error = ''
        },
        fetchingActorError(state, action: PayloadAction<string>) {
            state.loader = false
            state.users = []
            state.error = action.payload
        }
    }
})
export  default ActorSlice.reducer
export const {fetchingActorDetail, fetchingActorError,fetchingActorSuccess} = ActorSlice.actions