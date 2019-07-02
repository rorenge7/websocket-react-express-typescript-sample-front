const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
require("dotenv").config();

module.exports = function buildConfig() {
  return {
    mode: "development",
    entry: path.resolve(__dirname, "src", "app.tsx"),
    output: {
      path: path.resolve(__dirname, "public"),
      publicPath: "/",
      filename: "[hash].bundle.js"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".scss"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: [/node_modules/, `${__dirname}/__tests__/**/*.ts`]
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [`${__dirname}/public/*`]
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "public", "assets")
        }
      ]),
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
      }),
      new webpack.DefinePlugin({
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: path.resolve(__dirname, "public"),
      compress: true,
      historyApiFallback: true,
      hot: true,
      port: 8080
    }
  };
};
