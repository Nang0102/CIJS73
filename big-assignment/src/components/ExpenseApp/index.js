import { useState } from "react";
import { ExpensesList } from "./ExpenseList";
import { AddExpenseForm } from "./../AddExpenseForm/index";

export const ExpenseApp = () => {
  const [expense, setExpense] = useState([
    {
      title: "Buy Books",
      amount: 100,
    },
  ]);
  const addNewExpense = (newExpenseInfo) => {
    setExpense([...expense, newExpenseInfo]);
  };

  return (
    <div>
      <AddExpenseForm addNewExpense={addNewExpense} />
      <ExpensesList expense={expense} />
    </div>
  );
};
