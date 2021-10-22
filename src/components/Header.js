import Button from "./Button"

const Header = ({ title, onAddNew, toggleAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text={ toggleAdd ? 'Close' : 'Add New Task'} color={ toggleAdd ? 'red' : 'green'} onClick={onAddNew} />
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

export default Header
