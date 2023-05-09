import { useState, useEffect } from 'react'
import Card from '../../Components/Card'
import ProductDetail from "../../Components/ProductDetail";

function Home() {
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input
                type="text"
                placeholder='Search a product'
                className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
            />

            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg p-3'>
                {
                    items?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
            <ProductDetail />
        </>
    )
}

export default Home