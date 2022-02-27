import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import {
    takeLatest,
    call,
    put,
} from 'redux-saga/effects';


import { Credentials } from 'src/@types/auth';
import { login, resetPassword } from 'src/api/auth.api';
import { RootState } from 'src/redux/store';

interface AuthState {
    refreshToken: string | null;
    accessToken: string | null;
    loading: boolean,
    credentials: Credentials;
    resetingPassword: boolean;
}

interface LoginPayload {
    refresh: string;
    access: string;
}

interface ResetPasswordPayload {
    username: string;
    successSideEffect?: () => void;
    errorSideEffect?: () => void;
    finallySideEffect?: () => void;
}

const initialState: AuthState = {
    refreshToken: null,
    accessToken: null,
    loading: false,
    credentials: {
        password: '',
        username: '',
    },
    resetingPassword: false,
};

type AuthReducerType<PayloadType> = (
    state: AuthState,
    action: PayloadAction<PayloadType>
) => void;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials(state, { payload }: PayloadAction<{ field: keyof Credentials, value: string }>) {
            state.credentials[ payload.field ] = payload.value;
        },

        logout: (state) => {
            state.refreshToken = null;
            state.accessToken = null;
        },

        loginRequest: ((state) => {
            state.loading = true;
        }) as AuthReducerType<Credentials>,
        loginError: ((state) => {
            state.loading = false;
        }) as AuthReducerType<Credentials>,
        loginSuccess: (state, { payload }: PayloadAction<LoginPayload>) => {
            state.loading = false;
            state.refreshToken = payload.refresh;
            state.accessToken = payload.access;
        },

        resetPasswordRequest: ((state) => {
            state.resetingPassword = true;
        }) as AuthReducerType<ResetPasswordPayload>,
        resetPasswordError: ((state) => {
            state.resetingPassword = false;
        }) as AuthReducerType<void>,
        resetPasswordSuccess: ((state) => {
            state.resetingPassword = false;
        }) as AuthReducerType<void>,
    },
    extraReducers(builder) {
        builder.addCase(loginSuccess.type, (state) => {
            state.loading = true;
            state.credentials = initialState.credentials;
        });
    },
});

export const {
    logout,
    loginRequest,
    loginSuccess,
    loginError,
    setCredentials,
    resetPasswordError,
    resetPasswordRequest,
    resetPasswordSuccess,
} = authSlice.actions;

export default authSlice.reducer;


export const selectIsAuthorized = (state: RootState) => state.auth.refreshToken !== null;

// === Sagas ===
export function* handleLogin({ payload }: PayloadAction<Credentials>) {
    try {
        const response: { access: string; refresh: string; } = yield call(() => login(payload));
        yield put(loginSuccess(response));
    } catch (error) {
        yield put(loginError(payload));
    }
}

export function* handleResetPassword({ payload }: PayloadAction<ResetPasswordPayload>) {
    try {
        yield call(() => resetPassword(payload.username));
        yield put(resetPasswordSuccess());

        if (payload.successSideEffect) {
            payload.successSideEffect();
        }
    } catch (error) {
        yield put(resetPasswordError());

        if (payload.errorSideEffect) {
            payload.errorSideEffect();
        }
    } finally {
        if (payload.errorSideEffect) {
            payload.errorSideEffect();
        }
    }
}

export function* authSaga() {
    yield takeLatest(loginRequest.type, handleLogin);
    yield takeLatest(resetPasswordRequest.type, handleResetPassword);
}
