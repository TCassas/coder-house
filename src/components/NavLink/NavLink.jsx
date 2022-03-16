import "./NavLink.css"
import { HiChevronDown } from "react-icons/hi";

const Navlink = ({ href, text, categories, icon }) => {
    return (
        <a
            href={`${href}`}
            className="navlink"
        >
            {text}
            {categories?.length && <HiChevronDown className="navlink-dropdown"/>}
        </a>
    )
}

export default Navlink