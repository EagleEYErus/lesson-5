const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');

const index = require('./routes/index');
const add = require('./routes/add');
const edit = require('./routes/edit');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));

app.use('/', index);
app.use('/add', add);
app.use('/edit', edit);

http.createServer(app).listen(3000, () => {
  console.log(`Server running at port 3000`);
});

module.exports = app;
