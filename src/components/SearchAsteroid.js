import axios from 'axios';
import React,{useState,useEffect} from 'react';

const Random=(props)=>{
const [data,setData]=useState([]);
useEffect(()=>{
    axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY').then((r)=>{
       return r.data
    }).then((r)=>{
        setData(state=>[...state,...r.near_earth_objects])
    })
},[])

    return(
        <>
          <div className="container">
              <div className="col">
              Asteroid ID
                  {data.map((v)=>{
                     return(
                         <>
                         <div className="">{v.id}</div>
                         </>
                     )
                  })}
              </div>
          </div>
        </>
    )
}

export default Random;