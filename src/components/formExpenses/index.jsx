import Button from "../button";
import Container from "../container";
import Input from "../input";
import "./style.css";
import { useCustomer } from "../../hooks/CustomerHooks";

export default function FormExpenses() {
  const {
    showFormExpense,
    currentExpense,
    expenses,
    newId,
    setShowFormExpense,
    setCurrentExpense,
    setExpenses,
    setNewId,
  } = useCustomer();

  function onCancelButtonClick() {
    setShowFormExpense(false);
    setCurrentExpense({
      category: "",
      value: 0,
      date: "",
      description: "",
    });
  }

  function onConfirmClick() {
    if (currentExpense.id) {
      const updatedExpenses = expenses.map(expense => {
        if (expense.id === currentExpense.id) {
          return { ...currentExpense }; // Usando spread para copiar os valores
        } else {
          return expense;
        }
      });
  
      setExpenses(updatedExpenses);
      setShowFormExpense(false);
    } else {
      const newExpenseId = Date.now();

      setShowFormExpense(false);
      setExpenses([...expenses, { ...currentExpense, id: newExpenseId }]);
      setNewId(newExpenseId + 1);
    }

    setCurrentExpense({
      category: "",
      value: 0,
      date: "",
      description: "",
    });
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
