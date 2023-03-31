import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList"
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  
  //States
  const [chosenYear, setChosenYear] = useState("2020");

  //Handlers
  const filterChosenHandler = (filteredYear) => {
    setChosenYear(filteredYear);
    console.log(filteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
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
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
