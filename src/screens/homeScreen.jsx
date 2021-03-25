import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../Actions/productActions";
import Loader from "../components/Loader";
import './screen.css';
const HomeScreen = (props) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productListReducer); //grab data from state
  const { loading, products } = productList;
  useEffect(() => {
    dispatch(listProducts(props)); //firing of the action to get data and send it through the reducer down into the state
  }, [dispatch]); 
    console.log(productList);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
        <div className="col">{`name :- ${products.name}`}</div>
        <div className="col">{`nasa_jpl_url :- ${products.nasa_jpl_url}`}</div>
        <div className="col">{`is_potentially_hazardous_asteroid :- ${products.is_potentially_hazardous_asteroid}`}</div>
        </div>
      )}
    </>
  );
};
export default HomeScreen;
