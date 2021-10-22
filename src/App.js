import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

// use hooks for state in functional component
// replaces the need for class components
import { useState, useEffect } from "react";

function App() {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([
  ]);

  // useEffect(() => {
  //   const getTasks = async() => {
  //     const response = await fetch('https://localhost:5000/tasks')
  //     const data = await response.json()
  //     console.log(data)
  //   }

  //   getTasks()
  // }, [])

  // ceate the function to delete task from the UI
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }
// create function to add task to the displayed tasks
  const addTask = (task) => {
    console.log(task)
    
    const id = tasks.length === 0 ? 1 : tasks[tasks.length-1].id + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

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
        <Header onAddNew={()=> setShowForm(!showForm)} toggleAdd={showForm} />
        {showForm && <AddTask onAdd={addTask} />}
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
