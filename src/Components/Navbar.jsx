import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../Context/index.jsx";

const activeClass = "text-gray-600 underline"
const normalClass = "text-gray-500"
const Navbar = () => {
    const context = useContext(AppContext);
    return (
        <nav className="flex justify-between items-center font-light px-5 py-4">
            <ul className="flex justify-between items-center gap-3">
                <li>
                    <NavLink
                        to="/"
                        className='text-gray-500 font-bold'

                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/all"
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeClass : normalClass
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeClass : normalClass
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/toys"
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeClass : normalClass
                        }
                    >
                        Toys
                    </NavLink>
                </li>
            </ul>
            <ul className="flex justify-between items-center gap-3">
                <li>
                    <NavLink
                        to="/my-account"
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeClass : normalClass
                        }
                    >
                        my
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-order"
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeClass : normalClass
                        }
                    >
                        order
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-orders"
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeClass : normalClass
                        }
                    >
                        orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/signin"
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeClass : normalClass
                        }
                    >
                        singin
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/cart"
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeClass : normalClass
                        }
                    >
                        🛒 {context.shoppingCart}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar