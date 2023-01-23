import styled from "styled-components";
import { useState , useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../AppContext/TokenContext";

function LoginForm() {
  const { setToken } = useContext(TokenContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function login(s){
    
      const data = {
        email: email,
        password: password,
      }
      const postPrommise = axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, data);
              postPrommise.then(success => {
                  navigate("/home")
                  setToken(success.data)
              });
              postPrommise.catch(error => {
                  alert(error.response.data)
                  console.log(error)
              });
    
      s.preventDefault()
     }





  return (
    <Form onSubmit={login}>
      <Label htmlFor="email">
        <Input placeholder="E-mail" id="email" type="text" value={email} onChange={(s) => setEmail(s.currentTarget.value)}></Input>
      </Label>
      <Label htmlFor="password">
        <Input placeholder="Senha" id="password" type="text" value={password} onChange={(s) => setPassword(s.currentTarget.value)} ></Input>
      </Label>
      <SubmitButton type="submit" id="submitbutton">
        <p>Entrar</p>
      </SubmitButton>
    </Form>
  );
}

export default LoginForm;

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
