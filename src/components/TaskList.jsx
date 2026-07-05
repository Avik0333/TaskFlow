import TaskCard from "./TaskCard";

function TaskList({ tasks, setTasks }) {

    if (tasks.length === 0) {
        return (
            <div className="bg-slate-900 rounded-xl p-12 text-center">

                <h2 className="text-3xl mb-3">
                    🚀
                </h2>

                <h3 className="text-xl font-semibold text-white">
                    No Tasks Yet
                </h3>

                <p className="text-slate-400">
                    Create your first task.
                </p>

            </div>
        );
    }

    return (
        <div>

            {tasks.map((task) => (

                <TaskCard
                    key={task.id}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                />

            ))}

        </div>
    );

}

export default TaskList;