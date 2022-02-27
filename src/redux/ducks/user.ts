import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import {
    takeLatest,
    call,
    put,
} from 'redux-saga/effects';

import { UserProfile } from 'src/@types/user';
import { fetchProfile } from 'src/api/user.api';
import { RootState } from 'src/redux/store';

import { loginSuccess, logout } from './auth';

interface UserState {
    profile: UserProfile;
    loading: boolean,
}

const initialState: UserState = {
    profile: {
        username: '',
    },
    loading: false,
};

type UserReducerType<PayloadType> = (
    state: UserState,
    action: PayloadAction<PayloadType>
) => void;

const fetchProfileErrorReducer: UserReducerType<void> = (state) => {
    state.loading = false;
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchProfileError: fetchProfileErrorReducer,
        fetchProfileSuccess(state, { payload }: PayloadAction<UserProfile>) {
            state.profile = payload;
            state.loading = false;
        },
    },
    extraReducers(builder) {
        builder.addCase(logout.type, () => {
            return initialState;
        });
    },
});

export const {
    fetchProfileSuccess,
    fetchProfileError,
} = userSlice.actions;

export default userSlice.reducer;


export const selectIsAuthorized = (state: RootState) => state.auth.refreshToken !== null;

// === Sagas ===
export function* handleAuthLogin() {
    try {
        const response: UserProfile = yield call(() => fetchProfile());
        yield put(fetchProfileSuccess(response));
    } catch (error) {
        yield put(fetchProfileError());
    }
}

export function* userSaga() {
    yield takeLatest(loginSuccess.type, handleAuthLogin);
}
