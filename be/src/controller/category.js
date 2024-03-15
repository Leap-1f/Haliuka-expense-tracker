import { sql } from "../../config/database.js";

export const getAllCategories = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM category`;
    console.log(data);
    if (result && result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "No categories found" });
    }
  } catch (error) {
    console.error("Error retrieving categories:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

