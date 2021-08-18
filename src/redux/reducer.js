import * as actionTypes from './types'

const INITIAL_STATE = {
    productSold:[],
    productCreatedAt:[],
    userData:[],
    category:[],
    relatedProduc:[],
    products:[]
}

const shopReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case actionTypes.GET_PRODUCT_BY_SOLD:
            state.productSold = action.payload;
            return state;
        case actionTypes.GET_PRODUCT_BY_CREATED_AT:
            state.productCreatedAt = action.payload;
            return state;
        case actionTypes.USER_DATA:
            state.userData = action.payload;
            return state;
        case actionTypes.GET_CATEGORY:
            state.category = action.payload;
            return state;
        case actionTypes.GET_FILTER:
            state.productSold = action.payload;
            return state;
        case actionTypes.RELATED_PRODUCT:
            state.relatedProduc = action.payload;
            return state;
        case actionTypes.ALL_PRODUCTS:
            state.products = action.payload;
            return state;
        default:
            return state;
    }
}

export default shopReducer;