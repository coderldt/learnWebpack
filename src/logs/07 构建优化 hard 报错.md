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

- three-loader