import { 
    createAction, 
    createReducer,
} from "@reduxjs/toolkit";

// Create the action
export const isLoggedAction = createAction("isLoggedAction");

// Create the reducer
export default createReducer(false, (builder) => 
{
  builder.addCase(isLoggedAction, (state) => !state)
});