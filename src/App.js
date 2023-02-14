
import {  Navbar } from './components/Navbar';
import { ItemsList } from './components/ItemListContainer/index';
import './index.css'
import 'boxicons'


function App() {
  return ( 
      <div className='App'>
          <Navbar/>
          <ItemsList/>
      </div>
  );
}


export default App;