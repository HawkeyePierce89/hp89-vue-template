module.exports = (env, {mode}) => {
    return require(`./webpack.${mode}.js`);
};
