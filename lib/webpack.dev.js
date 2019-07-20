const webpack = require('webpack');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'dev',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only', // 打包阶段只有出现error时才输出出错内容
  },
  devtool: 'source-map',
};
module.exports = merge(baseConfig, devConfig);
