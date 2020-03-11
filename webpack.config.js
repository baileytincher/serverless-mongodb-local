const path = require('path');

module.exports = {
  entry: './src/serverless-mongodb-local.js',
  output: {
    path: path.resolve('lib'),
    filename: 'serverless-mongo-local.js',
    libraryTarget: 'commonjs2',
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/')
    }
  }
};
