import React from "react";
import "./sasset/css/ItemDetail.css" 


export default function ItemDetail({getItem}){
    return(
        <div clas="itemDetaill__row">
            
                <p>{getItem&&getItem.id}</p>
                <p>{getItem&&getItem.titulo}</p>
                <p>{getItem&&getItem.description}</p>
                <p> {getItem&&getItem.preci}</p>
 
        </div>
    )


}
