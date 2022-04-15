// import "./style.css";
import { useState } from "react";
const TrafficLight = () => {
  const colors = ["red", "green", "yellow"];

  const [light, setLight] = useState("red");
  // console.log("hi")

  const onClickNext = () => {
    setLight();
  };

  return (
    <div>
      <button onClick={onClickNext}> Next </button>{" "}
      <div>
        <div className="light" style={{ backgroundColor: light }}>
          {" "}
        </div>{" "}
        <div className="light" style={{ backgroundColor: light }}>
          {" "}
        </div>{" "}
        <div className="light" style={{ backgroundColor: light }}>
          {" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default TrafficLight;
