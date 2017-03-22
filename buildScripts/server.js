import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import config from '../webpack.config.dev'; // exporting all configurations from webpack.config.dev.js

const port = 3000;
const app = express();
const compiler = webpack(config);

// setting up the middleware to be use by express
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// for all incoming requests serve up the index.html page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// have the express server start listening on the set port
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`); // this will open up the browser to this location
        //console.log(`http://localhost:${port}`);
    }
});