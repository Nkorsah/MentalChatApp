import "./Button.css"

function Button({onClick,...buttonProps}) {
    return <button className="btn" onClick={onClick}> Click Me!</button>
}

export default Button;