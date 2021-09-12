## clearWebpackPlugin
``` js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: "development",
    entry: {
        index: "./src/main.js",
        print: "./src/print.js"
    },
    output: {
        // filename: 'bundle.js',
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        // 第一种方法：
        // clean: true
    },
    plugins: [
        // 第二种方法
        new CleanWebpackPlugin()
    ]
}
```