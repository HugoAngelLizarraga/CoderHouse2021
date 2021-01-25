import React from "react";

export default function ItemDetail({getItem}){
    return(
        <div>
            {getItem && getItem.titulo}
            
        </div>
    )


}
