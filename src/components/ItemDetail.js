import React from "react";

import CountContainer from './CountContainer';
import "./sasset/css/ItemDetail.css" 
import item from  './Item'

export default function ItemDetail({getItem}){
    return(
        <div clas="itemDetaill__row">
            <img style={{width:200, height:300}} src={item.pictureUrl} alt={item.titulo}/>
                <p>{getItem&&getItem.id}</p>
                <p>{getItem&&getItem.titulo}</p>
                <p>{getItem&&getItem.description}</p>
                <p> {getItem&&getItem.preci}</p>
                <t><CountContainer initial={1} stock={5} /></t>
        </div>
            
    )


}
