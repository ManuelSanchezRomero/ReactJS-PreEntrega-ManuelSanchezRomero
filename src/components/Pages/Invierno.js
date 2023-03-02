import React, {useState} from 'react'
import Items from '../Items/Items'

const Invierno = () => {
    const [itemInvierno]= useState(
    [{
        id: 1,
        url: "/productos/1",
        nombre: "Campera",
        categoria: "Invierno",
        precio: 34000,
        img: './IMG/placeholder.png'
      },
      {
        id: 2,
        url: "/productos/2",
        nombre: "Buzo",
        categoria: "Invierno",
        precio: 14200,
        img: '../../IMG/placeholder.png'
      
      },
      {
        id: 3,
        url: "/productos/3",
        nombre: "Guantes",
        categoria: "Invierno",
        precio: 4300,
        img: '../../IMG/placeholder.png'
      
      },
      {
        id: 4,
        url: "/productos/4",
        nombre: "Pantalon",
        categoria: "Invierno",
        precio: 4500,
        img: '../../IMG/placeholder.png'
      
      }
    ]
    );


  return (
    <div>
      {itemInvierno.map(art => {
            return <Items 
            nombre={art.nombre}
            categoria={art.categoria}
            precio={art.precio}
            id={art.id}
            url={art.url}
            />
        })}
    </div>
  )
}

export default Invierno
