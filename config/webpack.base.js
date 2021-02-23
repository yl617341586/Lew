/*
 * @author: Lew
 * @e-mail: yl617341586@163.com
 * @date: 2021/02/03 22:33:10
 * @description: webpack 通用配置文件
 */

const { basePath } = require('./util');
const plugins = require('./webpack.plugins');
const modules = require('./webpack.modules');
const optimizations = require('./webpack.optimizations');

/**
 * webpack基础配置
 * @param {'development'|'production'} webpackEnv webpack运行环境
 */
module.exports = (webpackEnv) => {
  const isDevelopment = webpackEnv === 'development';
  const isProduction = webpackEnv === 'production';
  return {
    mode: isDevelopment ? 'development' : 'development',
    resolve: {
      alias: {
        '@': basePath('src/'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    },
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: basePath('src'),
    output: {
      path: isProduction ? basePath('build') : undefined,
      filename: isProduction ? 'static/js/[name].[contenthash:6].js' : 'bundle.js',
      chunkFilename: isProduction ? 'static/js/[name].[contenthash:6].chunk.js' : '[name].chunk.js',
    },
    module: modules(webpackEnv),
    plugins: plugins(webpackEnv),
    optimization: optimizations(webpackEnv),
  };
};
