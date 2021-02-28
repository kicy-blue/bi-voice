import { reducers } from './reducers';
import { State as VoiceState} from './voice/slice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore<{
    voice: VoiceState;
}>({
    reducer:reducers
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch