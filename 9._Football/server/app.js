//#### IMPORTS ####
import express, { json } from "express";


const app = express();
const PORT = process.env.PORT || 3000;

// #### MIDDLEWARE #### 
// import cors from "cors";
// app.use(cors());
app.use(express.json())

import path from "path";
app.use(express.static(path.resolve("../client/public")));

import playersRouter from "./routers/playersRouter.js";
  app.use(playersRouter);


app.listen(PORT, () => {
    console.log("Server is now running", PORT);
})