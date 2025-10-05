import { useState } from "react";
import React from "react";

export default function AddTodoForm({ onAdd }) {
    const [title, setTitle] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd(title);
        setTitle("");
    };

    return (
        <form onSubmit={submit} className="flex gap-2 mb-4">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 p-2 rounded-full flex-1 transition-colors duration-150 focus:outline-none focus:border-gray-400 "
                placeholder="Add new todo..."
            />
            <button className="bg-blue-500 text-white px-4 rounded-full">
                <span className="material-symbols-outlined">
                    add
                </span>
            </button>
        </form>
    )
}