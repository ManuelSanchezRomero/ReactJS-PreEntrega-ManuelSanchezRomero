import React, {useState} from 'react'
import Items from '../Items/Items';

const Sport = () => {
    const [itemSport]= useState(
        [{id: 9,
          url: "/productos/9",
            nombre: "Camiseta de Futbol",
            categoria: "Sport",
            precio: 20000,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 10,
            url: "/productos/10",
            nombre: "Pantalones cortos",
            categoria: "Sport",
            precio: 7500,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 11,
            url: "/productos/11",
            nombre: "Lentes de sol",
            categoria: "Sport",
            precio: 10200,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 12,
            url: "/productos/12",
            nombre: "Zapatillas",
            categoria: "Sport",
            precio: 21500,
            img: '../../IMG/placeholder.png'
          
          }]);


  return (
    <div>
              {itemSport.map(art => {
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

export default Sport
