import { Request, Response, Router } from "express";
import { getItem, getItems, postItem, updateItem, deleteItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router = Router()
/* 
+ http://localhost:3002/item [Get]
 */

router.get('/', getItems);
router.get('/:id',logMiddleware, getItem);
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);




export { router};