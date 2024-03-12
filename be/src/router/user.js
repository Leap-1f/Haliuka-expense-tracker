import {Router} from 'express';
import {getOneUser, addNewUser} from '../controller/user.js';

const user = Router();

user.route("/").get(getOneUser).post(addNewUser);

export {user};