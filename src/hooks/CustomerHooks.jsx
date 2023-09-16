import { createContext, useContext, useState } from "react";

const CustomerContext = createContext()

export function CustomerProvider({children}){
    const [expenses, setExpenses] = useState([])
    const [showFormExpense, setShowFormExpense] = useState(false)
    const [newId, setNewId] = useState(1)
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
            setShowFormExpense,
            setCurrentExpense,
            setExpenses,
            setNewId
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