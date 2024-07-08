// src/components/TaskList.js
import React, { useState } from 'react';

const TaskList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        task,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-6">Task Manager</h2>
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="input-field"
      />
      <button onClick={handleAddTask} className="btn-primary mt-4">
        Add Task
      </button>
      <ul className="mt-4">
        {tasks.map((t) => (
          <li key={t.id} className="border-b py-2">
            <p><strong>Task:</strong> {t.task}</p>
            <p><strong>Date:</strong> {t.date}</p>
            <p><strong>Time:</strong> {t.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
