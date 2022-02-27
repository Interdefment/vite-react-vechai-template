import React from 'react';


import { VechaiProvider } from '@vechaiui/react';

import { selectIsAuthorized } from 'src/redux/ducks/auth';
import { useAppSelector } from 'src/tools/hooks/redux';
import { PublicLayout } from 'src/view/layout/Public/PublicLayout';
import { PublicRoutes } from 'src/view/routes/public';
import theme from 'src/view/themes';

import { MainLayout } from './layout/Main/MainLayout';
import { PrivateRoutes } from './routes/private';

import 'src/view/styles/index.scss';
import 'tailwindcss/tailwind.css';

export const App: React.FC = () => {
    const isAuthorized = useAppSelector(selectIsAuthorized);
    const colorScheme = useAppSelector(({ app }) => app.theme);

    if (!isAuthorized) {
        return (
            <VechaiProvider colorScheme={colorScheme} theme={theme}>
                <PublicLayout>
                    <PublicRoutes />
                </PublicLayout>
            </VechaiProvider>
        );
    }

    return (
        <VechaiProvider>
            <MainLayout>
                <PrivateRoutes />
            </MainLayout>
        </VechaiProvider>
    );
};
