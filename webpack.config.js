module.exports = {
  entry: __dirname + '/src/index.js',
  module: {
    rules: [
      {
        test: [/\.(js|jsx)$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
   resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
};