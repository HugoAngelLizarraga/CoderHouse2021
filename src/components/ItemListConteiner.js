import { React, useState, useEffect } from 'react';
import ItemList from'./ItemList' ;


const products = [
    {
        id: 1,
        title: "medias",
        description: "baja",
        preci: "42",
        pictureUrl: "https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DD6D6594D9C14._V535729156_.jpg"
    },
    {
        id: 2,
        title: "Zapatos",
        description: "media",
        preci: "22",
        pictureUrl: "https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DD6D6594D9C14._V535729156_.jpg"
    },
    {
        id: 3,
        title: "pantalón",
        description: "alta ",
        preci: "62",
        pictureUrl: "https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DD6D6594D9C14._V535729156_.jpg"
    }
]
const ItemListConteiner = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {

        const call = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
        call.then((response) => {
            console.log(response)
            setItems(response)
        })
    }, [])
    
    return (
        <>
            <ItemList items={items} />
        </>
    );
};
export default ItemListConteiner;