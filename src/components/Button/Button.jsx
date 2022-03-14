const Button = ({ text, children }) => {
    return (
        <button>
            {text} 
            {children?.length && <span>V</span>}
        </button>
    )
}

export default Button