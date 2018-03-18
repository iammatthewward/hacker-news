const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/client/index.html'
        }),
        new ExtractTextPlugin('styles.css')
    ],
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src/client/components'),
            Helpers: path.resolve(__dirname, 'src/client/helpers'),
            Ui: path.resolve(__dirname, 'src/client/ui')
        }
    }
};
