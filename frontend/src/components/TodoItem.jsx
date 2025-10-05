import React from "react";

export default function TodoItem({ todo, onToggle, onDelete }) {
  const handleToggle = () => {
    // Todo tamamlanmış olarak işaretle
    onToggle(todo.id, !todo.completed);

    // Eğer tamamlanmış ise hemen sil
    if (!todo.completed) {
      onDelete(todo.id);
    }
  };

  return (
    <li className="flex items-center py-2 border-b border-gray-200">
      <button
        onClick={handleToggle}
        className="focus:outline-none flex items-center gap-3"
      >
        {/* Yuvarlak ikon */}
        <span className="material-symbols-outlined text-blue-500">
          {todo.completed ? "check_circle" : "circle"}
        </span>

        {/* Görev başlığı */}
        <span
          className={`cursor-pointer ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`}
        >
          {todo.title}
        </span>
      </button>
    </li>
  );
}
