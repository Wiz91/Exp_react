import Hadder from './components/Hadder';
import HomeCrousal from './components/HomeCrousal';
import Homedownpage from './components/Homedownpage';
import Shop from './components/Shop';
import ShopD from './components/ShopD';
import Contect from './components/Contect';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

function App() {
  return (
  <>
  <BrowserRouter>
    <Switch>
      <Route  exact path='/' render={props =>
   <div>
    <Hadder />
    <HomeCrousal/>
    <Homedownpage/>
  </div>} />
  
  <Route  exact path='/shop' render={props =>
   <div>
    <Hadder />
    <Shop/>
  </div>} />

  <Route  exact path='/shopD' render={props =>
   <div>
    <Hadder />
    <ShopD/>
  </div>} />

  <Route  exact path='/Contect' render={props =>
   <div>
    <Hadder />
    <Contect/>
  </div>} />

  <Route  exact path='/cart' render={props =>
   <div>
    <Hadder />
    <Cart/>
  </div>} />

  <Route  exact path='/checkout' render={props =>
   <div>
    <Hadder />
    <Checkout/>
  </div>} />


    </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;
