const path = require('path')
const htmlWebpackPlguin = require('html-webpack-plugin')
module.exports = {
    mode: "production",
    entry: {
        index: "./src/main.js",
        print: "./src/print.js"
    },
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
        // clear: true
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
            title: 'Output Management',
            template: './index.html',
            meta: {
                'viewport' : 'width=device-width, initial-scale=1, shrink-to-fit=no',
                keywords: '你的,我的,他的',
            }
        })
    ]
}