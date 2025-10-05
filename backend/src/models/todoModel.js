import pool from "../config/db.js";

const TodoModel = {

    async createTodo(title) {
        const result = await pool.query(
            "INSERT INTO todos (title, completed) VALUES ($1, $2) RETURNING *", 
            [title, false]
        );
        return result.rows[0];
    },

    async getAllTodos() {
        const result = await pool.query("SELECT * FROM todos ORDER BY created_at DESC");
        return result.rows;
    },

    async updateTodoCompleted(id, completed) {
        const result = await pool.query(
            "UPDATE todos SET completed=$1 WHERE id=$2 RETURNING *",
            [completed, id]
        );
        return result.rows[0];
    },

    async deleteTodo(id) {
        await pool.query(
            "DELETE FROM todos WHERE id=$1",
            [id]
        );
        return;
    },

    
};

export default TodoModel;