import { XCircleIcon} from '@heroicons/react/24/solid'
import useApp from "../AppContext/AppContext.jsx";
import actionTypes from "../actions/types.js";
const ProductDetail = () => {
    const { isVisibleDetail,productVisibleInDetail: productToShow, dispatch} = useApp()
    return (
        <aside
            className={`flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] ${isVisibleDetail ? 'flex' : 'hidden'}`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>{productToShow?.title}</h2>
                <div onClick={() => dispatch({type: actionTypes.IS_VISIBLE_DETAIL, payload: !isVisibleDetail})}>
                    <XCircleIcon className='h-6 w-6 text-light' />
                </div>
            </div>
            <figure className='px-6'>
                <img
                    className='w-full h-full rounded-lg'
                    src={Array.isArray(productToShow?.images) ? productToShow?.images[0] : ''}
                    alt={productToShow?.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'> $ {productToShow?.price}</span>
                <span className='font-medium text-md'>{productToShow?.title}</span>
                <span className='font-light text-sm'>{productToShow?.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail