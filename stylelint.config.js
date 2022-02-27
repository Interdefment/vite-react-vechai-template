module.exports = {
    extends: [ 'stylelint-config-standard-scss' ],
    'plugins': [
        'stylelint-selector-bem-pattern',
    ],
    rules: {
        'string-quotes': [ 'single' ],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,
        'selector-class-pattern': null,
        'indentation': 4,
        'plugin/selector-bem-pattern': {
            'componentName': '[A-Z]+',
            'componentSelectors': {
                'initial': '^\\.{componentName}(?:-[a-z]+)?$',
                'combined': '^\\.combined-{componentName}-[a-z]+$',
            },
            'utilitySelectors': '^\\.util-[a-z]+$',
        },
    },
};
