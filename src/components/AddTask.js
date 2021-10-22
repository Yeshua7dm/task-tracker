import { useState } from "react"

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text){
            alert('Please add a task')
            return
        } 

        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <div>
            <form className='add=form'>
            <div className='form-control'>
                <label htmlFor="Task">Task</label>
                <input required type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Add Task' />
            </div>
            <div className='form-control'>
                <label htmlFor="Day and Time">Task</label>
                <input type="text" name="" value={day} onChange={(e)=> setDay(e.target.value) } placeholder='Add Day and Time' />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="Reminder">Set Reminder</label>
                <input checked={reminder} type="checkbox" name="reminder" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
            </div>
            
            <input className='btn btn-block' type="submit" value="Save Task" onClick={onSubmit} />
        </form>
        </div>
    )
}


export default AddTask
