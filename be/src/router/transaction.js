import {Router} from 'express';
import {getAllTransactions} from '../controller/transaction.js';

const transaction = Router();

transaction.route("/transaction").post(getAllTransactions);
export {transaction};