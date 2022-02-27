import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

import { AppTheme } from 'src/view/themes';

interface AppState {
    theme: AppTheme;
}

const initialState: AppState = {
    theme: AppTheme.LIGHT,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTheme: (state, { payload }: PayloadAction<AppTheme>) => {
            state.theme = payload;
        },
    },
});

export const { setTheme } = appSlice.actions;

export default appSlice.reducer;
