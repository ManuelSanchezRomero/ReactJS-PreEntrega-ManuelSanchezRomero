import React from "react";
import IMG from "../../IMG/placeholder.png";

export const ItemListContainer = () => {
    return (
    <>
    <h1 className="titulo"> Productos</h1>
    <div className="productos">
        
        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={IMG} alt="placeholder" />
            </div>
          </a>
          <div className="producto__footer">
            <h1>Nombre</h1>
            <p>Categoria</p>
            <p className="precio">$1000</p>
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

        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={IMG} alt="placeholder" />
            </div>
          </a>
          <div className="producto__footer">
            <h1>Nombre</h1>
            <p>Categoria</p>
            <p className="precio">$1000</p>
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

        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={IMG} alt="placeholder" />
            </div>
          </a>
          <div className="producto__footer">
            <h1>Nombre</h1>
            <p>Categoria</p>
            <p className="precio">$1000</p>
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

        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={IMG} alt="placeholder" />
            </div>
          </a>
          <div className="producto__footer">
            <h1>Nombre</h1>
            <p>Categoria</p>
            <p className="precio">$1000</p>
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

        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={IMG} alt="placeholder" />
            </div>
          </a>
          <div className="producto__footer">
            <h1>Nombre</h1>
            <p>Categoria</p>
            <p className="precio">$1000</p>
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

        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={IMG} alt="placeholder" />
            </div>
          </a>
          <div className="producto__footer">
            <h1>Nombre</h1>
            <p>Categoria</p>
            <p className="precio">$1000</p>
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

    </div>
    </>
);
};
