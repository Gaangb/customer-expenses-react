import { VscEdit, VscTrash } from "react-icons/vsc";
import "./style.css";
import { useCustomer } from "../../hooks/CustomerHooks";
import { useEffect } from "react";

export default function ExpensiveCard({
  id,
  expenseType,
  expenseValue,
  expenseDate,
  expenseDescription,
}) {

  const {
    expenses,
    setShowFormExpense,
    setCurrentExpense,
    setExpenses,
  } = useCustomer();

  function handleEdit(id) {
    setShowFormExpense(true);
    const editedExpense = expenses.find((expense) => expense.id === id);
    setCurrentExpense({
      id: editedExpense.id,
      category: editedExpense.category,
      value: editedExpense.value,
      date: editedExpense.date,
      description: editedExpense.description,
    });
  }

  function handleDelete(id) {
    const updateExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updateExpenses);
    console.log(id);
  }

  return (
    <div className="container_card">
      <div className="container_card_texts">
        <p>{expenseType}</p>
        <p>{expenseDescription}</p>
      </div>
      <div className="container_card_rigth">
        <div className="container_card_texts">
          <p>R$ {expenseValue}</p>
          <p>{expenseDate}</p>
        </div>
        <div className="container_card_buttons">
          <button onClick={() => handleEdit(id)}>
            <VscEdit />
          </button>
          <button onClick={() => handleDelete(id)}>
            <VscTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
