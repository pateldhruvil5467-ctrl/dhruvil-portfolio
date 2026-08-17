import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    {
        ignores: ["dist", "node_modules"],
    },

    js.configs.recommended,

    react.configs.flat.recommended,

    {
        files: ["**/*.{js,jsx}"],

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",

            globals: {
                ...globals.browser,
                ...globals.node,
            },

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },

        settings: {
            react: {
                version: "detect",
            },
        },

        rules: {
            /*
             * React 17+ uses the automatic JSX transform.
             * React does not need to be imported just for JSX.
             */
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",

            "react/prop-types": "off",
            "react/no-unescaped-entities": "off",

            /*
             * React Hooks
             */
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            /*
             * Vite / React Fast Refresh
             */
            "react-refresh/only-export-components": [
                "warn",
                {
                    allowConstantExport: true,
                },
            ],
        },
    },
];