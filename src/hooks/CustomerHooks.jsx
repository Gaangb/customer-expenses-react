import { createContext, useContext, useState } from "react";

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [showFormExpense, setShowFormExpense] = useState(false);
  const [newId, setNewId] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);
  const [currentExpense, setCurrentExpense] = useState({
    userId: null,
    id: 0,
    category: "",
    value: null,
    date: "",
    description: "",
  });

  return (
    <CustomerContext.Provider
      value={{
        // profile,
        showFormExpense,
        currentExpense,
        expenses,
        newId,
        filteredExpenses,
        isFiltered,
        // setProfile,
        setShowFormExpense,
        setCurrentExpense,
        setExpenses,
        setNewId,
        setFilteredExpenses,
        setIsFiltered,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomer() {
  const context = useContext(CustomerContext);

  if (!context) {
    throw new Error("useCustomer must be used within an ExpenseProvider");
  }

  return context;
}
