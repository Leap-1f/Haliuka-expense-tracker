import { sql } from "../../config/database.js";
import bcrypt from "bcrypt";

export const addNewUser = async (req, res) => {
  const newUser = req.body;
  const salt = bcrypt.genSaltSync(1);
  const hashedPassword = await bcrypt.hash(newUser.password, salt);
  try {
    const result =
      await sql`INSERT INTO users(name, email, password, currency_type, balance) VALUES(${newUser.name}, ${newUser.email}, ${hashedPassword}, ${newUser.currency_type}, ${newUser.amount}) RETURNING *`;
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Failed to add new user" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await sql`SELECT * FROM users WHERE email = ${email}`;
    if (data.length === 0) {
      return res.status(404).send("User not found");
    }
    const isValid = await bcrypt.compare(password, data[0].password);
    console.log(data[0].id);
    if (isValid) {
      res.status(200).send({
        sucess: true,
        userId: data[0].id });
    } else {
      res.status(401).send("Invalid email or password");
    }
  } catch (error) {
    console.error("Backend error:", error);
    res.status(500).json({ error: "server error" });
  }
};
