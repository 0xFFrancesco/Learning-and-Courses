module.exports = {
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
    rules: {
        'prefer-const': 'warn',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Node.js builtins. You could also generate this regex if you use a `.js` config.
                    // For example: `^(${require('module').builtinModules.join('|')})(/|$)`
                    [
                        '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
                    ],
                    // Packages. `react`, next related packages come first.
                    ['^react', '^next', '^@?\\w'],
                    // Internal packages.
                    ['^(@lib|@ui|utils|config|vendored-lib)(/.*|$)'],
                    // Side effect imports.
                    ['^\\u0000'],
                    // Parent imports. Put `..` last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    // It's similar to styles, so add twin.macro at last position before css modules
                    ['^twin.macro'],
                    // Style imports.
                    ['^.+\\.s?css$'],
                ],
            },
        ],
        '@next/next/no-document-import-in-page': 'off',
        'react/display-name': 'off',
        // note you must disable the base rule as it can report incorrect errors
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }], // Includes .prettierrc.js rules
    },
};
