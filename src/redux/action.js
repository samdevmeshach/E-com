import * as actionTypes from "./types";
import { getProducts,getCategories,getFilteredProducts,relatedProducts,allProducts } from "../api/apiCore";
import {deleteProduct,deleteCategory} from "../api/apiAdmin"
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

export const getFilter = (item) => async (dispatch, getState) => {
  const {skip,limit,myFilter} = item;
  const products = await getFilteredProducts(skip,limit,myFilter.filter);
  dispatch({
    type: actionTypes.GET_FILTER,
    payload: products.data,
  });
};
export const relatedProduct = (productId) => async (dispatch, getState) => {
  console.log(productId)
  const products = await relatedProducts(productId);
  console.log(products)
  dispatch({
    type: actionTypes.RELATED_PRODUCT,
    payload: products,
  });
};

export const productList = (item) => async (dispatch, getState) => {
  const product = await allProducts();
  console.log(product)
  dispatch({
    type: actionTypes.ALL_PRODUCTS,
    payload: product,
  });
};

export const deletePro = (user_id,token,id) => async (dispatch, getState) => {
  await deleteProduct(user_id,token,id);
  const product = await allProducts();
  dispatch({
    type: actionTypes.ALL_PRODUCTS,
    payload: product,
  });
};
export const deleteCat = (user_id,token,id) => async (dispatch, getState) => {
  await deleteCategory(user_id,token,id);
  const category = await getCategories();
  dispatch({
    type: actionTypes.GET_CATEGORY,
    payload: category,
  });
};
