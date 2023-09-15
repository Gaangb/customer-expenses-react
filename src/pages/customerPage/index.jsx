import React from 'react'
import './style.css'
import Container from '../../components/container';
import InputSearch from '../../components/inputSearch';
import ExpenseList from '../../components/expensesList';


export default function CustomerPage() {


  return (
    <Container customClass='container'>
      <InputSearch/>
      <ExpenseList />
    </Container>
  );
}

