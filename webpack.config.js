var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        bundle: './src/index' //, 
            //test: './tests/test'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'www'),
        filename: '[name].js'
    },
    externals: {
        react: 'React',
        'react-bootstrap': 'ReactBootstrap',
        'react-dom': 'ReactDOM'
    },
    module: {
        loaders: [{
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false },
        }),
        //extractCss,
        //commonsChunk, 
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{
                from: path.join(__dirname, 'src', 'index.html'),
                to: path.join(__dirname, 'www', 'index.html')
            },
            {
                from: path.join(__dirname, 'node_modules', 'react', 'dist', 'react.min.js'),
                to: path.join(__dirname, 'www', 'lib', 'react.js')
            },
            {
                from: path.join(__dirname, 'node_modules', 'react-dom', 'dist', 'react-dom.min.js'),
                to: path.join(__dirname, 'www', 'lib', 'react-dom.js')
            },
            {
                from: path.join(__dirname, 'node_modules', 'react-bootstrap', 'dist', 'react-bootstrap.min.js'),
                to: path.join(__dirname, 'www', 'lib', 'react-bootstrap.js')
            }
        ])
    ]
};