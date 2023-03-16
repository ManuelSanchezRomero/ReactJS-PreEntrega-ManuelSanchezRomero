import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Items from '../Items/Items';
import Navbar from '../Navbar/Navbar';




const Categoria = () => {
  const [articulos]= useState(
    [{
      key: 1,
      id: 1,
      url: "/productos/1",
      nombre: "Campera",
      categoria: "Invierno",
      precio: 34000,
      img: './IMG/placeholder.png'
    },
    {
      key: 2,
      id: 2,
      url: "/productos/2",
      nombre: "Buzo",
      categoria: "Invierno",
      precio: 14200,
      img: '../../IMG/placeholder.png'
    
    },
    {
      key: 3,
      id: 3,
      url: "/productos/3",
      nombre: "Guantes",
      categoria: "Invierno",
      precio: 4300,
      img: '../../IMG/placeholder.png'
    
    },
    {
      key: 4,
      id: 4,
      url: "/productos/4",
      nombre: "Pantalon",
      categoria: "Invierno",
      precio: 4500,
      img: '../../IMG/placeholder.png'
    
    },
    {
      key: 5,
      id: 5,
      url: "/productos/5",
      nombre: "Remera",
      categoria: "Verano",
      precio: 6500,
      img: '../../IMG/placeholder.png'
    
    },
    {
      key: 6,
      id: 6,
      url: "/productos/6",
      nombre: "Malla",
      categoria: "Verano",
      precio: 5400,
      img: '../../IMG/placeholder.png'
    
    },
    {
      key: 7,
      id: 7,
      url: "/productos/7",
      nombre: "Sandalias",
      categoria: "Verano",
      precio: 6000,
      img: '../../IMG/placeholder.png'
    },
    {
      key: 8,
      id: 8,
      url: "/productos/8",
      nombre: "Gorra",
      categoria: "Verano",
      precio: 6500,
      img: '../../IMG/placeholder.png'
    
    },
    {
      key: 9,
      id: 9,
      url: "/productos/9",
      nombre: "Camiseta de Futbol",
      categoria: "Sport",
      precio: 20000,
      img: '../../IMG/placeholder.png'
    
    },
    {
      key: 10,
      id: 10,
      url: "/productos/10",
      nombre: "Pantalones cortos",
      categoria: "Sport",
      precio: 7500,
      img: '../../IMG/placeholder.png'
    
    },
    {
      key: 11,
      id: 11,
      url: "/productos/11",
      nombre: "Lentes de sol",
      categoria: "Sport",
      precio: 10200,
      img: '../../IMG/placeholder.png'
    
    },
    {
      key: 12,
      id: 12,
      url: "/productos/12",
      nombre: "Zapatillas",
      categoria: "Sport",
      precio: 21500,
      img: '../../IMG/placeholder.png'
    
    },
    {
      key: 13,
      id: 13,
      url: "/productos/13",
      nombre: "Cadenas",
      categoria: "Accesorios",
      precio: 3200,
      img: '../../IMG/placeholder.png'
    
    },
    {
      key: 14,
      id: 14,
      url: "/productos/14",
      nombre: "Bufandas",
      categoria: "Accesorios",
      precio: 2500,
      img: '../../IMG/placeholder.png'
      
    },
    {
      key: 15,
      id: 15,
      url: "/productos/15",
      nombre: "Pilusos",
      categoria: "Accesorios",
      precio: 3500,
      img: '../../IMG/placeholder.png'
      
    },
    {
      key: 16,
      id: 16,
      url: "/productos/16",
      nombre: "LLaveros",
      categoria: "Accesorios",
      precio: 900,
      img: '../../IMG/placeholder.png'
      
    }
  ]
    );
    const [selectedCategoria, setSelectedCategoria] = useState(null);
  
    const handleCategoriaChange = (categoria) => {
      setSelectedCategoria(categoria);
    };
  
    const filteredData = selectedCategoria
      ? articulos.filter((item) => item.categoria === selectedCategoria)
      : articulos;
  
    return (
      <div>
        <Navbar handleCategoriaChange={handleCategoriaChange} />
        <ul>
          {filteredData.map((item) => (
            <Items 
            nombre={item.nombre}
            categoria={item.categoria}
            precio={item.precio}
            id={item.id}
            url={item.url}
            key= {item.key}
            />
          ))}
        </ul>
      </div>
    );
  };
export default Categoria
