import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    actors:[
        
    ],
    selRadio : "Goat"
};

const actorSlice = createSlice({
    name: 'addActor',
    initialState,
    reducers: {
        addActor(state, action) {
            state.actors.push(action.payload)
        },
        selRadio(state, action) {
            //console.log(action.payload);
            state.selRadio = action.payload ;
        },
        // deleteCustomer(state, action) {
        //     const deleteIndex = action.payload;
        //     return state.filter((val, index) => index !== deleteIndex )
        // }
    }

})

export const { addActor,selRadio } = actorSlice.actions;
export default actorSlice.reducer