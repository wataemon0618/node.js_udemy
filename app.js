const PORT = process.env.PORT;
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const app = express();

// Express settings
app.set('view engine', 'ejs');
app.disable('x-powered-by');

//Static resource routing
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/public', express.static(path.join(__dirname, '/public')));

// Dynamic resource routing
app.use('/', require('./routes/index'));
// const PORT = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// app.get('/hoge', (req, res) => {
//   res.send('hogehge!');
// });
// app.get('/ab?cd', (req, res) => {
//   res.send('abcd!');
// });

// Execute web application
app.listen(PORT, () => {
  console.log(`Application listening at ${PORT}`);
});
