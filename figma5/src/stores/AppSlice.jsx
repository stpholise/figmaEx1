import { createSlice }  from '@reduxjs/toolkit'

const AppSlice= createSlice({ 
    name: 'webSlice',
    initialState: {
        mainMenuState: false,
        
    },
    reducers: {
        toggleMainMenu: (state) => {
            state.mainMenuState = !state.mainMenuState;
        },
        closeMainMenu: (state) => {
            state.mainMenuState = false
        }
    }
})

export const  { toggleMainMenu, closeMainMenu } = AppSlice.actions;

const appStore = configureStore({
    reducer:
})