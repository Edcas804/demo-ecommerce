import {AppContext} from "../Context/index.jsx";
import {useContext} from "react";
import {PlusIcon} from "@heroicons/react/24/solid/index.js";

const Card = (data) => {
    const context = useContext(AppContext);
    return (
        <div className='bg-white cursor-pointer w-56 h-80 rounded-lg overflow-hidden'>
            <figure className='relative mb-2 w-full h-5/6 rounded-lg overflow-hidden'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg hover:scale-105 duration-500 ' src={data.data.images[0]} alt={data.data.title} />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-5 h-5 rounded-full m-2 p-1'
                     onClick={() => context.setShoppingCart(context.shoppingCart + 1)}
                >
                    <PlusIcon className='h-6 w-6 text-light text-xl' />
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}
export default Card