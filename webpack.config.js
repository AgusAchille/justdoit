const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.js',
    },
    //mode: 'development',
    mode: 'production', //Comment source maps too
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    //devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'docs'),
        port: 3200,
        open: true
    }
};