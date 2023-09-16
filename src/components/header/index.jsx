import { VscAdd, VscEdit, VscFold } from "react-icons/vsc";
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
    isFiltered,
    setShowFormExpense,
    setCurrentExpense,
    setExpenses,
    setNewId,
    setFilteredExpenses,
    setIsFiltered,
  } = useCustomer();

  function onButtonClick() {
    setShowFormExpense(true);
  }

  function handleSearchExpenses(e) {
    const inputValue = e.target.value.toLowerCase();
    // Verifique se há algum valor na caixa de pesquisa
    if (!inputValue.trim()) {
      setFilteredExpenses(expenses);
      return;
    }

    const filterExpenses = expenses.filter((expense) =>
      expense.category.toLowerCase().includes(inputValue)
    );
    setIsFiltered(true);
    setFilteredExpenses(filterExpenses);
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
			<div className="Container_Filters">
				<div>
					<button type="button">Categoria<VscFold/></button>
				</div>
				<div>
					<button type="button">Valor<VscFold/></button>
				</div>
				</div>
    </div>
  );
}
