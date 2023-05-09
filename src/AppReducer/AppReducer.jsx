import actionTypes from "../actions/types.js";

export const initialState = {
    cartCount: 0,
    isVisibleDetail: false,
    productVisibleInDetail: {},
    isCheckoutSideMenuOpen: false,
    cartProducts: [],
    totalPrice: 0,
    order: [],
    total: 0,
    products: []
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
    [actionTypes.TOTAL_PRICE]: {
        ...state,
        totalPrice: payload
    },
    [actionTypes.ORDER]: {
        ...state,
        order: payload
    },
    [actionTypes.ORDERS]: {
        ...state,
        orders: payload
    },
})

export const AppReducer = (state = initialState, action) => {
    return reducerMap(state)[action.type]
        ? reducerMap(state, action.payload)[action.type]
        : state
}

export default AppReducer