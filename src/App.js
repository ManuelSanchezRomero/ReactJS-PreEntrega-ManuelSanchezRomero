import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import 'boxicons'
import Navbar  from './components/Navbar/Navbar';
import ItemList from './components/ItemlList/ItemList';
import Categoria from './components/Categoria/Categoria';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return ( <>
        <BrowserRouter>
          <div className='App'>
            <Navbar/>
            <Routes>
              <Route exact path="/" element={<ItemList/>}/>
              <Route exact path='/Categoria/:category' element={<Categoria/>}/>
              <Route exact path='/productos/:itemId' element={<ItemDetailContainer/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </>
  );
}


export default App;