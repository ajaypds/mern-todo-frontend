import { createSlice } from "@reduxjs/toolkit";
import { store } from ".";

const initialState = {
    sidebar: true
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebar = !state.sidebar
        }
    }
})

export const { toggleSidebar } = appSlice.actions

export default appSlice.reducer