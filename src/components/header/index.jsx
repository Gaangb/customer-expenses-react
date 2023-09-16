import { VscAdd, VscEdit } from "react-icons/vsc";
import "./style.css";
import FormExpenses from "../formExpenses";
import { useCustomer } from "../../hooks/CustomerHooks";
import InputSearch from "../inputSearch";

export default function Header() {
  const {
    showFormExpense,
    currentExpense,
    expenses,
    newId,
    filteredExpenses,
    setShowFormExpense,
    setCurrentExpense,
    setExpenses,
    setNewId,
    setFilteredExpenses,
  } = useCustomer();

  function onButtonClick() {
    setShowFormExpense(true);
  }

  function handleSearchExpenses(e) {
      const inputValue = e.target.value.toLowerCase();
      // Verifique se há algum valor na caixa de pesquisa
      if (!inputValue.trim()) {
        setFilteredExpenses([...expenses]);
        return;
      }
  
      const filterExpenses = expenses.filter(expense =>
        expense.category.toLowerCase().includes(inputValue)
      );
  
      setFilteredExpenses(filterExpenses);
      console.log(filteredExpenses)
    }     

  return (
    <div>
      {showFormExpense ? <FormExpenses /> : null}
      <div className="container_header">
        <p>Registro de gastos</p>
        <button onClick={onButtonClick}>
          <VscAdd />
        </button>
      </div>
      <InputSearch onChange={handleSearchExpenses} />
    </div>
  );
}
