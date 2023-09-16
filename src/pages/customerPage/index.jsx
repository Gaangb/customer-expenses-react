import React from "react";
import "./style.css";
import Container from "../../components/container";
import ExpenseList from "../../components/expensesList";
import Header from "../../components/header";

export default function CustomerPage() {
  return (
    <Container customClass="customer_container container">
      <Header />
      <ExpenseList />
    </Container>
  );
}
