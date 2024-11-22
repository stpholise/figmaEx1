import { configureStore, createSlice} from '@reduxjs/toolkit'


const appSlice = createSlice({
    name: 'todo', 
    initialState: {
        todoContent : [
            {title: 'Learn React', completed: false},
            {title: 'Learn Redux', completed: false},
            {title: 'Learn Redux Toolkit', completed: false},
        ],
        newTodo: {title: '', completed: false}, 
    },
    reducers: {
        
    }
})


const store = configureStore({
    reducer: appSlice.reducer
})

export default store;
