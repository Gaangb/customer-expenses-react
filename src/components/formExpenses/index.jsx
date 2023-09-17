import { useParams } from "react-router-dom";

import { useCustomer } from "../../hooks/CustomerHooks";
import Button from "../button";
import Container from "../container";
import Input from "../input";
import "./style.css";

export default function FormExpenses() {
  const {
    currentExpense,
    expenses,
    setShowFormExpense,
    setCurrentExpense,
    setExpenses,
    setNewId,
  } = useCustomer();

  let { id } = useParams();

  const valuesNotSet =
    !currentExpense.category ||
    !currentExpense.value ||
    !currentExpense.date ||
    !currentExpense.description;

  function onCancelButtonClick() {
    setShowFormExpense(false);
    setCurrentExpense({
      category: "",
      value: null,
      date: "",
      description: "",
    });
  }

  console.log("novaID: ", id)
  function onConfirmClick() {
    if (valuesNotSet) {
      setShowFormExpense(true);
      if (!currentExpense.category) {
        alert("Escolha uma categoria");
      } else if (!currentExpense.value) {
        alert("Digite um valor");
      } else if (!currentExpense.date) {
        alert("Selecione uma data");
      } else if (!currentExpense.description) {
        alert("Insira uma descrição");
      }
    } else {
      if (currentExpense.id) {
        const updatedExpenses = expenses.map((expense) =>
          expense.id === currentExpense.id ? { ...currentExpense } : expense
        );
        setExpenses(updatedExpenses);
        setShowFormExpense(false);
      } else {
        const newExpenseId = Date.now();

        setShowFormExpense(false);
        setExpenses([
          ...expenses,
          { ...currentExpense, id: newExpenseId, userId: id },
        ]);
        setNewId(newExpenseId + 1);
      }

      setCurrentExpense({
        category: "",
        value: null,
        date: "",
        description: "",
      });
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setCurrentExpense({
      ...currentExpense,
      [name]: value,
    });
  }

  return (
    <Container customClass="form_container">
      <div className="form_select">
        <select
          name="category"
          onChange={handleInputChange}
          value={currentExpense.category}
        >
          <option disabled selected value="">
            Selecione a categoria
          </option>
          <option>Água, Energia, Telefone</option>
          <option>Alimentação</option>
          <option>Combustivel</option>
          <option>Lazer</option>
          <option>Saúde</option>
          <option>Outras</option>
        </select>
      </div>
      <div className="form_search">
        <Input
          name="value"
          type="number"
          maxLength={15}
          customClass="search form_input"
          placeholder="Digite o valor"
          value={currentExpense.value}
          onChange={handleInputChange}
        />
      </div>
      <div className="form_search">
        <Input
          name="date"
          type="date"
          maxLength={15}
          customClass="search form_input"
          placeholder="Digite quando aconteceu"
          value={currentExpense.date}
          onChange={handleInputChange}
        />
      </div>
      <div className="form_search">
        <Input
          name="description"
          type="text"
          maxLength={100}
          customClass="search form_input"
          placeholder="Descrição"
          value={currentExpense.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="form_container_button">
        <Button
          text="Cancelar"
          customClass="form_button"
          onClick={onCancelButtonClick}
        />
        <Button
          text="Confirmar"
          customClass="form_button"
          onClick={onConfirmClick}
        />
      </div>
    </Container>
  );
}
