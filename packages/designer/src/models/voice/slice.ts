import { createSlice } from "@reduxjs/toolkit"
import { stat } from "fs"
import * as asyncActions from './async-actions'


export type State = {
    data:any;
    currentChart:any;
    showModal:string;
    listLoading:boolean;
}

const initialState:State = {
    currentChart:0,
    data:{},
    showModal:'all',
    listLoading:false,
}

export const voiceSlice = createSlice({
    name:'voice',
    initialState,
    reducers:{
        setCurrentChart:(state,action) => {
            state.currentChart = action.payload
        },
        setShowModel:(state,action) => {
            state.showModal = action.payload
        },
    },
    extraReducers:(builder) => {
        builder.addCase(asyncActions.fetchDataList.pending,(state)=>{
            state.listLoading = true
        })
        builder.addCase(asyncActions.fetchDataList.rejected,(state)=>{
            state.listLoading = false
        })
        builder.addCase(asyncActions.fetchDataList.fulfilled,(state,action)=>{
            state.data = action.payload
        })
    }
})

export const getConstantsInfo = (state:any) => {
    return {
        showModal:state.voice.showModal,
        listLoading:state.voice.listLoading,
        currentChart:state.voice.currentChart,
    }
}

export default { voice: voiceSlice.reducer }