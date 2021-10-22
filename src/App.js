import Header from "./components/Header";
import Tasks from "./components/Tasks";

// use hooks for state in functional component
// replaces the need for class components
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Run a football game",
      day: "Feb 5th at 2pm",
      reminder: true,
    }, 
    {
      id: 2,
      text: "Borrowed a football game",
      day: "April 5th at 2pm",
      reminder: true,
    },
    {
      id: 3,
      text: "steal a football game",
      day: "Jun 5th at 2pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Buy a football",
      day: "May 5th at 2pm",
      reminder: true,
    },
  ]);

  // ceate the function to delete task from the UI
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }
// create function to add task to the displayed tasks

// function to toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task)=>{
      return  task.id === id ? {...task, reminder: !task.reminder} : task
      })
    )
  }

  return (
    <div className="container">
        <Header />
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
