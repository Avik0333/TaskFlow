import { useState } from "react";

import {
  FaTrash,
  FaEdit,
  FaCheck,
  FaSave
} from "react-icons/fa";

function TaskCard({ task, tasks, setTasks }) {

    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    // Delete
    const handleDelete = () => {
        setTasks(tasks.filter((t) => t.id !== task.id));
    };

    // Toggle Complete
    const handleComplete = () => {
        setTasks(
            tasks.map((t) =>
                t.id === task.id
                    ? { ...t, completed: !t.completed }
                    : t
            )
        );
    };

    // Save Edit
    const handleSave = () => {

        if (!newTitle.trim()) return;

        setTasks(
            tasks.map((t) =>
                t.id === task.id
                    ? { ...t, title: newTitle }
                    : t
            )
        );

        setEditing(false);
    };

    return (
        <div className="bg-slate-900 rounded-xl p-5 mb-4 shadow-lg flex justify-between items-center">

            {editing ? (
            <div className="flex flex-1 gap-3">

                <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="flex-1 bg-slate-800 px-4 py-2 rounded-lg text-white"
                />

                <button
                onClick={handleSave}
                className="bg-green-500 hover:bg-green-600 px-4 rounded-lg"
                >
                    <FaSave />
                </button>

            </div>
            ) : (
            <>
                <h2
                className={`text-lg font-semibold ${
                    task.completed
                    ? "line-through text-slate-500"
                    : "text-white"
                }`}
                >
                {task.title}
                </h2>

                <p
                    className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${
                        task.priority === "High"
                        ? "bg-red-500/20 text-red-400"
                        : task.priority === "Medium"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                    >
                    {task.priority}
                </p>

                <p className="text-slate-400 text-sm mt-2">
                    📅 {task.dueDate || "No due date"}
                </p>

                <div className="flex gap-3">

                <button
                    onClick={handleComplete}
                    className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition"
                >
                    {task.completed ? "Undo" : <FaCheck />}
                </button>

                <button
                    onClick={() => setEditing(true)}
                    className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center transition"
                >
                    <FaEdit />
                </button>

                <button
                    onClick={handleDelete}
                    className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition"
                >
                    <FaTrash />
                </button>

                </div>
            </>
            )}

        </div>
    );
}

export default TaskCard;