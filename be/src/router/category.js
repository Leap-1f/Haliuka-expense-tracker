import {Router} from 'express';
import {getAllCategories} from '../controller/category.js';

const category = Router();

category.route("/category").get(getAllCategories);
export {category};