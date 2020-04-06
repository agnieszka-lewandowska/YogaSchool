const path = require("path");
const entryFile = "YogaSchool.js";
const isDevelopment = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: `./js/${entryFile}`,
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    publicPath: "/build/",
    compress: true,
    port: 3001,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
}