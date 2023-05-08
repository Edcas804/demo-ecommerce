import {NavLink} from "react-router-dom";
import useApp from "../AppContext/AppContext.jsx";
import actionTypes from "../actions/types.js";

const activeClass = "text-gray-600 underline"
const normalClass = "text-gray-500 cursor-pointer"
const Navbar = () => {
    const {cartCount,isCheckoutSideMenuOpen, dispatch} = useApp()
    return (
        <nav className="flex justify-between items-center font-light px-5 py-4 sticky top-0 bg-white z-10">
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
                <li
                    onClick={() => dispatch({type: actionTypes.IS_CHECK_OUT_SIDE_MENU_OPEN, payload: !isCheckoutSideMenuOpen})}
                    className={normalClass}
                >
                    🛒 {cartCount}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar