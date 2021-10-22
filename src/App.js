import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

// use hooks for state in functional component
// replaces the need for class components
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";


function App() {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async() => {
      const TasksFromServer = await fetchTasks()
      setTasks(TasksFromServer)
    }

    getTasks()
  }, [])

  // fetch all the tasks
  const fetchTasks = async() => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()
    return data
  }

  // fetch a singular task by id
  const fetchTask = async(id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json()
    return data
  }

  // the function to delete task from the UI
  const deleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })

    setTasks(tasks.filter((task)=> task.id !== id))
  }
// create function to add task to the displayed tasks
  const addTask = async(task) => {
    const resp = await fetch('http://localhost:5000/tasks', {
      method: "POST",
      headers : {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await resp.json()
    setTasks([...tasks, data])
    
    // const id = tasks.length === 0 ? 1 : tasks[tasks.length-1].id + 1;
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }

// function to toggle reminder
  const toggleReminder = async(id) => {
    const selectedTask = await fetchTask(id)
    const updated = {...selectedTask, reminder: !selectedTask.reminder}

// update the task
    const resp = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers : {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updated)
    })
    const data = await resp.json()

    setTasks(
      tasks.map((task)=>{
      return  task.id === id ? {...task, reminder: data.reminder} : task
      // return  task.id === id ? {...task, reminder: !task.reminder} : task
      })
    )
  }

  return (
    <Router>
      <div className="container">
        <Header onAddNew={()=> setShowForm(!showForm)} toggleAdd={showForm} />
        {/* route to add new task and see tasks */}
        <Route path='/' exact render={(props) => (
          <>
            {showForm && <AddTask onAdd={addTask} />}
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
          </>
        )} />

        {/* route for about component */}
        <Route path='/about' component={About} />
        <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
