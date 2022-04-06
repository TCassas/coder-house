import "./NavLink.css"
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Navlink = ({ href, text, categories, setShowDrop, showDrop }) => {
    return (
        <div className="navlink">
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
        </div>
    )
}

export default Navlink