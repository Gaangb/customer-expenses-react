import { useEffect, useState } from "react";

import { useCustomer } from "../../hooks/CustomerHooks";
import { VscAdd } from "react-icons/vsc";
import { TiSortAlphabetically } from "react-icons/ti";
import { PiListNumbersBold } from "react-icons/pi";

import FormExpenses from "../formExpenses";
import InputSearch from "../inputSearch";
import ButtonChangingColor from "../buttonChangingColor";
import "./style.css";

export default function Header() {
  const {
    showFormExpense,
    expenses,
    setShowFormExpense,
    setFilteredExpenses,
    setIsFiltered,
  } = useCustomer();

  const [isCategorySorted, setIsCategorySorted] = useState(false);
  const [isValueSorted, setIsValueSorted] = useState(false);
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

  function sortExpensesByValue() {
    const sortedExpenses = [...expenses];

    sortedExpenses.sort((a, b) => {
      const valueA = parseFloat(a.value);
      const valueB = parseFloat(b.value);
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
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

  function handleCategoryClick() {
    setIsCategorySorted(!isCategorySorted);
    setIsValueSorted(false);
    setIsButtonColorCategory(!isButtonColorCategory);
    setIsButtonColorValue(false);
  }

  function handleValueClick() {
    setIsButtonColorValue(!isButtonColorValue);
    setIsButtonColorCategory(false);
    setIsValueSorted(!isValueSorted);
    setIsCategorySorted(false);
  }

  useEffect(() => {
    if (isCategorySorted) {
      const sortedExpenses = sortExpensesByCategory();
      setFilteredExpenses(sortedExpenses);
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }, [isCategorySorted]);

  useEffect(() => {
    if (isValueSorted) {
      const sortedExpenses = sortExpensesByValue();
      setFilteredExpenses(sortedExpenses);
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }, [isValueSorted]);

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
            icon={<TiSortAlphabetically />}
            isColor={isButtonColorCategory}
          />
        </div>
        <div>
          <ButtonChangingColor
            onClick={handleValueClick}
            type="button"
            text="Valor"
            icon={<PiListNumbersBold />}
            isColor={isButtonColorValue}
          />
        </div>
      </div>
    </div>
  );
}
