import { VscAdd, VscEdit } from "react-icons/vsc";
import "./style.css";
import FormExpenses from "../formExpenses";
import { useCustomer } from "../../hooks/CustomerHooks";
import InputSearch from "../inputSearch";

export default function Header() {
  const { showFormExpense, setShowFormExpense } = useCustomer();

  function onButtonClick() {
    setShowFormExpense(true);
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
      <InputSearch />
    </div>
  );
}
