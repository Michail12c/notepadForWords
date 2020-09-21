const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const path = require('path');
const routes = require('./server/routes')

require('dotenv').config();

const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended: true}))
app.use(helmet());

routes(app);

app.use('/', express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

async function start() {
  try {

    await mongoose.connect(process.env.MONGO_DB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    app.listen(PORT, () => {
      console.log(`App has been started on port ${PORT}...`);
    });

  } catch (error) {
    console.log('Server error', error);
    process.exit(1);
  }
};

start();

