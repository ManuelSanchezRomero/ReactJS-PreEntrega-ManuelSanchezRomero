import React, {useState} from 'react';
import Items from '../Items/Items';



const ItemsList = () => {
    const [item]= useState(
        [{
            id: 1,
            nombre: "Campera",
            categoria: "Invierno",
            precio: 34000,
            img: '../../IMG/placeholder.png'
          },
          {
            id: 2,
            nombre: "Buzo",
            categoria: "Invierno",
            precio: 14200,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 3,
            nombre: "Guantes",
            categoria: "Invierno",
            precio: 4300,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 4,
            nombre: "Pantalon",
            categoria: "Invierno",
            precio: 4500,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 5,
            nombre: "Remera",
            categoria: "Verano",
            precio: 6500,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 6,
            nombre: "Malla",
            categoria: "Verano",
            precio: 5400,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 7,
            nombre: "Sandalias",
            categoria: "Verano",
            precio: 6000,
            img: '../../IMG/placeholder.png'
          },
          {
            id: 8,
            nombre: "Gorra",
            categoria: "Verano",
            precio: 6500,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 9,
            nombre: "Camiseta de Futbol",
            categoria: "Sport",
            precio: 20000,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 10,
            nombre: "Pantalones cortos",
            categoria: "Sport",
            precio: 7500,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 11,
            nombre: "Lentes de sol",
            categoria: "Sport",
            precio: 10200,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 12,
            nombre: "Zapatillas",
            categoria: "Sport",
            precio: 21500,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 13,
            nombre: "Cadenas",
            categoria: "Accesorios",
            precio: 3200,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 14,
            nombre: "Bufandas",
            categoria: "Accesorios",
            precio: 2500,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 15,
            nombre: "Pilusos",
            categoria: "Accesorios",
            precio: 3500,
            img: '../../IMG/placeholder.png'
          
          },
          {
            id: 16,
            nombre: "LLaveros",
            categoria: "Accesorios",
            precio: 900,
            img: '../../IMG/placeholder.png'
          
          }
        ]
    );
     

  return (
    <div>
        {item.map(art => {
            return <Items 
            nombre={art.nombre}
            categoria={art.categoria}
            precio={art.precio}
            />
        })}
    </div>
  )
}

export default ItemsList
