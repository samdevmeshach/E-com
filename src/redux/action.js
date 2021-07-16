import * as actionTypes from "./types";
import { getProducts,getCategories } from "../api/apiCore";
export const getProductBySold = (item) => async (dispatch, getState) => {
  const products = await getProducts(item);
  dispatch({
    type: actionTypes.GET_PRODUCT_BY_SOLD,
    payload: products,
  });
};
export const getProductByCreatedAt = (item) => async (dispatch, getState) => {
  const products = await getProducts(item);
  dispatch({
    type: actionTypes.GET_PRODUCT_BY_CREATED_AT,
    payload: products,
  });
};

export const userData = (item) => ({
  type:actionTypes.USER_DATA,
  payload:item
})

export const getCategory = (item) => async (dispatch, getState) => {
  const category = await getCategories();
  dispatch({
    type: actionTypes.GET_CATEGORY,
    payload: category,
  });
};