const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// have environment variables in .env file
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// cors middleware 
app.use(cors());
// for parsing json
app.use(express.json());

// database URI
const uri = process.env.ATLAS_URI;
// connect to mongo database by passing in uri, flags: {useNewUrlParser: parses mongo strings, useCreateIndex: deal with mongo deprecating index function}
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true  }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// start server listening
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});