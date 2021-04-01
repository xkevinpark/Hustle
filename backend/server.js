const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
// have environment variables in .env file
require('dotenv').config({path: 'backend/.env' })

const app = express();
const PORT = process.env.PORT || 3000;

// cors middleware 
app.use(cors());
// for parsing json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// serve up html file
app.use(express.static(path.resolve(__dirname, './crud-app/dist/index.html')));

// database URI
const uri = process.env.ATLAS_URI;
// connect to mongo database by passing in uri, flags: {useNewUrlParser: parses mongo strings, useCreateIndex: deal with mongo deprecating index function}
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
})

// requiring router files
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// use routers
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


// start server listening
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});