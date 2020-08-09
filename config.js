const env = require('./env/env.js');

const server = {
    port: env.portNumber
  };

  const urls = {
    homeRoot: env.homeRoot
  }

let connectionStrings = {
      data : env.connesctionStrings
  };

  module.exports = {
    server: server,
    connectionStrings: connectionStrings,
    urls: urls
};