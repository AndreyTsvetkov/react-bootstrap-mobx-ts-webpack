var path = require('path');
var webpack = require('webpack');

//var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
//var commonsChunk = new CommonsChunkPlugin('shared', 'shared.js', /*minContains=*/2 /*, chunks=*/ /*['default', 'another']*/);

//var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var extractCss = new ExtractTextPlugin('[name].css');


var sourceFolder = path.join(__dirname, 'client');
var outAssetsFolder = path.join(__dirname, '../dist');

var nodeModulesFolder = path.resolve(__dirname, 'node_modules');


module.exports = {
  //devtool: 'eval-source-map',
  context: sourceFolder,
  entry: {
    index: './index'
  },
  output: {
    path: outAssetsFolder,
    filename: '[name].js',
    chunkFilename: 'chunk.[id].js'
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        //loaders: ['react-hot', 'ts'],
        loader: 'ts',
        include: sourceFolder
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        //loader: extractCss.extract(['css']),
      }, 
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less'],
        //loader: extractCss.extract(['css','less']),
        //loaders: ['react-hot', 'style', 'css', 'less'],
        include: sourceFolder
      }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({
    //  compress: { warnings: false },
    //  output: { comments: false },
    //}), 
    //extractCss,
    //commonsChunk, 
    //new webpack.HotModuleReplacementPlugin()
  ]
};
