import React, { Suspense } from 'react';

import {    Routes, Route } from 'react-router-dom';

import * as routes from 'src/constants/routes';
import { Home } from 'src/view/pages';

export const PrivateRoutes = () => {
    return (
        <Suspense fallback={(<div>Loading...</div>)}>
            <Routes>
                <Route
                    element={<Home />}
                    path={routes.HOME_ROUTE}
                />
                <Route
                    element={<Home />}
                    path=':id'
                />
            </Routes>
        </Suspense>
    );
};
