const { merge } = require('webpack-merge')
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // dllplugin
        new BundleAnalyzerPlugin()
    ],
})