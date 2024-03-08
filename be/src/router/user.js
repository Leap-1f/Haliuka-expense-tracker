import {Router} from 'express';
import {addNewUser} from '../controller/user.js';

const user = Router();

user.route("/").post(addNewUser);

export {user};