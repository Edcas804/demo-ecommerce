import {NavLink} from "react-router-dom";
import useApp from "../AppContext/AppContext.jsx";
import actionTypes from "../actions/types.js";

const activeClass = "text-gray-600 underline"
const normalClass = "text-gray-500 cursor-pointer"
const Navbar = () => {
    const {cartCount,isCheckoutSideMenuOpen, searchCategory, dispatch} = useApp()
    return (
        <nav className="flex justify-between items-center font-light px-5 py-4 sticky top-0 bg-white z-10">
            <ul className="flex justify-between items-center gap-3">
                <li>
                    <NavLink
                        onClick={() => dispatch({type: actionTypes.SEARCH_CATEGOGRY, payload: ''})}
                        to="/"
                        className='text-gray-500 font-bold'

                    >
                        Online Store
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={() => dispatch({type: actionTypes.SEARCH_CATEGOGRY, payload: 'Clothes'})}
                        to="/clothes"
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeClass : normalClass
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={() => dispatch({type: actionTypes.SEARCH_CATEGOGRY, payload: 'Electronics'})}
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
                        onClick={() => dispatch({type: actionTypes.SEARCH_CATEGOGRY, payload: 'Furniture'})}
                        to="/furniture"
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeClass : normalClass
                        }
                    >
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={() => dispatch({type: actionTypes.SEARCH_CATEGOGRY, payload: 'Other'})}
                        to="/others"
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeClass : normalClass
                        }
                    >
                        Others
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