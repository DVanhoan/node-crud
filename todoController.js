import { create, getAll, deleteAll, getById, update, deleteOne } from './todoService.js';

export const getTodos = async (req, res) => {
    try {
        const todos = await getAll();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createTodo = async (req, res) => {
    try {
        const todoData = req.body;
        const todo = await create(todoData);
        res.status(201).json(todo);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteAllTodos = async (req, res) => {
    try {
        await deleteAll();
        res.status(200).json({ message: 'All todos deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await getById(id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const todoData = req.body;
        const todo = await update(id, todoData);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await deleteOne(id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}