import React, { Suspense } from 'react';

import {
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import { publicRoutes } from 'src/constants/routes';
import {
    Login,
    ResetPassword,
} from 'src/view/pages';

export const PublicRoutes = () => {
    return (
        <Suspense fallback={(<div>Loading...</div>)}>
            <Routes>
                <Route
                    element={<Login />}
                    path={publicRoutes.LOGIN}
                />
                <Route
                    element={<ResetPassword />}
                    path={publicRoutes.RESET_PASSWORD}
                />
                <Route
                    element={<Navigate to={publicRoutes.LOGIN} />}
                    path='/'
                />
            </Routes>
        </Suspense>
    );
};
