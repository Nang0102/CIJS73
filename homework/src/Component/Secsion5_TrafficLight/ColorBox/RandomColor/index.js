import "./style.css";
import {useState} from "react"
const RandomColor = () => {
    const colors  =["red", "green", "yellow", "pink"];
    const [color,setColor]= useState("red")

    const onRandomColor=()=>{
        const randomIndex= parseInt(Math.random() * (colors.length-1));
        setColor(colors[randomIndex]);
      
        // console.log("random color", randomIndex);
        // return undefined;
        
    }
  return (
    <div>
      <div className="btnClick"
      style={{background:color}}> </div> 
      <button onClick={onRandomColor}> Random Color </button>{" "}
    </div>
  );
};

export default RandomColor;
