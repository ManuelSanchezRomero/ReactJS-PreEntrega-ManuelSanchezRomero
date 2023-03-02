import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <header>
            <Link to="/"><h1>Siori</h1></Link>
            <ul>
                <li>
                    <Link to="/Verano">Verano</Link>
                </li>
                <li>
                <Link to="/Invierno">Invierno</Link>
                </li>
                <li>
                <Link to="/Sport">Sport</Link>
                </li>
                <li>
                <Link to="/Accesorios">Accesorios</Link>
                </li>
            </ul>
            <CartWidget/>
        </header>

    )
}

export default Navbar;
