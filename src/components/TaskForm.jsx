import { useState } from "react";

function TaskForm({ tasks, setTasks }) {

    const [input, setInput] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!input.trim()) return;

        const newTask = {
            id: Date.now(),
            title: input,
            priority,
            dueDate,
            completed: false
        };

        setTasks([...tasks, newTask]);

        setInput("");

    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-4 mb-8"
        >

            <input
            type="text"
            placeholder="What needs to be done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
            >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>

            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
            />

            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition px-8 rounded-xl font-semibold"
            >
            Add
            </button>

        </form>
    );

}

export default TaskForm;