const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlguin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: "development",
    entry: {
        index: {
            import: './src/main.js',
            dependOn: "shared"
        },
        print: "./src/print.js",
        another: {
            import: "./src/another-module.js",
            dependOn: "shared"
        },
        shared: ['lodash', 'moment']
    },
    // optimization: {
    //     moduleIds: 'deterministic', // 官方说只会变更修改的文件，实测都一样
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all'
    //             }
    //         }
    //     },
    //     runtimeChunk: 'single', // 提取单独chunk 
    // },
    output: {
        // filename: 'bundle.js',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        pathinfo: false, // 删除生成路径信息
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
        new CleanWebpackPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // dllplugin
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, '.'), 
            manifest: require('../public/vendor/vendor-manifest.json')
        }),
        // new BundleAnalyzerPlugin()

        new VueLoaderPlugin()
    ],
}