import OrderCard from "../../Components/OrderCard.jsx";
import useApp from "../../AppContext/AppContext.jsx";
import {Link, useParams} from "react-router-dom";
import {ChevronLeftIcon} from "@heroicons/react/20/solid/index.js";
import {useEffect, useState} from "react";

function MyOrder() {
    const {order} = useApp()
    const [index, setIndex] = useState(order.length - 1);
    const {id}= useParams()
    useEffect(() => {
        if(id !== 'last'){
            setIndex(id)
        }
    }, []);

    if(order.length < 1){
        return (<p>Sin ordenes</p>)
    }
    return (
        <>


            <div className='flex items-center justify-center relative w-80 mb-6'>
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
                </Link>
                <h1>My Order</h1>
            </div>
            <div className='flex flex-col w-80'>
                <div className='flex justify-between py-2'>
                    <h3>Total Price: {order[index].totalPrice}</h3>
                    <h3>Total Products: {order[index].totalProducts}</h3>
                </div>
                {
                    Array.isArray(order) ? order[index]?.products.map(product => (
                        <OrderCard
                            key={Math.random() * product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            numberProducts={product.numberProducts}
                            product={product}
                        />
                    )) : 'sin productos'
                }
            </div>
        </>
    )
}

export default MyOrder
