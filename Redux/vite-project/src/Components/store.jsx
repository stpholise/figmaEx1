import { configureStore, createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
    name: 'myReduxSlice',
    initialState: {
       
        todoContent : [
            {title: 'Learn React', completed: false},
            {title: 'Learn Redux', completed: false},
            {title: 'Learn Redux Toolkit', completed: false},
        ],
        newTodo: {title: '', completed: false}, 
    },
    reducers: {
        
        makeNewTodo: (state, action ) => {
            state.newTodo.title = action.payload
            console.log({'title':action.payload})
        },
        todoCheckedContent: (state, action) => {
             state.todoContent = state.todoContent.map((todo, idx) => 
                idx === action.payload.index
                    ? {...todo, completed: action.payload.checked}
                    : todo
                    
             )
        },
        addNewTodo: ( state, action ) => {
            state.todoContent = [...state.todoContent, {title: action.payload, checked: false}]
            state.newTodo.title = ''
            console.log(state.todoContent)
        }

    }
})

export const { increment, makeNewTodo, addNewTodo, todoCheckedContent }  = mySlice.actions;//#exporting the action


const store = configureStore({
    reducer : mySlice.reducer,
})

export default store;
