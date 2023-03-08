import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const Navbar = ({ handleCategoriaChange }) =>{
    return(
        <header>
            <Link to="/"><h1>Siori</h1></Link>
            <ul>
                <li><Link to="/Categoria/Invierno" onClick={() => handleCategoriaChange("Invierno")}>Invierno</Link></li>
                <li><Link to="/Categoria/Verano" onClick={() => handleCategoriaChange("Verano")}>Verano</Link></li>
                <li><Link to="/Categoria/Sport" onClick={() => handleCategoriaChange("Sport")}>Sport</Link></li>
                <li><Link to="/Categoria/Accesorios" onClick={() => handleCategoriaChange("Accesorios")}>Accesorios</Link></li>
            </ul>
            <CartWidget/>
        </header>
    )
}
export default Navbar;
