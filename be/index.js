import express from "express";
import cors from "cors";
import fs from "fs";

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
    response.send("Testing");
});

app.listen(port, () => {
    console.log(`Your server is on on the port "http:localhost:${8080}"`);
  });