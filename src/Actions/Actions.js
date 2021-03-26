import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/Constants";

export const Actions = (props) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
   let url=`https://api.nasa.gov/neo/rest/v1/neo/${props.data}?api_key=3mzjsRZRaHv58DBJRcA1GBbi3hqlhecpHz56Hk3k`;
    console.log(url)
    const  response  = await axios.get(url);
    console.log(response.data)
    const offer=response.data;
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: offer,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: err.message,
    });
  }
};
