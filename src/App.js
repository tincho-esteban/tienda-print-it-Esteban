import './App.css';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './Pages/Cart/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {CartProvider} from "./Components/Context/CartProvider";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <NavBar />
          <header className="App-header">
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:categoryName' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer /> } />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
          </header>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
