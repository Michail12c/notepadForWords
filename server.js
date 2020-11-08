const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const path = require('path');
const routes = require('./server/routes');
const passport = require('passport');
const cors = require('cors');

const List = require('./server/models/List');
//const listDB = require('./server/db/data.json')

require('dotenv').config();

const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({extended:true}));
app.use(express.json({extended: true}))
app.use(helmet());


app.use(cors());
app.use(passport.initialize());
require('./server/services/passport')(passport);

routes(app);

app.use('/', express.static(path.join(__dirname, 'client', 'build')));

/* new List({name: 'Base list', listWords: listDB }).save();
console.log(listDB) */



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

