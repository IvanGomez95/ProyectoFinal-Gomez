import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="nav nav-hover">
            <li className="nav-item">
                <NavLink className="nav-link text-dark fs-5" aria-current="page" to={"/"}>Productos</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark fs-5" to={"/category/guitarras"}>Guitarras</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark fs-5" to={"/category/amplificadores"}>Amplificadores</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark fs-5" to={"/category/bajos"}>Bajos</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;