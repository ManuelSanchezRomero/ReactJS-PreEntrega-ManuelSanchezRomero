
import {  Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import './index.css'
import 'boxicons'



function App() {
  return ( 
      <div className='App'>
          <Navbar/>
          <ItemListContainer/>
      </div>
  );
}


export default App;