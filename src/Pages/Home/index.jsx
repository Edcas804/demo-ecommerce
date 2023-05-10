import {useState, useEffect} from 'react'
import Card from '../../Components/Card'
import ProductDetail from "../../Components/ProductDetail";
import useApp from "../../AppContext/AppContext.jsx";
import actionTypes from "../../actions/types.js";

function Home() {
    const {items, search, dispatch} = useApp()
    const handlerSearch = ({value}) => {
        dispatch({type: actionTypes.SEARCH, payload: value})
    }

    return (
        <>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <div className='sticky top-0 z-20'>
                <input
                    value={search}
                    type="text"
                    placeholder='Search a product'
                    className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                    onChange={({target}) => handlerSearch(target)}
                />
            </div>

            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg p-3'>
                {
                    Array.isArray(items)
                        ? items.map(item => (
                            <Card key={item.id} data={item}/>
                        )) : <p>Without products...</p>
                }
            </div>
            <ProductDetail/>
        </>
    )
}

export default Home