import "./index.css";
import { useState } from "react";

const TrafficLight = () => {
  const [lights, setLights] = useState([
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
  ]);
  const handleClickNext = () => {
    const activeLightIndex = lights.findIndex((light) => {
      return light.isActive;
    });
    // console.log(activeLightIndex);
    let nextActiveLightIndex;
    if ( activeLightIndex === lights.length-1){
        nextActiveLightIndex =0;
    } else {
        nextActiveLightIndex = activeLightIndex +1;
    }
    const newLights= [...lights];
    newLights[ activeLightIndex].isActive= false;
    newLights[nextActiveLightIndex].isActive= true;
    setLights(newLights)
  };

  return (
    <div>
      <button onClick={handleClickNext}> Next </button>{" "}
      <div>
        {" "}
        {lights.map((light) => {
          return (
            <div
              className="light"
              style={{ backgroundColor: light.isActive ? light.color : "grey" }}
            >
              {" "}
            </div>
          );
        })}
      </div>{" "}
    </div>
  );
};

export default TrafficLight;
