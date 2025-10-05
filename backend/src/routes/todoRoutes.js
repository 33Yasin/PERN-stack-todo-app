import { Router } from "express";
import controller from "../controllers/todoController.js";

const router = Router();

router.post("/", controller.createTodo);
router.get("/", controller.getTodos);
router.put("/:id", controller.updateTodo);
router.delete("/:id", controller.deleteTodo);

export default router;