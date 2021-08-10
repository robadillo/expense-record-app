import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const {expenses} = props;

  return expenses.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
}

export default Expenses;