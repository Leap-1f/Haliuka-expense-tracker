import express from "express";
import cors from "cors";
import { user } from "./src/router/user.js";
import { category } from "./src/router/category.js";

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", user, category);

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.listen(port, () => {
  console.log(`Your server is on the port "http:localhost:${8080}"`);
});
