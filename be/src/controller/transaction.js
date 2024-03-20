import { sql } from "../../config/database.js";

export const getAllTransactions = async (req, res) => {
  const { userId } = req.body;
  console.log(userId);
  try {
    const transactions = await sql`SELECT * FROM transaction WHERE user_id = ${userId}`;
    res.status(201).json(transactions);
    console.log(transactions);
  } catch (err) {
    console.error("Error fetching user transaction", err);
    res.status(400).json({ message: "Failed to fetch user transactions" });
  }
};
