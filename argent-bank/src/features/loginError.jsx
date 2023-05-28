import { 
    createAction, 
    createReducer,
} from "@reduxjs/toolkit";

// Create the initial state for the login error
const initialState = 
{
  data: false
};

// Create the action
export const loginErrorAction = createAction("loginErrorAction")

// Create the reducer
export default createReducer(initialState, (builder) => 
{
  builder.addCase(loginErrorAction, (state, action) => 
  {
    state.data = action.payload
  })
})