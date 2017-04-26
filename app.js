const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  db = require('./config/db.js'),
  env = require('./config/env'),
  router = require('./routes/index');

const app = express();
const PORT = env.PORT;

app.use(bodyParser.json());
app.use(morgan('combined'));

router(app, db);

//drop and resync with { force: true }
db.sequelize.sync({force: true}).then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port:', PORT);
  });
});