const webpack = require('webpack');
const configFactory = require('../config/webpack.base')('production');

const compiler = webpack(configFactory);

const statsConfig = {
  colors: true,
  modules: false,
  version: false,
  hash: false,
  timings: false,
};

compiler.run((err, stats) => {
  if (err && err.details) {
    return console.error(err.details);
  }

  if (err) {
    return console.error(err.stack || err);
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    return console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    return console.warn(info.warnings);
  }
  return console.log(stats.toJson(statsConfig));
});
