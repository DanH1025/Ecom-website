import './App.css';
import {BrowserRouter, Switch ,Route} from "react-router-dom"

import { useState } from 'react';

//sceens
import Home from './Screen/Home/home';
import Cart from './Screen/Cart/cart';
import Product from './Screen/Product/product';

import Navbar from './components/Navbar/navbar';
import Backdrop from './components/Backdrop/backdrop';
import SideDrawer from './components/Sidedrawer/sidedrawer';


function App() {
  const [sideToggle , setSideToggle] = useState(false);
  
  return (
  
    <BrowserRouter>
      <Navbar click={()=> setSideToggle(true)} />
      <SideDrawer show={sideToggle}  click={()=> setSideToggle(false)} />
      <Backdrop show={sideToggle} click={()=> setSideToggle(false)} /> 

          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/products/:id" component={Product}/>
              <Route exact path="/cart" component={Cart} />
              
            </Switch>
          </main>
    </BrowserRouter>
  );
}

export default App;
