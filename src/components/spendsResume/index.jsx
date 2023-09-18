import "./style.css";
import { useCustomer } from "../../hooks/CustomerHooks";
import React from "react";
export function SpendsResume() {
  const { expenses } = useCustomer();

  let expensesByCategory = {};
  let totalExpenses = 0;

  const allCategories = {
    "Água, Energia, Telefone": 0,
    Alimentação: 0,
    Combustivel: 0,
    Lazer: 0,
    Saúde: 0,
    Outras: 0,
  };

  if (Array.isArray(expenses) && expenses.length > 0) {
    expensesByCategory = expenses.reduce((acc, expense) => {
      const { category, value } = expense;
      const parsedAmount = parseFloat(value);
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += parsedAmount;

      return acc;
    }, {});
  }

  expensesByCategory = { ...allCategories, ...expensesByCategory };

  if (Array.isArray(expenses)) {
    totalExpenses = expenses.reduce((acc, expense) => {
      const parsedAmount = parseFloat(expense.value);
      return acc + parsedAmount;
    }, 0);
  }

  return (
    <div className="spends_container">
      <div className="custos_por_categoria">
        <h2>Despesas por Categoria:</h2>
        <ul>
          <div className="categorias_title">
            <div>
              <p>Categoria</p>
            </div>
            <div>
              <p>Valor</p>
            </div>
          </div>
          {Object.entries(expensesByCategory).map(([category, total]) => (
            <div className="categorias_body" key={category}>
              <p>{category}</p>
              <p>R$ {total.toFixed(2)}</p>
            </div>
          ))}
        </ul>
      </div>
      <div className="custos_total">
        <h2>Total de Gastos:</h2>
        <p>R$ {totalExpenses.toFixed(2)}</p>
      </div>
    </div>
  );
}
