import React,{useState} from 'react';
import HomeScreen from './screens/homeScreen';
import Home from './components/SearchAsteroid';

function App() {
  const [data,setData]=useState('');
  const [check,setCheck]=useState(0);
  const [but,setBut]=useState(true)
  const [random,setRandom]=useState(false);

const handler=()=>{
   setCheck(true)
}
const randomHandler=()=>{
  setRandom(true)
}

  return (
    <div className="App containe">
        <input placeholder="Enter Asteroid ID" value={data} onChange={(event)=>{
      if(event.target.value.length===0){
       setBut(true)
      }
      else{
        setBut(false)
      }
      setData(event.target.value)}} style={{margin:"10px"}}/>
    <button onClick={handler} className="btn btn-success" disabled={but} style={{margin:"10px"}}> Search </button>
    <button onClick={randomHandler} className="btn btn-danger" disabled={false} style={{padding:""}}> Random Asteroid </button>
    {random? <Home/>:null}
    {check?<HomeScreen data={data}/>:null}
     </div>
  );
}

export default App;
