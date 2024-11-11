import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../service/httpservice";

const initialState = {
    sidebar: true,
    todos: {
        data: [],
        loading: false,
        error: ''
    }
}

export const getTodos = createAsyncThunk('getTodos', async (thunkAPI) => {
    return await apiService.get('/todos');
})

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebar = !state.sidebar
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state) => {
            state.todos.loading = true;
            state.todos.error = ''
        });
        builder.addCase(getTodos.fulfilled, (state, { payload }) => {
            state.todos.loading = false;
            state.todos.data = payload.data;
            state.todos.error = ''
        });
        builder.addCase(getTodos.rejected, (state, { error }) => {
            state.todos.loading = false;
            state.todos.data = [];
            state.todos.error = error?.message
        })
    }
})

export const { toggleSidebar } = appSlice.actions

export default appSlice.reducer