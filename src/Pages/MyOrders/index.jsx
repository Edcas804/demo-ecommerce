import {Link} from "react-router-dom";
import OrdersCard from "../../Components/OrdersCard.jsx";
import useApp from "../../AppContext/AppContext.jsx";

function MyOrders() {
    const {order} = useApp()
  return (
    <>
        <div className='flex items-center justify-center relative w-80'>
            <h1>My Orders</h1>
        </div>
        {
            order.map((currentOrder, index) => (
                <Link key={index} to={`/my-order/${index}`}>
                    <OrdersCard
                        date={currentOrder.date.toLocaleString()}
                        totalPrice={currentOrder.totalPrice}
                        totalProducts={currentOrder.totalProducts} />
                </Link>
            ))
        }
    </>
  )
}

export default MyOrders
