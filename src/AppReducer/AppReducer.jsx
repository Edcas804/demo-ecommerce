import actionTypes from "../actions/types.js";

export const initialState = {
    cartCount: 0,
    isVisibleDetail: false,
    productVisibleInDetail: {},
    isCheckoutSideMenuOpen: false,
    cartProducts: [],
    updatePrice: 0,
    total: 0,
    products: []
};


const AppReducer_bk = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "ADD_TO_CART":
            console.log("ADD_TO_CART", payload);

            return {
                ...state,
                products: payload.products
            };
        case "REMOVE_FROM_CART":
            console.log("REMOVE_FROM_CART", payload);

            return {
                ...state,
                products: payload.products
            };
        case "UPDATE_PRICE":
            console.log("UPDATE_PRICE", payload);

            return {
                ...state,
                total: payload.total
            };
        default:
            throw new Error(`No case for type ${type} found in shopReducer.`);
    }
};

const reducerMap = (state, payload) => ({
    [actionTypes.CART_COUNT]: {
        ...state,
        cartCount: payload
    },
    [actionTypes.IS_VISIBLE_DETAIL]: {
        ...state,
        isVisibleDetail: payload
    },
    [actionTypes.PRODUCT_VISIBLE_IN_DETAIL]: {
        ...state,
        productVisibleInDetail: payload
    },
    [actionTypes.IS_CHECK_OUT_SIDE_MENU_OPEN]: {
        ...state,
        isCheckoutSideMenuOpen: payload
    },
    [actionTypes.CART_PRODUCTS]: {
        ...state,
        cartProducts: payload
    },
    [actionTypes.UPDATE_PRICE]: {
        ...state,
        updatePrice: payload
    }
})

export const AppReducer = (state = initialState, action) => {
    return reducerMap(state)[action.type]
        ? reducerMap(state, action.payload)[action.type]
        : state
}

export default AppReducer