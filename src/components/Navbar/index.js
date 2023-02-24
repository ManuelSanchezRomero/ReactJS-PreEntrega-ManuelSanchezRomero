import React from 'react';
import CartWidget from '../CartWidget/index'


export const Navbar = () =>{
    return(
        <header>
            <a href='./public/index.html'><h1>Siori</h1></a>
            <ul>
                <li>
                    <a href='#'>Verano</a>
                </li>
                <li>
                    <a href='#'>Invierno</a>
                </li>
                <li>
                    <a href='#'>Sport</a>
                </li>
                <li>
                    <a href='#'>Accesorios</a>
                </li>
            </ul>
            <CartWidget/>
        </header>

    )
}