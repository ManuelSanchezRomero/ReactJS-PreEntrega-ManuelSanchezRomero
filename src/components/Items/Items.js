import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'


const Items = (props) => {


  return (
<>  
    
    <div className='producto'>
    <Link Link to="/">
        <div className="producto__img">
          <img src={props.img} alt="imagen producto"/>
        </div>
    </Link>
        <div className="producto__footer">
            <h1>{props.nombre}</h1>
            <p>{props.categoria}</p>
            <p className="precio">${props.precio}</p>
        </div>
        <div className="boton__producto">
            <button className="btn">Añadir al carro</button>
            <div>
                <Link Link to={props.url} className="btn"  id={props.id}>
                Info
                </Link>
            </div>
        </div>
    </div>


    </>
  )
}

export default Items
