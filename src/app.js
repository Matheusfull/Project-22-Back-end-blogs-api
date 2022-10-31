const express = require('express');
const loginRouter = require('./routes/login.router');
const userRouter = require('./routes/user.router');

const { validateUser } = require('./middlewares/userValidate');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', validateUser, userRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
