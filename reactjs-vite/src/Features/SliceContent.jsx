import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    value:{
        name:"",
        age:0,
        email:""
    }
};

let SliceContent = createSlice({
    name:"FromContent",
    initialState,
    reducers: {
        Login : (state,action) =>
        {
            state.value = action.payload;
        },
        LogOut: (state) =>
        {
            state.value = initialState;
        }
    }
});

export const {Login,LogOut} = SliceContent.actions;
export default SliceContent.reducer;