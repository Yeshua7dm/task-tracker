import Button from "./Button"
import { useLocation } from "react-router"

const Header = ({ title, onAddNew, toggleAdd }) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button text={ toggleAdd ? 'Close' : 'Add New Task'} color={ toggleAdd ? 'red' : 'green'} onClick={onAddNew} /> }
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

export default Header
