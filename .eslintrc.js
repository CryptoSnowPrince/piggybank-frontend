module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:neverthrow/recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: ['./tsconfig.json'],
        createDefaultProgram: true,
        tsconfigRootDir: __dirname,
    },
    env: {
        browser: true,
        jest: true,
        node: true,
    },
    rules: {
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'import/prefer-default-export': 'off',
        'import/no-cycle': 'off',
        'neverthrow/must-use-result': 'off',
        'no-console': 'off',
        'no-restricted-exports': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'react/jsx-props-no-spreading': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'class-methods-use-this': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'no-await-in-loop': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
