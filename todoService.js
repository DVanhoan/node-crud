import Todo from './todo.js';

export const create = async (todoData) => {
    const todo = new Todo(todoData);
    await todo.save();
    return todo;
};

export const getAll = async () => {
    const todos = await Todo.find();
    return todos;
};

export const getById = async (id) => {
    const todo = await Todo.findById(id);
    return todo;
};

export const update = async (id, todoData) => {
    const todo = await Todo.findByIdAndUpdate(id, todoData, { new: true });
    return todo;
};

export const deleteOne = async (id) => {
    const todo = await Todo.findByIdAndDelete(id);
    return todo;
};

export const deleteAll = async () => {
    const todos = await Todo.deleteMany({});
    return todos;
};