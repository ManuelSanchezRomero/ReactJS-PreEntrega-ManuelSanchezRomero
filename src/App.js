import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemlListContainer/ItemListContainer';
import './index.css'
import 'boxicons'
import Verano from './components/Pages/Verano';
import Invierno from './components/Pages/Invierno';
import Sport from './components/Pages/Sport';
import Accesorios from './components/Pages/Accesorios';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return ( <>
        <BrowserRouter>
          <div className='App'>
            <Navbar/>
            <Routes>
              <Route exact path="/" element={<ItemListContainer/>}/>
              <Route exact path="/Invierno" element={<Invierno/>}/>
              <Route exact path="/Verano" element={<Verano/>}/>
              <Route exact path="/Sport" element={<Sport/>}/>
              <Route exact path="/Accesorios" element={<Accesorios/>}/>
              <Route exact path='/Item/:itemId' element={<ItemDetailContainer/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </>
  );
}


export default App;