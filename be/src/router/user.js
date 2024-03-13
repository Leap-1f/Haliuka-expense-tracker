import {Router} from 'express';
import {getOneUser, addNewUser, loginUser} from '../controller/user.js';

const user = Router();

user.route("/signup").post(addNewUser);
user.route("/login").get(getOneUser).post(loginUser);
export {user};