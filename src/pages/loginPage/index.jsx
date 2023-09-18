import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input";
import "./style.css";
import Button from "../../components/button";
import Container from "../../components/container";
import { useCustomer } from "../../hooks/CustomerHooks";

export function LoginPage() {
  const { setIsLogged } = useCustomer();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const [profile, setProfile] = useState({
    email: "",
    password: "",
    name: "",
    id: 0,
  });

  const usersProfile = [
    {
      email: "fliffi@gmail.com",
      password: "snape",
      name: "Fliffi",
      id: 0,
    },
    {
      email: "yoru@gmail",
      password: "louis",
      name: "Yoru",
      id: 1,
    },
  ];

  function renderError() {
    if (!loginError) {
      return null;
    }
    return (
      <div className="alert_error">
        <p>Dados inválidos</p>
      </div>
    );
  }

  function onClickLogin() {
    const user = usersProfile.find(
      (user) =>
        user.email === profile.email && user.password === profile.password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate(`/customer/${user.id}`, { state: { value: user } });
      setIsLogged(true);
    } else {
      setLoginError(true);
    }
  }

  function handleChangeEmail(e) {
    setProfile((profile) => ({
      ...profile,
      email: e.target.value,
    }));
  }

  function handleChangePassword(e) {
    setProfile((profile) => ({
      ...profile,
      password: e.target.value,
    }));
  }

  return (
    <Container customClass="container">
      <h1>Login</h1>
      <div className="login_input">
        <label>Email</label>
        <Input
          title="E-mail"
          type="email"
          placeholder="Digite seu E-mail"
          onChange={handleChangeEmail}
          maxLength={30}
        />
      </div>
      <div className="login_input">
        <label>Senha</label>
        <Input
          title="Senha"
          type="password"
          placeholder="Digite sua senha"
          onChange={handleChangePassword}
          maxLength={12}
        />
        {renderError()}
      </div>
      <Button
        onClick={() => onClickLogin()}
        text="Login"
        customClass="link_button"
      />
    </Container>
  );
}
