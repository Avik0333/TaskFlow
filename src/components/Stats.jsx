function Stats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">

      <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
        <p className="text-slate-400">Total Tasks</p>
        <h2 className="text-3xl font-bold text-blue-400">
          {total}
        </h2>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
        <p className="text-slate-400">Completed</p>
        <h2 className="text-3xl font-bold text-green-400">
          {completed}
        </h2>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
        <p className="text-slate-400">Pending</p>
        <h2 className="text-3xl font-bold text-yellow-400">
          {pending}
        </h2>
      </div>

    </div>
  );
}

export default Stats;