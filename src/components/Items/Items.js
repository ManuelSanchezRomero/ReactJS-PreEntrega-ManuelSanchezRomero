import React from 'react'


const Items = (props) => {
  return (
<>  

    <div className='producto'>
        <a href="#">
        <div className="producto__img">
          <img src={props.img} alt="imagen producto"/>
        </div>
        </a>
        <div className="producto__footer">
            <h1>{props.nombre}</h1>
            <p>{props.categoria}</p>
            <p className="precio">${props.precio}</p>
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


    </>
  )
}

export default Items
