import Header from './components/Header';
import Tasks from './components/Tasks';

// use hooks for state in functional component
// replaces the need for class components
import { useState } from "react"

function App() {

  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Run a football game',
            day: 'Feb 5th at 2pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Borrowed a football game',
            day: 'April 5th at 2pm',
            reminder: true
        },
        {
            id: 3,
            text: 'steal a football game',
            day: 'Jun 5th at 2pm',
            reminder: true
        },
        {
            id: 4,
            text: 'Buy a football',
            day: 'May 5th at 2pm',
            reminder: true
        }
    ]
)

  return (
    <div className="App">
        <Header/>
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
