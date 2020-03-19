const path = require('path');
const {
    override,
    addDecoratorsLegacy,
    addWebpackAlias,
    addPostcssPlugins
} = require("customize-cra");

module.exports = override(
    // 支持装饰器语法
    addDecoratorsLegacy(),
    // 模块别名相关
    addWebpackAlias({
        "@src": path.resolve(__dirname, './src'),
        "@pages": path.resolve(__dirname, './src/pages'),
        "@utils": path.resolve(__dirname, './src/utils'),
        "@libs": path.resolve(__dirname, './src/libs'),
        "@components": path.resolve(__dirname, './src/components')
    }),
    // postcss px转换成rem
    addPostcssPlugins([require('postcss-px2rem')({ remUnit: 75 / 2 })]), 
)
