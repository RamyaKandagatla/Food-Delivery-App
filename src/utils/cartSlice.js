import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items: [],
    },
    reducers : {
        addItem : (state,action) => {

            /**
             * vanilla redux(older redux) => dont mutate state
             * const newState = [...state];
             * newState.items.push(action.payload);
             * return newState
             * 
             * In Redux Toolkit
             * we have to mutate the state
             * redux toolkit uses the immer library to do the above stuff which was done in older venilla redux
             * immer basically finds out the difference b/w the original state and mutated state and
             *    gives you back the new state
             */
            state.items.push(action.payload);
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            // in RTK either mutate the existing state or return the new state.
            state.items.length = 0;
            // return {items : []};
        }
    }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;