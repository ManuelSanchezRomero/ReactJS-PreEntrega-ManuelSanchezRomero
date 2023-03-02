import React, {useState} from 'react'
import Items from '../Items/Items';

const Accesorios = () => {
    const [itemAcc]= useState(
        [{id: 13,
          url: "/productos/13",
            nombre: "Cadenas",
            categoria: "Accesorios",
            precio: 3200,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 14,
            url: "/productos/14",
            nombre: "Bufandas",
            categoria: "Accesorios",
            precio: 2500,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 15,
            url: "/productos/15",
            nombre: "Pilusos",
            categoria: "Accesorios",
            precio: 3500,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 16,
            url: "/productos/16",
            nombre: "LLaveros",
            categoria: "Accesorios",
            precio: 900,
            img: '../../IMG/placeholder.png'
          
          }
        ]
    );


  return (
    <div>
              {itemAcc.map(art => {
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

export default Accesorios
