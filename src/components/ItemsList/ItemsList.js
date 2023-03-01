import React, {useState} from 'react'
import Item from '../Item/Item';


const ItemList = () => {
  const [items, setItem]= useState([
    {
    id: 1,
    nombre: "Campera",
    categoria: "Invierno",
    precio: 34000,
    img: ""
  },
  {
    id: 2,
    nombre: "Buzo",
    categoria: "Invierno",
    precio: 14200,
    img: ""
  
  },
  {
    id: 3,
    nombre: "Guantes",
    categoria: "Invierno",
    precio: 4300,
    img: ""
  
  },
  {
    id: 4,
    nombre: "Pantalon",
    categoria: "Invierno",
    precio: 4500,
    img: ""
  
  },
  {
    id: 5,
    nombre: "Remera",
    categoria: "Verano",
    precio: 6500,
    img: ""
  
  },
  {
    id: 6,
    nombre: "Malla",
    categoria: "Verano",
    precio: 5400,
    img: ""
  
  },
  {
    id: 7,
    nombre: "Sandalias",
    categoria: "Verano",
    precio: 6000,
    img: ""
  },
  {
    id: 8,
    nombre: "Gorra",
    categoria: "Verano",
    precio: 6500,
    img: ""
  
  },
  {
    id: 9,
    nombre: "Camiseta de Futbol",
    categoria: "Sport",
    precio: 20000,
    img: ""
  
  },
  {
    id: 10,
    nombre: "Pantalones cortos",
    categoria: "Sport",
    precio: 7500,
    img: ""
  
  },
  {
    id: 11,
    nombre: "Lentes de sol",
    categoria: "Sport",
    precio: 10200,
    img: ""
  
  },
  {
    id: 12,
    nombre: "Zapatillas",
    categoria: "Sport",
    precio: 21500,
    img: ""
  
  },
  {
    id: 13,
    nombre: "Cadenas",
    categoria: "Accesorios",
    precio: 3200,
    img: ""
  
  },
  {
    id: 14,
    nombre: "Bufandas",
    categoria: "Accesorios",
    precio: 2500,
    img: ""
  
  },
  {
    id: 15,
    nombre: "Pilusos",
    categoria: "Accesorios",
    precio: 3500,
    img: ""
  
  },
  {
    id: 16,
    nombre: "LLaveros",
    categoria: "Accesorios",
    precio: 900,
    img: ""
  
  }
]);
  

  return (
    <div>
      {items.map(item => {
        return <Item key={item.id} nombre={item.nombre} categoria={item.categoria} precio={item.precio}/>
      })}
    </div>
  )
}

export default ItemList;
