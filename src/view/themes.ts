import {
    ColorScheme,
    VechaiTheme,
    colors,
    defaultTheme,
} from '@vechaiui/react';

export enum AppTheme {
    LIGHT = 'LIGHT',
    DARK = 'DARK',
}

export const light: ColorScheme = {
    id: 'light',
    type: 'light',
    colors: {
        bg: {
            base: 'white',
            fill: colors.gray['100'],
        },
        text: {
            foreground: colors.gray['900'],
            muted: colors.gray['700'],
        },
        primary: colors.violet,
        neutral: colors.gray,
        andromeda: colors.pink,
    },
};

export const dark: ColorScheme = {
    id: 'dark',
    type: 'dark',
    colors: {
        bg: {
            base: colors.blueGray['800'],
            fill: colors.blueGray['900'],
        },
        text: {
            foreground: colors.blueGray['100'],
            muted: colors.blueGray['300'],
        },
        primary: colors.violet,
        neutral: colors.blueGray,
        andromeda: colors.emerald,
    },
};

const theme: VechaiTheme = {
    ...defaultTheme,
    cursor: 'pointer',
    colorSchemes: {
        [AppTheme.LIGHT]: light,
        [AppTheme.DARK]: dark,
    },
};

export default theme;
