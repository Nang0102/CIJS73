import { useState } from "react";
export const TrafficLight = () => {
  const lights = [
    {
      color: "red",
      isActive: true,
    },
    {
      color: "yellow",
      isActive: false,
    },
    {
      color: "green",
      isActive: false,
    },
  ];
  return 
  <div>
      {
       lights.map(light =>(<div> className="light" style={{backgroundColor:light.color}}</div>))

       }
        
          {/* isActive ?
          <button */}
            {/* onClick ={()=>{setIsActive(true)}}>red</button>
         : <button onClick={()=>{setIsActive(false)}}>yellow</button>
           &
        */}
    </div>