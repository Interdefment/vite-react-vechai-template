import localforage from 'localforage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import appReducer from './ducks/app';
import authReducer from './ducks/auth';
import userReducer from './ducks/user';

const rootPersistConfig = {
    storage: localforage,
    key: 'root@0.1',
    whitelist: [ 'app' ],
};

const authPersistConfig = {
    storage: localforage,
    key: 'auth@0.1',
    whitelist: [ 'refreshToken' ],
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    user: userReducer,
    app: appReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
