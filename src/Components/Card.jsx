import {PlusIcon} from "@heroicons/react/24/solid/index.js";
import useApp from "../AppContext/AppContext.jsx";
import actionTypes from "../actions/types.js";

const Card = (data) => {
    const {cartCount, addToCart, dispatch} = useApp()
    const showDetail = (product) => {
        dispatch({type: actionTypes.IS_VISIBLE_DETAIL, payload: true})
        dispatch({type: actionTypes.PRODUCT_VISIBLE_IN_DETAIL, payload: product})
    }
    return (
        <div className='relative bg-white cursor-pointer w-56 h-80 rounded-lg overflow-hidden'

        >
            <figure className='relative mb-2 w-full h-5/6 rounded-lg overflow-hidden'
                    onClick={() => showDetail(data.data)}
            >
                <span
                    className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg hover:scale-105 duration-500 '
                     src={data.data.images[0]} alt={data.data.title}/>

            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
            <div
                className='absolute top-0 right-0 flex justify-center items-center bg-white w-5 h-5 rounded-full m-2 p-1'
                onClick={() => addToCart(data.data)}
            >
                <PlusIcon className='h-6 w-6 text-light text-xl'/>
            </div>
        </div>
    )
}
export default Card