import axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  SINGLE_PRODUCT_FAIL,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
} from "../constants/productConstants.js";

const HOST = "http://127.0.0.1:8500"

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(`${HOST}/api/products`);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const singleProduct = (id) => async (dispatch) => {
    try {
      dispatch({ type: SINGLE_PRODUCT_REQUEST });
      const { data } = await axios.get(`${HOST}/api/products/${id}`);
      dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: SINGLE_PRODUCT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
