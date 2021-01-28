const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const configFactory = require("../config/webpack.base")("development");
const serverConfig = require("../config/webpack.devserver");

const server = new WebpackDevServer(webpack(configFactory), serverConfig);

server.listen(3001, '0.0.0.0')