const path = require('path');
const {
    override,
    addDecoratorsLegacy,
    addWebpackAlias,
    addPostcssPlugins,
    fixBabelImports,
    addLessLoader
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
    addLessLoader({
        javascriptEnabled: true,//支持css文件中写入js
        modifyVars: { "@primary-color": "#1DA57A" }
    }),
    // antd
    fixBabelImports("import", {
        libraryName: "antd", style: true // change importing css to less
    })
)
