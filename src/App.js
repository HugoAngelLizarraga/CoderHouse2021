
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner'; 
import {ItemDetailContainer} from './components/ItemDetailContainer';
//import CountContainer from "./components/CountContainer";
import {BrowserRouter, Switch, Router} from 'react-router-dom';
//import {ItemDetailContainer } from "./components/ItemDetailContainer";


//componentes

function App() {

  return (
<BrowserRouter>

<div className="App">
<NavBar/>
<Switch>
  <Router path='/item/:id'>
  <ItemListConteiner/>
  </Router>
  <Router path='/'>
  <ItemListConteiner greeting={" "}/>
  </Router>
</Switch>
</div>
</BrowserRouter>

 
   
  );


  
}

export default App;
