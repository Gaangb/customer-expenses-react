import { useEffect } from "react";

import { useCustomer } from "../../hooks/CustomerHooks";
import ExpensiveCard from "../expensiveCard";
import "./style.css";

export default function ExpenseList() {
  const { 
    expenses, 
    filteredExpenses, 
    isFiltered, 
    setFilteredExpenses 
  } = useCustomer();

  useEffect(() => {
    if (!isFiltered) {
      setFilteredExpenses(expenses);
    }
  }, [expenses, isFiltered, setFilteredExpenses, filteredExpenses]);

  const renderExpenses = isFiltered ? filteredExpenses : expenses;

  return (
    <div className="container_list">
      {renderExpenses.map((note) => (
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
