const NavBar = () => {
    return (
        <ul className="nav nav-hover">
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" aria-current="page" href="#">Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">Nosotros</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">Servicios</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">Contacto</a>
            </li>
        </ul>
    )
}

export default NavBar;