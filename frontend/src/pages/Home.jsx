import AddTodoForm from "../components/AddTodoForm.jsx";
import TodoList from "../components/TodoList.jsx";
import useTodos from "../hooks/useTodos.js";
import React from "react";

export default function Home() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  const today = new Date();
  const options = { day: "numeric", month: "long" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <div className="max-w-md mx-auto p-6">
      <h1>Hi, Yasin</h1>
      <div className="flex items-center mb-12">
        <h1 className="text-2xl font-bold text-gray-800">
          Today, <span className="text-gray-500 font-normal">{formattedDate}</span>
        </h1>
      </div>
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={removeTodo} />
    </div>
  );
}
