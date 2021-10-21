import Button from "./Button"

const Header = ({ title }) => {
    const onClick = () => {
        console.log('clicked')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Add New' color='green' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

export default Header
