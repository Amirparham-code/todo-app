import { useState } from 'react'
import { useٍEffect} from "react";
import './App.css'


const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "تمرین ریاضی", done: false, color: "bg-blue-100 text-blue-700" },
    { id: 2, title: "مطالعه کتاب", done: false, color: "bg-green-100 text-green-700" },
  ]);
  const [newTask, setNewTask] = useState("");
  const [taskColor, setTaskColor] = useState("bg-blue-100 text-blue-700");
  const [search, setSearch] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), title: newTask, done: false, color: taskColor }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-center">
        <i className="fa-solid fa-list-check text-indigo-600 text-2xl mr-2"></i>
        <h1 className="text-xl font-bold text-slate-800 tracking-wide">لیست کارها</h1>
      </header>

      <main className="flex-grow px-6 py-4">
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجو بین تسک‌ها..."
            className="flex-grow max-w-md border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex justify-center mb-6 space-x-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="تسک جدید..."
            className="flex-grow max-w-md border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select
            value={taskColor}
            onChange={(e) => setTaskColor(e.target.value)}
            className="border rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="bg-blue-100 text-blue-700">آبی</option>
            <option value="bg-green-100 text-green-700">سبز</option>
            <option value="bg-pink-100 text-pink-700">صورتی</option>
            <option value="bg-yellow-100 text-yellow-700">زرد</option>
            <option value="bg-purple-100 text-purple-700">بنفش</option>
          </select>

          <button
            onClick={addTask}
            className="bg-green-500 text-white px-3 py-2 text-sm rounded-lg hover:bg-green-600 transition flex items-center"
          >
            <i className="fa-solid fa-plus mr-1"></i> افزودن
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`group rounded-lg shadow-sm p-3 transition transform hover:scale-105 hover:shadow-md ${task.color}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                    className="w-4 h-4 text-indigo-600 mr-2 cursor-pointer"
                  />
                  <span
                    className={`text-sm font-medium ${
                      task.done ? "line-through opacity-60" : ""
                    }`}
                  >
                    {task.title}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <i className="fa-solid fa-trash text-sm"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white shadow-inner text-center text-gray-600 py-3">
        <i className="fa-solid fa-user mr-2"></i>
        <p className="text-sm">پروژه کلاس توسط امیرپرهام</p>
      </footer>
    </div>
  );
};

export default App;
