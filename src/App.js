
import React from 'react';

import './App.css';
 import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner'; 
import CountContainer from "./components/CountContainer";

 
//componentes

function App() {


  return (
    <div className="App">
     
     <NavBar/>
    
      <h1>Hola Biemvenido</h1> 
     <ItemListConteiner greeting={" "}/>
     
     <CountContainer initial={1} stock={5} / >
     
     
    </div>
  );
}

export default App;
