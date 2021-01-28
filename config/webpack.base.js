const { basePath } = require("../scripts/util");
const plugins = require("./webpack.plugins");
const modules = require("./webpack.modules");
/**
 * webpack基础配置
 * @param {'development'|'production'} webpackEnv webpack运行环境
 */
module.exports = (webpackEnv) => {
  const isDevelopment = webpackEnv === "development";
  const isProduction = webpackEnv === "production";
  return {
    mode: isDevelopment
      ? "development"
      : isProduction
      ? "production"
      : "development",
    resolve: {
      alias: {
        "@": basePath("src"),
      },
      extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"],
    },
    entry: basePath("src/index.js"),
    output: {
      path: isProduction ? basePath("build") : undefined,
      publicPath: "/",
      filename: isProduction ? "[name].[contenthash:6].js" : "bundle.js",
    },
    module: modules(webpackEnv),
    plugins: plugins(webpackEnv),
  };
};
