import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  value: {
    color: "black", 
  }
};

let ThemeColorsSlice = createSlice({
  name: "Themes",
  initialState: initialState,
  reducers: {
    Colors: (state, action) => {
      state.value.color = action.payload;
    }
  }
});

export const { Colors } = ThemeColorsSlice.actions;
export default ThemeColorsSlice.reducer;
