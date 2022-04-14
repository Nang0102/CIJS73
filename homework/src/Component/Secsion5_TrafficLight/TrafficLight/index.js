import "./style.css";
 import { useState } from 'react';
const TrafficLight = () => {

  const [light,setLight]= useState()
  console.log("hi")



  const onClickNext=()=>{
    setLight()
    // console.log("hello");
    
  }
  

  return (
    <div>
      <div> </div> 
      <button onClick={onClickNext}> Next </button>
      <div>
        <div className="light" style ={{backgroundColor:"red"}}>{light}</div>
        <div className="light"  ></div>
        <div className="light"  ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
