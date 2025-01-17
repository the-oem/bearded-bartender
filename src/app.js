const path = require('path');
const express = require('express');
const cors = require('express-cors');
const bodyParser = require('body-parser');

const port = (process.env.PORT || 3000);
const app = express();
const router = require('./router');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (app.get('env') === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
} else {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {},
    });
  });
}

app.use('/assets', express.static(path.join(__dirname, '../app/assets')));

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, '/../index.html')); });

app.use('/api', router);
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '/../index.html')));

app.listen(port);

console.log(`Listening at http://www.thebeardedbartender.com:${port}`);
