import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../slices/themeSlice/'
import modalReducer from '../slices/mintSlice'


export default configureStore({
    reducer: {
        theme: themeReducer,
        modal: modalReducer
    }
})