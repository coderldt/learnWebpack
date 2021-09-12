const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlguin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: "development",
    entry: {
        index: "./src/main.js",
        print: "./src/print.js"
    },
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true
    },
    devtool: 'inline-source-map', // 简单开启source-amp，可以使用SourceMapDevToolPlugin更细致的配置
    devServer: {
        static: './dist',
        compress: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: '2048'
                    }
                }
            },
        ]
    },
    plugins: [
        new htmlWebpackPlguin({
            title: 'development',
            template: './index.html',
            meta: {
                'viewport' : 'width=device-width, initial-scale=1, shrink-to-fit=no',
                keywords: '你的,我的,他的',
            }
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map[query]', // 和devServer冲突 https://github.com/webpack/webpack/issues/9732
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
}