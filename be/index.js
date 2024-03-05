import express from "express";
import cors from "cors";
import {users} from './src/router/user.js';

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", users);


// app.get("/users", async (request, response) => {
//   const data = await sql`SELECT * FROM users`;
//   console.log(data);
//   response.send(data);
// });

// app.post("/users/createTable", async (request, response) => {
//   const table = await sql`CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     name TEXT NOT NULL,
//     email TEXT UNIQUE NOT NULL,
//     password TEXT,
//     avatar_img VARCHAR(255),
//     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     currency_type TEXT DEFAULT 'MNT'
// );
// `;
//   response.send(table)
// })

// app.delete("/users/dropTable", async (request, response) => {
//   const dropTable = await sql`DROP TABLE users`;
// })


app.listen(port, () => {
  console.log(`Your server is on the port "http:localhost:${8080}"`);
});
