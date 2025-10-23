const {Configuration} = require('webpack');
const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
/**
 * @type {Configuration}
 */
const config = {
    mode: 'development',
    entry: './src/main.ts',//入口文件
    output: {//出口文件
        path: path.resolve(__dirname, 'dist'),//生成目录
        filename: 'bundle.js', //打包之后的文件
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html'//模板文件
        }),
        new VueLoaderPlugin(),
    ],//webpack的插件都是class都需要new
    module: { 
        rules: [
            {
                test: /\.ts$/,//匹配文件
                use: 'ts-loader',//使用ts-loader,处理ts文件
            },
            {
                test:/\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
}

module.exports = config;