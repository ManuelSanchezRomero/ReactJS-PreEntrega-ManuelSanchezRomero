import React from 'react'

const Item = (props) => {
  return (
    <div>
        <div className="producto__footer">
            <h1>{props.nombre}</h1>
            <h3>{props.categoria}</h3>
            <p className="precio">{props.precio}</p>
        </div>
        <div className="boton__producto">
            <button className="btn">Añadir al carro</button>
            <div>
                <a href="#" className="btn">
                    Vista
                </a>
            </div>
        </div>
    </div>
  )
}

export default Item;
