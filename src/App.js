import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import 'boxicons'
import Navbar  from './components/Navbar/Navbar';
import ItemList from './components/ItemlList/ItemList';
import Categoria from './components/Categoria/Categoria';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {
  return ( <>
        <BrowserRouter>
          <div className='App'>
            <Navbar/>
            <Routes>
              <Route exact path="/" element={<ItemList/>}/>
              <Route exact path='/Categoria/:category' element={<Categoria/>}/>
              <Route exact path='/Item/:itemId' element={<ItemDetail/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </>
  );
}


export default App;