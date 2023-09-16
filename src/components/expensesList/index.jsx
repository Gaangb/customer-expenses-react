import ExpensiveCard from "../expensiveCard";
import "./style.css";
import { useCustomer } from "../../hooks/CustomerHooks";

export default function ExpenseList() {
  const { showFormExpense, expense, expenses, setShowFormExpense, setExpense, setExpenses } =
    useCustomer();

  return (
    <div className="container_list">
      {expenses.map((note) => (
        <div key={note.id}>
          <ExpensiveCard
            id={note.id}
            expenseType={note.category}
            expenseValue={note.value}
            expenseDate={note.date}
            expenseDescription={note.description}
          />
        </div>
      ))}
    </div>
  );
}
