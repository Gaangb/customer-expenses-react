import { VscEdit, VscTrash } from "react-icons/vsc";
import "./style.css";
import { useCustomer } from "../../hooks/CustomerHooks";

export default function ExpensiveCard({
  id,
  expenseType,
  expenseValue,
  expenseDate,
  expenseDescription,
}) {
  const {
    showFormExpense,
    currentExpense,
    expenses,
    setShowFormExpense,
    setCurrentExpense,
    setExpenses,
  } = useCustomer();

  function handleEdit(id){
    setShowFormExpense(true)
    setCurrentExpense(expenses.filter(expense => expense.id === id))
    // const updateExpenses = expenses.filter(expense => expense.id === id)
    // setExpenses(updateExpenses)
    console.log(currentExpense)
  }

  function handleDelete(id){
    const updateExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(updateExpenses)
    console.log(id)
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
