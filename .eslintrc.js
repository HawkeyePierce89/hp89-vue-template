module.exports = {
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 2017,
        sourceType: "module"
    },
    extends: [
        'plugin:vue/recommended',
        "airbnb-base",
    ],
    rules: {
        "vue/html-indent": ["error", 4],
        'no-new': 0,
        "indent": ["error", 4],
        "max-len": 0
    }
};
