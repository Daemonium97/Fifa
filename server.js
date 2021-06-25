require('dotenv').config();

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const url = process.env.DATABASE_LINK

mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .catch(err => console.log(err));

const db = mongoose.connection;

db.once("open", _ => {
    console.log("Database is connected to:", url);
});
db.on("error", err => {
    console.log(err);
  });

app.use(express.json())


const playersRouter = require('./routes/players')
app.use('/players', playersRouter)




app.listen(3000, () => console.log('Server Started'))