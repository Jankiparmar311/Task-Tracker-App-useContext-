import "./styles.css";
import Header from "./components/Header";

import React from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "meeting appoiment",
      day: "meeting 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Doctor appoiment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "food appoiment",
      day: "Feb 5th at 2:30pm",
      reminder: false
    }
  ]);

  // useEffect(() => {
  //   const gettasks = async () => {
  //     const tasksFromServer = await fetchTasks();
  //     setTasks(tasksFromServer);
  //   };
  //   gettasks();
  // }, []);
  // // fetch tasks
  // const fetchTasks = async () => {
  //   const res = await fetch("db.json");
  //   const data = await res.json();
  //   console.log(data);
  //   return data;
  // };
  // Add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle  Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <GlobalProvider>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No Task To Show"
        )}
      
      </div>
    </GlobalProvider>
  );
};

export default App;
