// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.ts',
        './src/**/*.tsx',
        './src/**/*.scss',
        './node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: { extend: { colors: { danger: colors.red }}},
    variants: { extend: {}},
    plugins: [
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('@tailwindcss/forms'),
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('@vechaiui/core')({ colors: [ 'danger' ]}),
    ],
};
