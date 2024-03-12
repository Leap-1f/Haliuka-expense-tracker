import { sql } from "../../config/database.js";

export const getOneUser = async (req, res) => {
  try {
    const result = await sql `SELECT * FROM users`;
  } catch (err) {
    console.log(err);
  }
};

export const addNewUser = async (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  try {
    const result =
      await sql`INSERT INTO users(name, email, password) VALUES(${newUser.name}, ${newUser.email}, ${newUser.password}) RETURNING *`;
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Failed to add new user" });
  }
};
