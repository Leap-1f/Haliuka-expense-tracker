import { sql } from "../../config/database.js";

export const getAllUsers = async (req, res) => {
  console.log("ajillaa");
  try {
    const data = await sql`SELECT * FROM users`;
    res.send(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const addNewUser = async (req, res) => {
  const newUser = req.params;
  console.log(newUser);
  try {
    const result =
      await sql`INSERT INTO users(name, email, password) VALUES(${newUser.name}, ${newUser.email}, ${newUser.password}) RETURNING *`;
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add new user" });
  }
};
