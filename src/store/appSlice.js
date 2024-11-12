import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import apiRequest from "../service/httpservice";

const initialState = {
    sidebar: true,
    todos: {
        data: [],
        loading: false,
        error: ''
    },
    todo: {
        data: {},
        loading: false,
        error: ''
    },
    projects: {
        data: [],
        loading: false,
        error: ''
    },
    project: {
        data: {},
        loading: false,
        error: ''
    }
}

export const getTodos = createAsyncThunk('getTodos', async (thunkAPI) => {
    return await apiRequest.get('/todos');
})

export const getTodo = createAsyncThunk('getTodo', async (id) => {
    return await apiRequest.get(`/todos/${id}`);
});

export const addTodo = createAsyncThunk('addTodo', async ({ taskname, duedate, parent, parentModel }) => {
    return await apiRequest.post('/todos', { taskname, duedate, parent, parentModel });
});

export const updateTodo = createAsyncThunk('updateTodo', async ({ id, taskname, duedate, parent, parentModel }) => {
    return await apiRequest.put(`/todos/${id}`, { taskname, duedate, parent, parentModel })
});

export const getProjects = createAsyncThunk('getProjects', async (thunkAPI) => {
    return await apiRequest.get('/projects');
});

export const getProject = createAsyncThunk('getTodo', async (id) => {
    return await apiRequest.get(`/projects/${id}`);
});

export const addProject = createAsyncThunk('addProject', async ({ name }) => {
    return await apiRequest.post('/projects', { name });
});

export const updateProject = createAsyncThunk('updateProject', async ({ id, name }) => {
    return await apiRequest.put(`/projects/${id}`, { name });
});

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
            state.todos.data = payload;
            state.todos.error = ''
        });
        builder.addCase(getTodos.rejected, (state, { error }) => {
            state.todos.loading = false;
            state.todos.data = [];
            state.todos.error = error?.message
        })
        // ------------------------------------------------------------
        builder.addCase(getProjects.pending, (state) => {
            state.projects.loading = true;
            state.projects.error = ''
        });
        builder.addCase(getProjects.fulfilled, (state, { payload }) => {
            state.projects.loading = false;
            state.projects.data = payload;
            state.projects.error = ''
        });
        builder.addCase(getProjects.rejected, (state, { error }) => {
            state.projects.loading = false;
            state.projects.data = [];
            state.projects.error = error?.message
        })
        // ------------------------------------------------------------
        builder.addMatcher(isAnyOf(getTodo.pending, addTodo.pending, updateTodo.pending), (state) => {
            state.todo.loading = true;
            state.todo.error = ''
        });
        builder.addMatcher(isAnyOf(getTodo.fulfilled, addTodo.fulfilled, updateTodo.fulfilled), (state, { payload }) => {
            state.todo.loading = false;
            state.todo.data = payload.data;
            state.todo.error = ''
        });
        builder.addMatcher(isAnyOf(getTodo.rejected, addTodo.rejected, updateTodo.rejected), (state, { error }) => {
            state.todo.loading = false;
            state.todo.data = [];
            state.todo.error = error?.message
        })
        // ------------------------------------------------------------

        builder.addMatcher(isAnyOf(getProject.pending, addProject.pending, updateProject.pending), (state) => {
            state.project.loading = true;
            state.project.error = ''
        });
        builder.addMatcher(isAnyOf(getProject.fulfilled, addProject.fulfilled, updateProject.fulfilled), (state, { payload }) => {
            state.project.loading = false;
            state.project.data = payload.data;
            state.project.error = ''
        });
        builder.addMatcher(isAnyOf(getProject.rejected, addProject.rejected, updateProject.rejected), (state, { error }) => {
            state.project.loading = false;
            state.project.data = [];
            state.project.error = error?.message
        })
        // ------------------------------------------------------------
    }
})

export const { toggleSidebar } = appSlice.actions

export default appSlice.reducer