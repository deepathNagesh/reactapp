import { configureStore } from "@reduxjs/toolkit";
import ActorReducer  from '../slice/actor';

export const store = configureStore({
    devTools:false,
    reducer: {
        actorAdd: ActorReducer
    }
})