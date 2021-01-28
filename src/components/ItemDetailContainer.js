import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from './ItemDetail'

const itemList =[
    {
        id: 1,
        titulo: "corbata",
        description: "Medias Largas desportivas",
        preci: "42",
        pictureUrl: "http://www.google.com/logo.png"
    },
    {
        id: 2,
        titulo: "cinturon",
        description: "Medias Largas desportivas",
        preci: "42",
        pictureUrl: "http://www.google.com/logo.png"
    },
    {
        id: 3,
        titulo: "pantalon",
        description: "Medias Largas desportivas",
        preci: "42",
        pictureUrl: "http://www.google.com/logo.png"
    }
]

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
     const {id=1}= useParams();
 

    useEffect(() => {
        const call = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemList)
            }, 2000)
        })
        call.then((response) => {
            console.log(response)
            setItem(id)
            
        })
    }, [])

    return (
        <>
             <ItemDetail getItem={item} />
        </>
    );
};
export default ItemDetailContainer;