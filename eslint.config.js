import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import pluginReact from 'eslint-plugin-react'
import { fixupConfigRules } from '@eslint/compat'

export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    { files: ['**/*.jsx'], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    ...fixupConfigRules(pluginReactConfig),
    rules,
    {
        'react/react-in-jsx-scope': 'off',
    },
]
