import { RootState } from '../store';
import { createDraftSafeSelector } from "@reduxjs/toolkit";


export const selectDataList = createDraftSafeSelector(
    (state:RootState) => state.voice,
    (state) => {
        return state.data
    }
)