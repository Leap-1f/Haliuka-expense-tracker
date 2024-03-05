import {sql} from '../../config/database.js';

export const getAllUsers = async (res, req) => {
    try {
        const data = await sql`SELECT * FROM users`;
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}