import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Header from './components/Layout/Header/Header';
import Home from './pages/Home';
import Booking from './pages/Booking'
import Kontakt from './pages/Kontakt'
import Virksomheder from './pages/Virksomheder'
import Møllerup from './components/Layout/Historie/Møllerup'
import Arrangementer from './pages/Arrangementer'
import Footer from './pages/Footer';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Booking" component={Booking} />
          <Route path="/Kontakt" component={Kontakt} />
          <Route path="/Virksomheder" component={Virksomheder} />
          <Route path="/Arrangementer" component={Arrangementer} />
          <Route path="/Møllerup" component={Møllerup} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
