const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlguin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: {
        main: {
            import: './src/main.js',
            dependOn: "shared"
        },
        print: './src/print.js',
        another: {
            import: './src/another-module.js',
            dependOn: "shared"
        },
        shared: ['lodash', 'moment']
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        pathinfo: false, // 删除生成路径信息
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue/,
                use: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                include: path.resolve(__dirname, '../src/assets/img'),
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
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
                keywords: '你的,我的,他的',
            }
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map[query]', // 和devServer冲突 https://github.com/webpack/webpack/issues/9732
        }),
        new webpack.HotModuleReplacementPlugin(),
        // dllplugin
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, '.'), 
            manifest: require('../public/vendor/vendor-manifest.json')
        }),

        new VueLoaderPlugin()
    ],
}