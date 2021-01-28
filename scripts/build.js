const webpack = require("webpack");
const configFactory = require("../config/webpack.base")("production");
const compiler = webpack(configFactory);

compiler.run((err, stats) => console.log(stats));
