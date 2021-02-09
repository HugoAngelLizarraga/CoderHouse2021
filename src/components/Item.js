import React from 'react';
 
import {Link} from 'react-router-dom';

const Item = ({item}) => {

    return(
       <> 
            <div   >
              
            <img style={{width:200, height:300}} src={item.pictureUrl} alt={item.titulo}/>
              <Link to={'/item/${item.id}'}>
              <p>{item.id}</p>
     
              </Link>  
              
              <p>{item.titulo}</p> 
              <p>{item.description}</p>
              <p> {item.preci}</p>
               
              
            </div>
            
        </>
    )
}
export  default Item;


