import OrderCard from '../Components/OrderCard'
import useApp from "../AppContext/AppContext.jsx";
import actionTypes from "../actions/types.js";
import {XCircleIcon} from "@heroicons/react/24/solid/index.js";

const CheckoutSideMenu = () => {
    const {cartProducts, isCheckoutSideMenuOpen, updatePrice, dispatch} = useApp()
    return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white z-20 w-[360px] h-[calc(100vh-80px)] overflow-auto`}>
            <div className='flex justify-between items-center p-6 sticky top-0 bg-white shadow'>
                <h2 className='font-medium text-xl'>My Cart - total: ${updatePrice}</h2>
                <div
                    onClick={() => dispatch({type: actionTypes.IS_CHECK_OUT_SIDE_MENU_OPEN, payload: false})}>
                    <XCircleIcon className='h-6 w-6 text-light'/>
                </div>
            </div>
            <div className='px-6'>
                {
                    cartProducts.map(product => (
                        <OrderCard
                            key={Math.random() * product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            numberProducts={product.numberProducts}
                            product={product}
                        />
                    ))
                }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu