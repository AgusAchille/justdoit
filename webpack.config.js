const path = require('path');
const [dev, prod] = ['development', 'production'];

const mode = prod

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.js',
    },
    mode: mode,
    //mode: 'production', //Comment source maps too
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
    devtool: mode==='development' && 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'docs'),
        port: 3200,
        open: true
    }
};