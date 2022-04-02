import { useState } from "react";

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([
    { id: 1, hobby: "ảnh" },
    { id: 2, hobby: "đàn" },
  ]);
  return (
    <div>
      <h1> Rate your Hobbies </h1>{" "}
      <ul>
        {" "}
        {hobbies.map((item, idx) => {
          return (
            <li>
              <span> I </span>{" "}
              <select>
                <option> like </option> 
                <option> love </option>{" "}
              </select>{" "}
              <span> {item.hobby} </span>{" "}
            </li>
          );
        })}{" "}
      </ul>{" "}
    </div>
  );
};

export default Hobbies;
