const path = require('path')
module.exports = {
    entry: "./src/main.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
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
            {
                test: /\.xml/,
                use: 'xml-loader'
            },
            {
                test: /\.csv/,
                use: 'csv-loader'
            },
            {
                test: /\.toml$/,
                type: 'json',
                parser: {
                    parse: require('toml').parse
                }
            },
            {
                test: /\.yaml$/,
                type: 'json',
                parser: {
                    parse: require(yamljs).parse
                }
            },
            {
                test: /\.json5$/,
                type: 'json',
                parser: {
                    parse: 'json5.parse'
                }
            },
        ]
    }
}