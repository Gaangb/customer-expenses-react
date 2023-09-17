import React from "react";
import Container from "../../components/container";
import { useLocation } from "react-router-dom";
import ExpenseList from "../../components/expensesList";
import Header from "../../components/header";

export default function CustomerPage() {
  const location = useLocation();
  const userProfile = location.state?.value;
  console.log(userProfile)
  return (
    <Container customClass="customer_container container">
      <Header />
      <ExpenseList />
    </Container>
  );
}
