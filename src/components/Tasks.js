import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((task)=>{
               return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            })}
            {
                tasks.length === 0 ? <h3>No Tasks to show</h3> : ''
            }
        </>
    )
}

export default Tasks
