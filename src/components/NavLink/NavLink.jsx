import "./NavLink.css"
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Navlink = ({ href, text, categories, setShowDrop, showDrop }) => {
    return (
        <a
            href={`${href}`}
            className="navlink"
        >
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
        </a>
    )
}

export default Navlink