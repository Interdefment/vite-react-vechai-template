import React from 'react';

import { Button } from '@vechaiui/react';

import { logout } from 'src/redux/ducks/auth';
import { useAppDispatch } from 'src/tools/hooks/redux';
import { ErrorBoundary } from 'src/view/components/ErrorBoundary/ErrorBoundary';

const HomePageComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <div className='px-10 py-5'>
            <Button
                color='danger'
                variant='solid'
                onClick={onLogout}>
                Log out
            </Button>
        </div>
    );
};

const HomePage: React.FC = () => (
    <ErrorBoundary>
        <HomePageComponent />
    </ErrorBoundary>
);

export default HomePage;
