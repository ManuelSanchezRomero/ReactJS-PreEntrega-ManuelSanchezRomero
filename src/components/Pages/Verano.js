import React, {useState} from 'react'
import Items from '../Items/Items';

const Verano = () => {
    const [itemVerano]= useState(
        [{id: 5,
            url: "/productos/5",
            nombre: "Remera",
            categoria: "Verano",
            precio: 6500,
            img: '../../IMG/placeholder.png'
        
        },
        {
            id: 6,
            url: "/productos/6",
            nombre: "Malla",
            categoria: "Verano",
            precio: 5400,
            img: '../../IMG/placeholder.png'
        
        },
        {
            id: 7,
            url: "/productos/7",
            nombre: "Sandalias",
            categoria: "Verano",
            precio: 6000,
            img: '../../IMG/placeholder.png'
        },
        {
            id: 8,
            url: "/productos/8",
            nombre: "Gorra",
            categoria: "Verano",
            precio: 6500,
            img: '../../IMG/placeholder.png'
        
        }]);


    return (
<div>
        {itemVerano.map(art => {
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

export default Verano
