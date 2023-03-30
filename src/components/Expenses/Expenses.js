import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  
  //States
  const [chosenYear, setChosenYear] = useState("2020");

  //Handlers
  const filterChosenHandler = (filteredYear) => {
    setChosenYear(filteredYear);
    console.log(filteredYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === chosenYear;
  });

  //Return 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={chosenYear}
          onFilterChosen={filterChosenHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
