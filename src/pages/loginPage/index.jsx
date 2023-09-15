import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input'
import './style.css'
import Button from '../../components/button';
import Container from '../../components/container';

export function LoginPage(){
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState(false);
    const [profile, setProfile] = useState({
        email: '',
        password: ''
    })
    const userProfile = {
        email: "fliffi@gmail.com",
        password: "snape"
    }

    function renderError(){
        if(!loginError){
            return null
        }
        return(
            <div className='alert_error'>
                <p>Dados inválidos</p>
            </div>
        )
    }

    function onClickLogin(){
        if(profile.email === userProfile.email && profile.password === userProfile.password){
            navigate("/customer")
        } else{
            console.log("Não entrou")
            setLoginError(true)
        }
    }

    function handleChangeEmail(e){
        setProfile(profile => ({
            ...profile,
            email: e.target.value
        }))
        console.log(e.target.value)
    }
    
    function handleChangePassword(e){
        setProfile(profile => ({
            ...profile,
            password: e.target.value
        }))
      console.log(e.target.value)
    }


  return (
    <Container customClass='container'>
        <h1>Login</h1>
        <div className='login_input'>
            <label>Email</label>
            <Input type="email" placeholder="Digite seu E-mail" onChange={handleChangeEmail} maxLength={30}/>
        </div>
        <div className='login_input'>
            <label>Senha</label>
            <Input type="password" placeholder="Digite sua senha" onChange={handleChangePassword} maxLength={12}/>
            {renderError()}
        </div>
        <Button onClick={onClickLogin} text="Login"/>
    </Container>
  )
}

