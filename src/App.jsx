
// import { Navbar } from 'react-bootstrap';
import './App.css';
import ItemListConatainer from './containers/itemListContainer';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ItemListConatainer saludo ="Bienvenidos!!" />
       <NavBar/>


      </header>
    </div>
  );
}

export default App;
