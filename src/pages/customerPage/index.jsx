import React from "react";
import Container from "../../components/container";
import { useLocation, useParams } from "react-router-dom";
import ExpenseList from "../../components/expensesList";
import Header from "../../components/header";

export default function CustomerPage() {
  let { id } = useParams();
  //console.log("idCustomer", id);
  const location = useLocation();
  const userProfile = location.state?.value;
  //console.log(userProfile)
  return (
    <Container customClass="customer_container container">
      <Header />
      <ExpenseList />
    </Container>
  );
}
