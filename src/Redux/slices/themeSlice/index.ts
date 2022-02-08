import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Theme } from '../../../enums/themes';

export interface IThemeState {
    theme: any
}

const initialState = { theme: Theme.Light } as IThemeState

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<string>) {
            state.theme = action.payload
        },
    },
})

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;