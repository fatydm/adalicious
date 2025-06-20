'use client'

import { useEffect, useState } from "react"
import CardMenus from "../children/CardGetItems"

export default function CardGetItems() {

    const [items, setItems] = useState([])
    
    async function fetchItems() {
        console.log('🙄');
        const response = await fetch('http://localhost:5005/items')
        const data = await response.json()
        console.log('coeur', data);
        setItems(data)
    }

    useEffect(() => {
        fetchItems()
    }, [])

    
    console.log('📦 items =', items);
    return(
        <>

             {items.map((item, index) => {
                console.log('❤️');
                
                    return (
                        <CardMenus
                         title = {item.plate} 
                         description = {item.description}
                         price = {item.price}
                         image = {item.image}
                         key={index} 
                         index={index}
                         />
                    )
                })}
        </>
    )
}