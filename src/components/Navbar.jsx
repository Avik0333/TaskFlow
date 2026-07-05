function Navbar({ logout }) {
  return (
    <nav className="flex justify-between items-center bg-slate-900 text-white px-8 py-5 shadow-lg">

      <div>
        <h1 className="text-3xl font-bold tracking-wide text-blue-400">
          ⚡ TaskFlow
        </h1>

        <p className="text-slate-400 text-sm">
          Organize your day efficiently
        </p>
      </div>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-lg font-semibold"
      >
        Logout
      </button>

    </nav>
  );
}

export default Navbar;