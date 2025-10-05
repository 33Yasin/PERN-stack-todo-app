import { useState, useEffect } from "react";
import * as api from "../api/todoApi.js";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  const load = async () => {
    const data = await api.fetchTodos();
    setTodos(data);
  };

  useEffect(() => {
    load();
  }, []);

  const addTodo = async (title) => {
    await api.createTodoApi(title);
    load();
  };

  const toggleTodo = async (id, completed) => {
    await api.updateTodoApi(id, completed);
    load();
  };

  const removeTodo = async (id) => {
    await api.deleteTodoApi(id);
    load();
  };

  return { todos, addTodo, toggleTodo, removeTodo };
}
