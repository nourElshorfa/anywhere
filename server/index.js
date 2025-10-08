process.on("uncaughtException" , (err)=> {
    console.log(err);
})


import express from 'express'
import { db } from './db/dbConnection.js'
import { AppError } from './src/utils/appError.js';
import { globalError } from './src/middleware/globalError.js';
import { bootstrap } from './src/bootstrap.js';
import dotenv from "dotenv";
import cors from 'cors'




dotenv.config()
const app = express()
const port = process.env.PORT || 





app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());



bootstrap(app);

app.get(/(.*)/, (req, res, next) => {
    next(new AppError(`route not found ${req.originalUrl}` , 404));
});



  app.use(globalError);


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))