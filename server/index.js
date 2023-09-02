require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dataRouter = require('./routes/dataRouter');
const userRouter = require("./routes/user")
const errorHandle = require("./middleware/error-handling")

const PORT = process.env.PORT ?? 5000;

const app = express();
app.use(express.json());
app.use(cors({ origin : process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://nextliebherr.netlify.app/" }));
app.use('/api', dataRouter);
app.use('/api', userRouter);
app.use(errorHandle)

const start = async () => {
  try {
    await mongoose.connect(
      process.env.DB_CONNECTION, 
      { useNewUrlParser: true }, 
      () => console.log('connected to database')
    )

    app.listen(PORT, () => console.log('server has been started on port ' + PORT));
  } catch(e) {
    console.log(e);
  }
};

start();
