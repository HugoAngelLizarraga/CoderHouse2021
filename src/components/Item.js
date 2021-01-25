import React from 'react';
import CountCountainer from './CountContainer';
import {Link} from 'react-router-dom';

const Item = ({item}) => {

    return(
       <React.Fragment> 
            <div>
              <Link to={'/item/${item.id}'}>
              <p>{item.titulo}</p> 
              
              </Link>  
              {item.description}
              {item.precio}
       
              
            </div>
            
            </React.Fragment>
    )
}
export  default Item;