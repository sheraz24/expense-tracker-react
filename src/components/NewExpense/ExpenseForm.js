import React, { useState } from "react";
import "./ExpenseForm.css";

//58-added props to the expenseform, which was not there before.
function ExpenseForm(props) {
  const [formOpen, setFormOpen] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const openSubmissionForm = () => {
    setFormOpen(true);
  };

  if (formOpen === false) {
    return <button onClick={openSubmissionForm}>Add New Expense</button>;
  }

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const cancelHandler = (event) => {
    setFormOpen(false);
  };
  const submitHandler = (event) => {
    //56-this overrides the submission default page reload
    event.preventDefault();

    //56-these are state numbers!
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //58-this is the child-parent communication piece. Uses props from NewExpense.js
    //expenseData is used there, but defined here.
    props.onSaveExpenseData(expenseData);

    //57-this resets the form after submission - two way binding
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    setFormOpen(false);
  };

  //57. added reset points with value attribute
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" value="Submit">
          Add Expense
        </button>
        <button value="Cancel" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
