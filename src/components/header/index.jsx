import { VscAdd, VscFold } from "react-icons/vsc";
import "./style.css";
import FormExpenses from "../formExpenses";
import { useCustomer } from "../../hooks/CustomerHooks";
import InputSearch from "../inputSearch";
import ButtonChangingColor from "../buttonChangingColor";
import { useEffect, useState } from "react";

export default function Header() {
  const {
    showFormExpense,
    expenses,
		filteredExpenses,
		isFiltered,
    setShowFormExpense,
    setFilteredExpenses,
    setIsFiltered,
  } = useCustomer();

	const [isCategorySorted, setIsCategorySorted] = useState(false)
	const [isValueSorted, setIsValueSorted] = useState(false)
  const [isButtonColorCategory, setIsButtonColorCategory] = useState(false);
  const [isButtonColorValue, setIsButtonColorValue] = useState(false);

	function sortExpensesByCategory() {
		const sortedExpenses = [...expenses];
	
		sortedExpenses.sort((a, b) => {
			const categoryA = a.category.toLowerCase();
			const categoryB = b.category.toLowerCase();
			if (categoryA < categoryB) return -1;
			if (categoryA > categoryB) return 1;
			return 0;
		});
	
		return sortedExpenses;
	}

  function onButtonClick() {
    setShowFormExpense(true);
  }

  function handleSearchExpenses(e) {
    const inputValue = e.target.value.toLowerCase();
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

	console.log("fora: ", isCategorySorted)

  function handleCategoryClick() {
    console.log("entrou");
		setIsCategorySorted(!isCategorySorted);
    setIsValueSorted(false);
    setIsButtonColorCategory(!isButtonColorCategory);
    setIsButtonColorValue(false);
    console.log("dentro: ", isCategorySorted)

    if (isCategorySorted) {
      console.log("entrou 2");
      const sortedExpenses = sortExpensesByCategory();
			setIsFiltered(!isFiltered);
      setFilteredExpenses(sortedExpenses);

    }
  }

  function handleValueClick() {
		setIsButtonColorValue(!isButtonColorValue)
    setIsButtonColorCategory(false)
		setIsValueSorted(!isValueSorted)
    setIsCategorySorted(false)
    console.log("Outro evento de valor: ", isValueSorted);
  }

  // useEffect(() => {

	// 	if(isFiltered){
	// 		setFilteredExpenses(sortExpensesByCategory())
	// 	}
	// }, [isButtonColorCategory])

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
          <ButtonChangingColor
            onClick={handleCategoryClick}
            type="button"
            text="Categoria"
            icon={<VscFold />}
						isColor={isButtonColorCategory}
          />
        </div>
        <div>
          <ButtonChangingColor
            onClick={handleValueClick}
            type="button"
            text="Valor"
            icon={<VscFold />}
						isColor={isButtonColorValue}
          />
        </div>
      </div>
    </div>
  );
}
