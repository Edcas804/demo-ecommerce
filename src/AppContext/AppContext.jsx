import {createContext, useContext, useReducer, useEffect, useState} from "react";
import AppReducer, {initialState} from "../AppReducer/AppReducer";
import actionTypes from "../actions/types.js";
import {useActionData} from "react-router-dom";

const AppContext = createContext(initialState);

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [items, setItems] = useState(null)
    const [allProducts, setAllProducts] = useState(null);

    const addOrder = () => {
        const order = {
            date: new Date(),
            products: state.cartProducts,
            totalProducts: state.cartCount,
            totalPrice: state.totalPrice
        }
        dispatch({
            type: actionTypes.ORDER,
            payload: [...state.order, order]
        })
        dispatch({
            type: actionTypes.CART_PRODUCTS,
            payload: []
        })
        dispatch({
            type: actionTypes.CART_COUNT,
            payload: 0
        })
        dispatch({
            type: actionTypes.TOTAL_PRICE,
            payload: 0
        })
    }
    const addToCart = (product) => {
        let numberProducts = 1
        let updatedCart = []

        const existsProduct = state.cartProducts.find(
            (currentProduct) => currentProduct.id === product.id
        );
        if (existsProduct) {
            numberProducts = existsProduct.numberProducts + 1
            updatedCart = state.cartProducts.filter(
                (currentProduct) => currentProduct.id !== product.id
            );
        }
        const products = existsProduct
            ? [...updatedCart, {...existsProduct, numberProducts}]
            : [...state.cartProducts, {...product, numberProducts}]

        updatePrice(products)
        dispatch({
            type: actionTypes.CART_COUNT,
            payload: products.length
        });
        dispatch({
            type: actionTypes.CART_PRODUCTS,
            payload: products
        });
    };

    const removeFromCart = (product) => {
        const updatedCart = state.cartProducts.filter(
            (currentProduct) => currentProduct.id !== product.id
        );
        updatePrice(updatedCart)

        dispatch({
            type: actionTypes.CART_COUNT,
            payload: updatedCart.length
        });
        dispatch({
            type: actionTypes.CART_PRODUCTS,
            payload: updatedCart
        });
    };

    /**
     * Calculates total price
     * @param {Object[]} products
     * @param {number} products[].price
     * @returns {number} total price
     */
    const totalPrice = (products) => products
        .reduce((total, product) => (
            total += product.price * product.numberProducts),
            0
        )

    const filteredItemsByTitle = (toSearch, searchByTitle) => {
        return toSearch?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    const filteredItemsByCategory = (toSearch, searchByCategory) => {
        return toSearch?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
    const updatePrice = (products) => {
        let total = totalPrice(products)

        dispatch({
            type: actionTypes.TOTAL_PRICE,
            payload: total
        });
    };

    const searchItems = (type, search) => {

    }
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setAllProducts(data))
    }, [])

    useEffect(() => {
        if(state.searchCategory.trim() && !state.search.trim()) {
            setItems(filteredItemsByCategory(allProducts, state.searchCategory))
        }else if(state.search.trim() && !state.searchCategory.trim()){
            setItems(filteredItemsByTitle(allProducts, state.search))
        }else if(state.search.trim() && state.searchCategory.trim()){
            setItems(filteredItemsByCategory(allProducts, state.searchCategory).filter(item => item.title.toLowerCase().includes(state.search.toLowerCase())))
        }else{
            setItems(allProducts)
        }
    }, [state.search, state.searchCategory, allProducts])
    const value = {
        ...state,
        dispatch,
        items,
        addToCart,
        removeFromCart,
        addOrder
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
const useApp = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error("useApp must be used within appContext");
    }

    return context;
};

export default useApp;
