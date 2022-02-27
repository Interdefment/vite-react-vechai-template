import { all } from 'redux-saga/effects';

import { authSaga } from 'src/redux/ducks/auth';
import { userSaga } from 'src/redux/ducks/user';

const rootSaga = function* () {
    yield all([ authSaga(), userSaga() ]);
};

export default rootSaga;
