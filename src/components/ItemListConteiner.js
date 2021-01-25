import { React, useState, useEffect } from 'react';
import { ItemList } from './ItemList';


const items = [
    {
        id: 123456,
        title: "medias",
        description: "Medias Largas desportivas",
        preci: "42",
        pictureUrl: "http://www.google.com/logo.png"
    },
    {
        id: 12342323,
        title: "Zapatos",
        description: "Cuero y cocedura artesenal",
        preci: "22",
        pictureUrl: "http://www.google.com/logo.png"
    },
    {
        id: 122312,
        title: "pantalón",
        description: "Color rojo rasgado ",
        preci: "62",
        pictureUrl: "http://www.google.com/logo.png"
    }
]
const ItemListConteiner = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {

        const call = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items)
            }, 2000)
        })
        call.then((response) => {
            console.log(response)
            setProducts(response)
        })
    }, [])
    useEffect(() => {
        console.log(products)

    }, [products])
    return (
        <>
            <ItemList items={products} />
        </>
    );
};
export default ItemListConteiner;