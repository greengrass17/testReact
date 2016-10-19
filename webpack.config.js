module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'scripts.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss|.sass$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.js|.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
