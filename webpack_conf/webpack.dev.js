const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
    mode: "development",
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "style-loader", 
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    }
  });
