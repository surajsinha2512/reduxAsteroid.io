import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";
  


export const listProducts = (props) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
   let url=`https://api.nasa.gov/neo/rest/v1/neo/${props.data}?api_key=3mzjsRZRaHv58DBJRcA1GBbi3hqlhecpHz56Hk3k`;
   console.log(url)
    const  response  = await fetch(url);
    const data=await response.json();
    const offer=data;
    // console.log(offer);
  //  console.log(data)
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
