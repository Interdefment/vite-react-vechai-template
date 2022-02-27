import React from 'react';

import { Button } from '@vechaiui/button';
import { Input, Link } from '@vechaiui/react';
import { Link as RouterLink } from 'react-router-dom';

import { publicRoutes } from 'src/constants/routes';
import { loginRequest, setCredentials } from 'src/redux/ducks/auth';
import { useAppDispatch, useAppSelector } from 'src/tools/hooks/redux';
import { ErrorBoundary } from 'src/view/components/ErrorBoundary/ErrorBoundary';

const LoginPageComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const { credentials, loading } = useAppSelector((state) => ({
        credentials: state.auth.credentials,
        loading: state.auth.loading,
    }));

    const handleChange = (field: keyof typeof credentials) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(setCredentials({
                field,
                value: event.target.value,
            }));
        };
    };

    const onLogin = () => {
        dispatch(loginRequest(credentials));
    };

    return (
        <div className='w-96 flex flex-col'>
            <Input
                className='mb-5'
                disabled={loading}
                placeholder='Введите ваш логин'
                value={credentials.username}
                onChange={handleChange('username')}
            />
            <Input
                className='mb-5'
                disabled={loading}
                placeholder='Введите ваш пароль'
                type='password'
                value={credentials.password}
                onChange={handleChange('password')}
            />
            <div className='flex flex-row items-center'>
                <Button
                    color='primary'
                    disabled={loading}
                    variant='solid'
                    onClick={onLogin}>
                    Войти
                </Button>
                <Link
                    as={RouterLink}
                    className='ml-5 flex-1 whitespace-nowrap'
                    to={publicRoutes.RESET_PASSWORD}>
                    Забыли пароль
                </Link>
            </div>
        </div>
    );
};

const LoginPage: React.FC = () => (
    <ErrorBoundary>
        <LoginPageComponent />
    </ErrorBoundary>
);

LoginPage.displayName = 'LoginPage';

export default LoginPage;
