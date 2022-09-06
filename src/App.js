import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import img1 from './logo.svg';
// import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      <ItemListContainer greeting="hola!"/>
      {/* <Carousel/> */}
      <ItemCount Img={img1} Nombre='React App' Precio={500} Descripcion='Pagina Web desarrollada mediante la tecnología React' Stock={5} Initial={0}/>
      </header>
    </div>
  );
}

export default App;
