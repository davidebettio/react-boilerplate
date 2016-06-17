/* eslint-disable global-require */

const addDevMiddleware = (app, webpackConfig) => {
  const path = require('path');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  });

  app.use(middleware);

  const fs = middleware.fileSystem;

  app.use('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(data.toString());
      }
    });
  });
};

module.exports = (app) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    // todo
  } else {
    const webpackConfigFile = require('../../webpack/webpack.config.dev');
    addDevMiddleware(app, webpackConfigFile);
  }

  return app;
};
