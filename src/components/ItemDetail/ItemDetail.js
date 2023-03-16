import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({producto}) => {
    return (<>

    <div className='producto'>
    <Link Link to="/">
        <div className="producto__img">
            <img src={producto.img} alt="imagen producto"/>
        </div>
        </Link>
        <div className="producto__footer">
            <h1>{producto.nombre}</h1>
            <p>{producto.categoria}</p>
            <p className="precio">${producto.precio}</p>
        </div>
    </div>
    </>
    )}

export default ItemDetail;
