const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const authRouter = require('./src/routes/api/authRouter');
const questionsRouter = require('./src/routes/api/questionsRouter');
const { errorHandler } = require('./src/helpers/apiHelpers');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/questions', questionsRouter);

app.use(errorHandler);

module.exports = app;