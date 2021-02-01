
import React from 'react';
import './App.css';

import ItemListConteiner from './components/ItemListConteiner';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBa from './components/NavBarr'
import ItemDetailConteiner from './components/ItemDetailContainer'

import Login from './components/Login'
import Footer from './components/Footer'
//componentes   

function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <Route path="">
          <NavBa />
          
        </Route>

        <Switch>
        <Route path="/login" component={Login}>
          <Login/>
          </Route>
          <Route path='/item/:id'>
            <ItemDetailConteiner />
          </Route>
          <Route path='/' >
            <ItemListConteiner />
            
            <Footer />
          </Route>

         
        

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
