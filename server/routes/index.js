const authRouter = require('./auth');
const lessonRouter = require('./lesson');
const userRouter = require('./user');

module.exports = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/lesson', lessonRouter);
  app.use('/api/user', userRouter);
};