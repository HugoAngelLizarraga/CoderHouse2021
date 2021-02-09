import { React, useState, useEffect } from 'react';
import ItemList from'./ItemList' ;


const products = [
    {
        id: 1,
        title: "medias",
        description: "baja",
        preci: "42",
        pictureUrl: "https://th.bing.com/th/id/OIP.sSDGM5njL_BaGdXhbN5_qAHaHa?pid=Api&rs=1"
    },
    {
        id: 2,
        title: "Zapatos",
        description: "media",
        preci: "22",
        pictureUrl: "https://th.bing.com/th/id/OIP.429AFLLNXrND7LJss2xrgAHaHa?pid=Api&rs=1"
    },
    {
        id: 3,
        title: "pantalón",
        description: "alta ",
        preci: "62",
        pictureUrl: "https://www.silicontech.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/2/1/21458.jpg_70.jpg"
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