import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const { itemId } = useParams(); 

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await fetch("/ListaArticulos.json", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                const productoEncontrado = data.find(
                    (item) => item.id === parseInt(itemId)
                );
                setProducto(productoEncontrado);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducto();
    }, [itemId]);

    return (
        <>
            {producto.length === 0 ? (
                <h1 className='loading'>Cargando...</h1>
            ) : (
                <ItemDetail producto={producto} />
            )}
        </>
    );
};

export default ItemDetailContainer;



