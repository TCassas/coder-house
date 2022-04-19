import "./NavLink.css"
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navlink = ({ href, text, categories, setShowDrop, showDrop }) => {
    return (
        <Link to={href && href} className="navlink">
            {text}
            {categories?.length &&
                <>
                    {showDrop ?
                        <HiChevronDown className="navlink-dropdown" onClick={() => setShowDrop(!showDrop)}/>
                    :
                        <HiChevronUp className="navlink-dropdown" onClick={() => setShowDrop(!showDrop)}/>
                    }
                </>
            }
        </Link>
    )
}

export default Navlink