import { ExpenseItem } from "../ExpenseItem";
import "./index.css";

export const ExpensesList = (props) => {
  return (
    <div>
      {props.expense.map((item) => {
        return <ExpenseItem title={item.title} amount={item.amount} />;
      })}
      {/* <ExpenseItem title="Books" amount="100" />
      <ExpenseItem title="Food" amount="50" />
      <ExpenseItem title="Desk" amount="150" /> */}
    </div>
  );
};
