import React from 'react';
import Item from  './Item';

export const ItemList = ({items}) => {


    return(
        <React.Fragment>
            {items && items.map(e => < Item key={e.id} item={e}/>)}
        </React.Fragment>
    )
}