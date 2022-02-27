import React from 'react';

import {
    Icon,
    Switch,
    cx,
} from '@vechaiui/react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

import { setTheme } from 'src/redux/ducks/app';
import { useAppDispatch, useAppSelector } from 'src/tools/hooks/redux';
import { AppTheme } from 'src/view/themes';

import './ThemeSwitcher.scss';

export interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(({ app }) => app.theme);

    const checked = theme === AppTheme.DARK;

    const changeTheme = () => {
        dispatch(setTheme(checked ? AppTheme.LIGHT : AppTheme.DARK));
    };

    return (
        <div className={cx('theme-switcher', className)}>
            <Icon as={RiSunFill} className='text-primary-500' label='Light theme' />
            <Switch checked={checked} onChange={changeTheme} />
            <Icon as={RiMoonFill} className='text-primary-500' label='Dark theme' />
        </div>
    );
};
