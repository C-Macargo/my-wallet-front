import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registerform() {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")

   function signup(s){
    
    const data = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }

    const postPrommise = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, data);
            postPrommise.then(success => {
                console.log(success)
                navigate("/")
                alert(success.data)
            });
            postPrommise.catch(error => {
                alert(error.message)
                console.log(error)
            });

    s.preventDefault()
   }


    return (
      <Form onSubmit={signup}>
        <Label htmlFor="name">
          <Input placeholder="Nome" id="name" type="text" value={name} onChange={(s) => setName(s.currentTarget.value)}></Input>
        </Label>
        <Label htmlFor="email">
          <Input placeholder="E-mail" id="email" type="text" value={email} onChange={(s) => setEmail(s.currentTarget.value)}></Input>
        </Label>
        <Label htmlFor="password">
          <Input placeholder="Senha" id="password" type="text" value={password} onChange={(s) => setPassword(s.currentTarget.value)}></Input>
        </Label>
        <Label htmlFor="confirm-password">
          <Input placeholder="Confirme a senha" id="password" type="text" value={confirmPassword} onChange={(s) => setconfirmPassword(s.currentTarget.value)} ></Input>
        </Label>
        <SubmitButton type="submit" id="submitbutton">
          <p>Cadastrar</p>
        </SubmitButton>
      </Form>
    );
  }
  
  export default Registerform;
  
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 330x;
  `;
  
  const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 13px;
  `;
  
  const Input = styled.input`
    width: 326px;
    height: 58px;
    border-radius: 5px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    &::placeholder {
         color: black;
  
     }
  `;
  const SubmitButton = styled.button`
    border-style: none;
    background: #a328d6;
    border-radius: 5px;
    border-radius: 4.63636px;
    width: 326px;
    height: 46px;
    p {
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      color: #FFFFFF;
    }
  `;
  