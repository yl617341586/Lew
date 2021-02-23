/*
 * @author: Lew
 * @e-mail: yl617341586@163.com
 * @date: 2021/02/03 22:34:43
 * @description: webpack module 配置
 */

const MiniCssExtractPluginLoader = require('mini-css-extract-plugin').loader;
const autoprefixer = require('autoprefixer');
const { basePath } = require('./util');

/**
 * webpack module 配置
 * @param {'development'|'production'} webpackEnv webpack运行环境
 */
module.exports = (webpackEnv) => {
  const isDevelopment = webpackEnv === 'development';
  const isProduction = webpackEnv === 'production';
  return {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
                '@babel/preset-typescript',
              ],
            },
          },
          'ts-loader',
          'eslint-loader',
        ].filter(Boolean),
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: basePath('src'),
        use: [
          isDevelopment && 'style-loader',
          isProduction && MiniCssExtractPluginLoader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          'sass-loader',
        ].filter(Boolean),
      },
    ],
  };
};
