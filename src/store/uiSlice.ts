import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice ({
    name: "ui",
    initialState: {
        isHovered: false,
    },
    reducers: {
        setIsHovered: (state, action) => {
            state.isHovered = action.payload
        }
    }
})

export const {setIsHovered} = uiSlice.actions;

export default uiSlice;