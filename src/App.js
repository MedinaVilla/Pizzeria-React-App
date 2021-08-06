import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "wouter";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./index.css";

const Main = lazy(() => import('./pages/main/main'));
const NotFound = lazy(() => import('./pages/not_found/not_found'));


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Suspense fallback={<div />}>
        <Switch>
          <Route path='/' component={Main} />
          <Route path='/404' component={NotFound} />
          <Redirect to='/404' />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
