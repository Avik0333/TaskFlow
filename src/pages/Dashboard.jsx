import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import Stats from "../components/Stats";

import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import FilterBar from "../components/FilterBar";
import TaskList from "../components/TaskList";

function Dashboard() {

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState("all");

    const [sortBy, setSortBy] = useState("newest");

    const filteredTasks = tasks.filter((task) => {

        const matchesSearch =
            task.title
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesFilter =
            filter === "all"
                ? true
                : filter === "completed"
                ? task.completed
                : !task.completed;

        return matchesSearch && matchesFilter;

    });

    const sortedTasks = [...filteredTasks].sort((a, b) => {

        switch (sortBy) {

            case "oldest":
                return a.id - b.id;

            case "priority": {

                const priorityOrder = {
                    High: 1,
                    Medium: 2,
                    Low: 3,
                };

                return (
                    priorityOrder[a.priority] -
                    priorityOrder[b.priority]
                );
            }

            case "dueDate":
                return new Date(a.dueDate) - new Date(b.dueDate);

            case "newest":
            default:
                return b.id - a.id;
        }

    });

    useEffect(() => {

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

    }, [tasks]);

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <Navbar logout={handleLogout} />
            <Stats tasks={tasks} />

            <div className="max-w-5xl mx-auto p-8">

            <TaskForm
                tasks={tasks}
                setTasks={setTasks}
            />

            <FilterBar
                filter={filter}
                setFilter={setFilter}
                search={search}
                setSearch={setSearch}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />

            <TaskList
                tasks={sortedTasks}
                setTasks={setTasks}
            />

            </div>

        </div>
    );
}

export default Dashboard;