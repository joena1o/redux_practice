import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {value:"black"},
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload
        }
    }
});

export const {changeColor} = themeSlice.actions;

export default themeSlice.reducer;