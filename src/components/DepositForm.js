import styled from "styled-components";
import { useState , useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../AppContext/TokenContext";



  function DepositForm() {
    const navigate = useNavigate();
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")
    const { token } = useContext(TokenContext);
    const usertoken = token;
    function deposit(s){
      
        const data = {
          value: value,
          description : description,
          type : "deposit"
        }
        const header = { headers: { Authorization: `Bearer ${usertoken}` } };
        const postPrommise = axios.post(`${process.env.REACT_APP_API_URL}/transaction`, data, header);
                postPrommise.then(success => {
                    alert(success.statusText)
                    navigate("/home")
                });
                postPrommise.catch(error => {
                    alert(error.message)
                    console.log(error)
                });
      
        s.preventDefault()
       }


  return (
    <Form onSubmit={deposit}>
      <Label htmlFor="valor">
        <Input placeholder="Valor" id="valor" type="text" value={value} onChange={(s) => setValue(s.currentTarget.value.replace(/,/g, '.'))}></Input>
      </Label>
      <Label htmlFor="descricao">
        <Input placeholder="Descrição" id="descricao" type="text" value={description} onChange={(s) => setDescription(s.currentTarget.value)}></Input>
      </Label>
      <SubmitButton type="submit" id="submitbutton">
        <p>Salvar entrada</p>
      </SubmitButton>
    </Form>
  );
}

export default DepositForm;

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
