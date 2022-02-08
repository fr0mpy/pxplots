import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../slices/themeSlice/'
import mintReducer from '../slices/mintSlice'


export default configureStore({
    reducer: {
        theme: themeReducer,
        modal: mintReducer
    }
})