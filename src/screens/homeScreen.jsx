import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../Actions/Actions";
import Loader from "../components/Loader";
import './screen.css';

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.Reducer); 
  const { loading, products } = dataList;
  useEffect(() => {
    dispatch(Actions(props)); 
  }, [dispatch]); 
   console.log(dataList);
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
