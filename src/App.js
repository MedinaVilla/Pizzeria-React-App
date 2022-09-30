import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import LoadPage from './components/loading/LoadPage';


const Main = lazy(() => import('./pages/main/main'));
const MenuCart = lazy(() => import('./pages/menu_cart/MenuCart'));
const NotFound = lazy(() => import('./pages/not_found/not_found'));
const MenuPizzas = lazy(() => import('./pages/menu/menu_pizzas'));
const Promociones = lazy(() => import('./pages/promociones/promociones'));
const Adicionales = lazy(() => import('./pages/adicionales/adicionales'));
const ArmaTuPizza = lazy(() => import('./pages/arma_pizza/ArmaPizza'));
const LogIn = lazy(() => import('./pages/login/Login'));
const Cart = lazy(() => import('./pages/cart/Cart'));
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Suspense fallback={<LoadPage />}>
        <Switch>
          <Route path='/' component={Main} />
          <Route path='/menu/ordenar_especialidad/:id' component={MenuCart} />
          <Route path='/carrito' component={Cart} />
          <Route path='/menu/pizzas' component={MenuPizzas} />
          <Route path='/menu/promociones' component={Promociones} />
          <Route path='/menu/adicionales' component={Adicionales} />
          <Route path='/menu/arma_tu_pizza' component={ArmaTuPizza} />
          <Route path='/login' component={LogIn} />
          <Route path='/404' component={NotFound} />
          {/* <Redirect to='/404' /> */}
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
