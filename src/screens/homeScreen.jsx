import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../Actions/productActions";
import Loader from "../components/Loader";
import './screen.css';
const HomeScreen = (props) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productListReducer); 
  const { loading, products } = productList;
  useEffect(() => {
    dispatch(listProducts(props)); 
  }, [dispatch]); 
    console.log(productList);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
        <div className="col m-10">{`name :- ${products.name}`}</div>
        <div className="col m-10">{`nasa_jpl_url :- ${products.nasa_jpl_url}`}</div>
        <div className="col m-10">{`is_potentially_hazardous_asteroid :- ${products.is_potentially_hazardous_asteroid}`}</div>
        </div>
      )}
    </>
  );
};
export default HomeScreen;
