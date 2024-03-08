import express from "express";
import cors from "cors";
import {user} from './src/router/user.js';

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", user);


app.listen(port, () => {
  console.log(`Your server is on the port "http:localhost:${8080}"`);
});
