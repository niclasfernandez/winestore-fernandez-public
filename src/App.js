
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Carrousel from './components/Carrousel/Carrousel';
import { CartContextProvider } from './context/cartContext'
import CheckOut from './components/CheckOut/CheckOut';
import Congrats from './components/Congrats/Congrats';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<><Carrousel /><ItemListContainer /></>}/> 
          <Route exact path='/category/:categoryId' element={<ItemListContainer />}/>  
          <Route path='/item/:paramId' element={<ItemDetailContainer />} />   
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<CheckOut />}/>
          <Route path='/congrats' element={<Congrats />}/>
        </Routes> 
        <Footer />
      </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
