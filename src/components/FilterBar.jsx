function FilterBar({ filter, setFilter, search, setSearch, sortBy, setSortBy }) {

    const buttonStyle = (value) =>
        `px-5 py-2 rounded-lg transition ${
            filter === value
                ? "bg-blue-500 text-white"
                : "bg-slate-800 hover:bg-slate-700 text-slate-300"
        }`;

    return (
        <div className="flex gap-4 mb-8">

            <input
                type="text"
                placeholder="🔍 Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full mb-4 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
            />

            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white mb-4"
            >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="priority">Priority</option>
                <option value="dueDate">Due Date</option>
            </select>

            <button
                className={buttonStyle("all")}
                onClick={() => setFilter("all")}
            >
                All
            </button>

            <button
                className={buttonStyle("completed")}
                onClick={() => setFilter("completed")}
            >
                Completed
            </button>

            <button
                className={buttonStyle("pending")}
                onClick={() => setFilter("pending")}
            >
                Pending
            </button>

        </div>
    );
}

export default FilterBar;