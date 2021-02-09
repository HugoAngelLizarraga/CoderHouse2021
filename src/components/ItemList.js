import React from 'react';
import Item from'./Item.js' ;
import {Link} from 'react-router-dom';

 const ItemList = ({items}) => {


    return(
        <Link>
        
            {items && items.map(e => < Item key={e.id} item={e}/>)}
        </Link>
    )}

export default ItemList;