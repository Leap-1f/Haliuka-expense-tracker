import {Router} from 'express';
import {getAllUsers, addNewUser} from '../controller/user.js';

const users = Router();

users.route("/").get(getAllUsers).post(addNewUser);

export {users};