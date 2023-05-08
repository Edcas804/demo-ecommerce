import {TrashIcon} from '@heroicons/react/24/solid'
import useApp from "../AppContext/AppContext.jsx";

const OrderCard = ({ title, imageUrl, price, numberProducts, product }) => {
    const {removeFromCart}= useApp()
    return (
        <div className="flex justify-between items-center mb-3">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
                <p className='text-sm bg-cyan-300 rounded-full p-1'>{numberProducts}</p>
                <p className='text-lg font-medium'>${price}</p>
            </div>
            <div className='flex items-center gap-2'
                 onClick={() => removeFromCart(product)}
            >
                <TrashIcon className='h-6 w-6 text-red-600 cursor-pointer'></TrashIcon>
            </div>
        </div>
    )
}

export default OrderCard