const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { basePath } = require("./util");

/**
 * webpack plugin 配置
 * @param {'development'|'production'} webpackEnv webpack运行环境
 */
module.exports = (webpackEnv) => {
  const isDevelopment = webpackEnv === "development";
  const isProduction = webpackEnv === "production";
  return [
    new HtmlWebpackPlugin({
      template: basePath("public/index.html"),
    }),
    isProduction &&
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:6].css',
      chunkFilename: 'static/css/[name].[contenthash:6].chunk.css'
    })
  ].filter(Boolean);
};
