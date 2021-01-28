
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner'; 
import {ItemDetailContainer} from './components/ItemDetailContainer';
//import CountContainer from "./components/CountContainer";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import {ItemDetailContainer } from "./components/ItemDetailContainer";


//componentes

function App() {

  return (
    <BrowserRouter>

<div className="App">
<NavBar/>
<Switch>
  <Route path='/item/:id'>
  <ItemListConteiner/>
  </Route>
  <Route path='/'>
  <ItemListConteiner greeting={" "}/>
  </Route>
</Switch>
</div>
 

</BrowserRouter>
   
  );


  
}

export default App;
