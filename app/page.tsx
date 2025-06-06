'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, UsersIcon } from "lucide-react";
export default function ProjectManager() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const addTask = () => {
    if (!taskName) return;
    const newTask = {
      id: Date.now(),
      name: taskName,
      desc: taskDesc,
      status: "Pending",
      prediction: "On Track",
    };
    setTasks([newTask, ...tasks]);
    setTaskName("");
    setTaskDesc("");
  };
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">AI Project Scheduler</h1>
        <div className="space-y-4 p-4 border rounded-lg">
          <input className="w-full p-2 border rounded" placeholder="Task name" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
          <textarea className="w-full p-2 border rounded" placeholder="Task description" value={taskDesc} onChange={(e) => setTaskDesc(e.target.value)} />
          <button onClick={addTask} className="w-full bg-blue-600 text-white p-2 rounded">Add Task</button>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Project Tasks</h2>
        {tasks.length === 0 && <p>No tasks added yet.</p>}
        {tasks.map((task) => (
          <motion.div key={task.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="p-4 shadow-lg border-l-4 border-blue-500 bg-white rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{task.name}</h3>
                <span className="text-sm text-green-600">{task.prediction}</span>
              </div>
              <p className="text-sm text-gray-600">{task.desc}</p>
              <div className="flex space-x-2 text-sm text-gray-500 mt-2">
                <CalendarIcon size={16} />
                <span>Status: {task.status}</span>
                <UsersIcon size={16} className="ml-4" />
                <span>Team: AI Suggested</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}