import { 
    createAction, 
    createReducer 
} 
from "@reduxjs/toolkit";

// Create the initial state
const initialState = 
{
  data: null
};

// Create the action
export const profileActionData = createAction("profileActionData")

export default createReducer(initialState, (builder) => 
{
  builder.addCase(profileActionData, (state, action) => 
  {
    state.data = action.payload
  });
});