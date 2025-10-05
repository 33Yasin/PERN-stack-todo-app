const BASE = "http://localhost:5000";

export async function fetchTodos() {
    const res = await fetch(`${BASE}/api/todos`);
    return res.json();
}

export async function createTodoApi(title) {
    const res = await fetch(`${BASE}/api/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
    });
    return res.json();
}

export async function updateTodoApi(id, completed) {
    const res = await fetch(`${BASE}/api/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed }),
    });
    return res.json();
}

export async function deleteTodoApi(id) {
    const res = await fetch(`${BASE}/api/todos/${id}`, {
        method: "DELETE",
    });
    return res.json();
}