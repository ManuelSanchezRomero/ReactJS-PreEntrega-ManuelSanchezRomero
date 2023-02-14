import React from 'react';

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
            <div className='cart'>
            <box-icon name='cart'></box-icon>
                <span className='item___total'>0</span>
            </div>
        </header>

    )
}