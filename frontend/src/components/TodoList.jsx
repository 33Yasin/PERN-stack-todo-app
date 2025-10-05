import TodoItem from "./TodoItem.jsx";
import React from "react";

export default function TodoList({ todos, onToggle, onDelete }) {
    if(!todos.length) return <p className="text-gray-500">No todo yet</p>

    return (
        <ul className="mt-8 space-y-2">
            {todos.map((t) => (
                <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </ul>
    )
}