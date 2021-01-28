const { basePath } = require("./util");

/**
 * webpack module 配置
 * @param {'development'|'production'} webpackEnv webpack运行环境
 */
module.exports = (webpackEnv) => {
  const isDevelopment = webpackEnv === "development";
  const isProduction = webpackEnv === "production";
  return {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: basePath("src"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          }
        ].filter(Boolean),
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: basePath("src"),
        use: [
          isDevelopment && "style-loader",
          isProduction && require("mini-css-extract-plugin").loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
            },
          },
          "sass-loader",
        ].filter(Boolean),
      },
    ],
  };
};
