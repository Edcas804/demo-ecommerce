import OrderCard from '../Components/OrderCard'
import useApp from "../AppContext/AppContext.jsx";
import actionTypes from "../actions/types.js";
import {XCircleIcon} from "@heroicons/react/24/solid/index.js";
import {Link} from "react-router-dom";

const CheckoutSideMenu = () => {
    const {cartProducts, isCheckoutSideMenuOpen, totalPrice, addOrder, dispatch} = useApp()
    return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white z-20 w-[360px] h-[calc(100vh-80px)] overflow-auto`}>
            <div className='flex justify-between items-center p-6 sticky top-0 bg-white shadow'>
                <h2 className='font-medium text-xl'>My Cart</h2>
                <div
                    onClick={() => dispatch({type: actionTypes.IS_CHECK_OUT_SIDE_MENU_OPEN, payload: false})}>
                    <XCircleIcon className='h-6 w-6 text-light'/>
                </div>
            </div>
            <div className='px-6 overflow-y-auto flex-1'>
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
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                </p>
                <Link to={"/my-order/last"}>
                    <button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => addOrder()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu