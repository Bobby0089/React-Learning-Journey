import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers: {
        login : (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },

         logout : (state) => {
            state.status = false;
            state.userData = null
        }
    }
});


// two things we have to export
// 1 - reducers from authSlice
// 2 - individual functions of reducers


export const {login, logout} = authSlice.actions;
export default authSlice.reducer;  