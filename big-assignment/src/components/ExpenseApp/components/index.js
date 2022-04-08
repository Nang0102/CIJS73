import { useState } from "react";
export const ExpenseApp = () => {
  const [date, setDate] = useState(undefined);
  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={(e) => {
          console.log(e.target.value);
          setDate(e.target.value);
        }}
      ></input>
    </div>
  );
};
