import { createContext, useContext, useState } from "react";

const CustomerContext = createContext()

export function CustomerProvider({children}){
    const [expenses, setExpenses] = useState([])
    const [filteredExpenses, setFilteredExpenses] = useState([])
    const [showFormExpense, setShowFormExpense] = useState(false)
    const [newId, setNewId] = useState(null)
    const [currentExpense, setCurrentExpense] = useState({
        id: 0,
        category: "",
        value: 0,
        date: "",
        description: ""
    })

    return(
        <CustomerContext.Provider value={{
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
        }}>
            {children}
        </CustomerContext.Provider>
    )
}

export function useCustomer() {
    const context = useContext(CustomerContext);

    if (!context) {
        throw new Error('useCustomer must be used within an ExpenseProvider')
    }

    return context;
}