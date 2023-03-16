import React, { useState, useEffect,} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetch('/ListaArticulos.json', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log(params))
      .catch(error => console.error(error))
      .then((e) => {
        setTimeout(() => {
          setProducto(e.find((item) => item.id === parseInt(id)));
        },5000);
      })
  },);
  
  return (
    <>
      {typeof producto === "undefined" ? 
        <h1 className="loading">Cargando...</h1> : <ItemDetail producto= {producto} />
      }
    </>
  );}

export default ItemDetailContainer;


// const [ListaArt]= useState(
    //     [{
    //         id: 1,
    //         url: "/productos/1",
    //         nombre: "Campera",
    //         categoria: "Invierno",
    //         precio: 34000,
    //         img: './IMG/placeholder.png'
    //       },
    //       {
    //         id: 2,
    //         url: "/productos/2",
    //         nombre: "Buzo",
    //         categoria: "Invierno",
    //         precio: 14200,
    //         img: '../../IMG/placeholder.png'
          
    //       },
    //       {
    //         id: 3,
    //         url: "/productos/3",
    //         nombre: "Guantes",
    //         categoria: "Invierno",
    //         precio: 4300,
    //         img: '../../IMG/placeholder.png'
          
    //       },
    //       {
    //         id: 4,
    //         url: "/productos/4",
    //         nombre: "Pantalon",
    //         categoria: "Invierno",
    //         precio: 4500,
    //         img: '../../IMG/placeholder.png'
          
    //       },
    //       {
    //         id: 5,
    //         url: "/productos/5",
    //         nombre: "Remera",
    //         categoria: "Verano",
    //         precio: 6500,
    //         img: '../../IMG/placeholder.png'
          
    //       },
    //       {
    //         id: 6,
    //         url: "/productos/6",
    //         nombre: "Malla",
    //         categoria: "Verano",
    //         precio: 5400,
    //         img: '../../IMG/placeholder.png'
          
    //       },
    //       {
    //         id: 7,
    //         url: "/productos/7",
    //         nombre: "Sandalias",
    //         categoria: "Verano",
    //         precio: 6000,
    //         img: '../../IMG/placeholder.png'
    //       },
    //       {
    //         id: 8,
    //         url: "/productos/8",
    //         nombre: "Gorra",
    //         categoria: "Verano",
    //         precio: 6500,
    //         img: '../../IMG/placeholder.png'
          
    //       },
    //       {
    //         id: 9,
    //         url: "/productos/9",
    //         nombre: "Camiseta de Futbol",
    //         categoria: "Sport",
    //         precio: 20000,
    //         img: '../../IMG/placeholder.png'
          
    //       },
    //       {
    //         id: 10,
    //         url: "/productos/10",
    //         nombre: "Pantalones cortos",
    //         categoria: "Sport",
    //         precio: 7500,
    //         img: '../../IMG/placeholder.png'
          
    //       },
    //       {
    //         id: 11,
    //         url: "/productos/11",
    //         nombre: "Lentes de sol",
    //         categoria: "Sport",
    //         precio: 10200,
    //         img: '../../IMG/placeholder.png'
          
    //       },
    //       {
    //         id: 12,
    //         url: "/productos/12",
    //         nombre: "Zapatillas",
    //         categoria: "Sport",
    //         precio: 21500,
    //         img: '../../IMG/placeholder.png'
          
    //       },
    //       {
    //         id: 13,
    //         url: "/productos/13",
    //         nombre: "Cadenas",
    //         categoria: "Accesorios",
    //         precio: 3200,
    //         img: '../../IMG/placeholder.png'
          
    //       },
    //       {
    //         id: 14,
    //         url: "/productos/14",
    //         nombre: "Bufandas",
    //         categoria: "Accesorios",
    //         precio: 2500,
    //         img: '../../IMG/placeholder.png'
            
    //       },
    //       {
    //         id: 15,
    //         url: "/productos/15",
    //         nombre: "Pilusos",
    //         categoria: "Accesorios",
    //         precio: 3500,
    //         img: '../../IMG/placeholder.png'
            
    //       },
    //       {
    //         id: 16,
    //         url: "/productos/16",
    //         nombre: "LLaveros",
    //         categoria: "Accesorios",
    //         precio: 900,
    //         img: '../../IMG/placeholder.png'
            
    //       }
    //     ]
    //     );

    
    // useEffect(() => {
      //     const art = ListaArt.find((art) => art.id === parseInt(id));
      //     setSelectedItem(art);
      // }, [ListaArt, id]);

