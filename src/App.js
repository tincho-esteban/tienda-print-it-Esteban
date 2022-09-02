import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      <ItemListContainer greeting="hola! ayuda con el carrousel :("/>
      <Carousel/>
      </header>
    </div>
  );
}

export default App;
