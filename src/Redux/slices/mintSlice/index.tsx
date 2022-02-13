import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IModalState {
    modalOpen: any
};

const initialState = { modalOpen: false } as IModalState;

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalOpen(state, action: PayloadAction<boolean>) {
            state.modalOpen = action.payload;
        },
    },
})

export const { setModalOpen } = modalSlice.actions;
export default modalSlice.reducer;