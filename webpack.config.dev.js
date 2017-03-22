import webpack from 'webpack'; // importing the module bundler
import path from 'path'; // path comes from NodeJS

// for more info on the webpack configuration, go to https://webpack.github.io/docs/configuration.html
export default {
  // developer tool for debugging
  devtool: 'inline-source-map', // A SourceMap is added as DataUrl to the JavaScript file
  // entry point for our application
  entry: [
    'webpack-hot-middleware/client', // the Hot Module Replacement for express
    path.resolve(__dirname, 'src/index.js') // index.js is the entry point to our application
  ],
  // what compile method should webpack aim for
  target: 'web', // this is the default
  // options for the output file
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  // This is not needed. this would be used for webpack-dev-server.
  // devServer: {
  //   contentBase: path.resolve(__dirname, 'src')
  // },
  // adding addtional plugins to the compiler
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  // options affecting the nomal modules
  module: {
    // loaders allow for preprocessing of files
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] }, // preprocessing the .js files with babel-loader
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] } // preprocessing css files
    ]
  }
};