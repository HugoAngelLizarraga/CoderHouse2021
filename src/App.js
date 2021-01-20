
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
    
     <ItemListConteiner greeting={"Hola Biemvenido"}/>

     
     <CountContainer initial={1} stock={5} />
     
    </div>
  );
}

export default App;
