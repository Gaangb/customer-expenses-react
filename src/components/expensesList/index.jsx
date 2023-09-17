import ExpensiveCard from "../expensiveCard";
import "./style.css";
import { useCustomer } from "../../hooks/CustomerHooks";
import { useEffect } from "react";

export default function ExpenseList() {
  const {
    expenses,
    filteredExpenses,
    isFiltered,
    setFilteredExpenses,
  } = useCustomer();

  useEffect(()=>{
    if(!isFiltered){
      setFilteredExpenses(expenses)
    }

  },[expenses, isFiltered, setFilteredExpenses, filteredExpenses])
  console.log(expenses)

  const renderExpenses = isFiltered ? filteredExpenses : expenses

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
