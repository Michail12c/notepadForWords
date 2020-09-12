const express = require('express');
const app = express();
const helmet = require('helmet');
const path = require('path');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended: true}))
app.use(helmet());

app.use('/', express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App has been started on port ${PORT}...`);
});