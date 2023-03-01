
import Navbar  from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemlListContainer/ItemListContainer';
import './index.css'
import 'boxicons'



function App() {
  return ( <>
      <div className='App'>
          <Navbar/>

        <ItemListContainer/>

        </div>
      </>
  );
}


export default App;