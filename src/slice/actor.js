import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    actors:[
        
    ],
};

const actorSlice = createSlice({
    name: 'addActor',
    initialState,
    reducers: {
        addActor(state, action) {
            state.actors.push(action.payload)
        },
        // deleteCustomer(state, action) {
        //     const deleteIndex = action.payload;
        //     return state.filter((val, index) => index !== deleteIndex )
        // }
    }

})

export const { addActor } = actorSlice.actions;
export default actorSlice.reducer