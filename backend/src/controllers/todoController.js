import Todo from '../models/todoModel.js';

const todoController = {

    async createTodo(req, res, noext) {
        try {
            const { title } = req.body;
            if (!title) return res.status(400).json({ error: "Title required" });

            const todo = await Todo.createTodo(title);
            res.status(201).json(todo);
        } catch (err) {
            noext(err);
        }
    },

    async getTodos(req, res, next) {
        try {
            const todos = await Todo.getAllTodos();
            res.json(todos);
        } catch (err) {
            next(err);
        }
    },

    async updateTodo(req, res, next) {
        try {
            const { id } = req.params;
            const { completed } = req.body;

            const todo = await Todo.updateTodoCompleted(id, completed);
            if (!todo) return res.status(404).json({ error: "Not found" });
            res.json(todo);
        } catch (err) {
            next(err);
        }
    },


    async deleteTodo(req, res, next) {
        try {
            const { id } = req.params;
            await Todo.deleteTodo(id);
            res.json({ success: true });
        } catch (err) {
            next(err);
        }
    },

};

export default todoController;