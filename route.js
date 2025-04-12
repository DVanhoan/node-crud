import { Router } from 'express';

import { createTodo, getTodos, deleteAllTodos, getTodoById, updateTodo, deleteTodo } from './todoController.js';

const router = Router();

router.post('/todos', createTodo);
router.get('/todos', getTodos);
router.delete('/todos', deleteAllTodos);
router.get('/todos/:id', getTodoById);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

export default router;