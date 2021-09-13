## 构建优化
- loader 指定对于的文件夹
``` js
    module.exports = {
        modules: {
            rules: [
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
        }
    }
```
- dllplugin
``` js
    // 第一方面
    // config/webpack.dll.conf.js 生成vendor-manifest.json文件的

    // 第二方面：webpack.config.js 引入生成文件
    plugins: [
        // dllplugin
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, '..'), 
            manifest: require('../public/vendor/vendor-manifest.json')
        }),
        // new BundleAnalyzerPlugin()
    ],

    // 第三方面 package.json
    "dev": "webpack --config config/webpack.config.js",
    "dll": "webpack --config config/webpack.dll.conf.js"
```
- dll替代品 hard-source-webpack-plugin
> 报错 TypeError: Cannot read properties of undefined (reading 'tap')， 待解决
- 结果 webpack5没有兼容，可能内置了，通过降低webpack@4.22.2版本解决，需要重新写一些配置，例如html-webpack-plugin 插件，详情见hard-source ... 分支

- three-loader