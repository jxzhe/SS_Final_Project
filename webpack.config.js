const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcPath = path.resolve(__dirname, 'src');
module.exports = {
    context: srcPath,
    entry: {
        index: ['babel-polyfill', 'firebase/database', 'pixi', 'p2', 'phaser', './index.js']
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [{
            test: /pixi\.js$/,
            loader: 'expose-loader',
            options: 'PIXI'
        }, {
            test: /p2\.js$/,
            loader: 'expose-loader',
            options: 'p2'
        }, {
            test: /phaser-split\.js$/,
            loader: 'expose-loader',
            options: 'Phaser'
        }, {
            test: /\.js$/,
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ],
            loader: 'babel-loader',
            options: {
                presets: ['env'],
                cacheDirectory: true
            }
        }]
    },
    resolve: {
        alias: {
            'pixi': 'phaser-ce/build/custom/pixi.js',
            'p2': 'phaser-ce/build/custom/p2.js',
            'phaser': 'phaser-ce/build/custom/phaser-split.js',
            'assets': path.resolve(srcPath, 'assets'),
            'states': path.resolve(srcPath, 'states')
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Prinny Dash',
            favicon: 'assets/image/Icon/favicon.png',
            template: 'index.html',
            hash: true
        }),
        new webpack.ProvidePlugin({
            firebase: 'firebase/app'
        })
    ],
    devServer: {
        compress: true,
        port: 8080
    },
    // devtool: 'source-map',
    // mode: 'development'
    mode: 'production'
};