const exrpress = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');
const app = exrpress();

app.use(cors());
app.use(exrpress.json());
app.use(routes);
app.use(errors());

module.exports = app;