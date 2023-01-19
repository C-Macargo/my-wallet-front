import styled from "styled-components";

function LoginForm() {
  return (
    <Form>
      <Label htmlFor="email">
        <Input placeholder="E-mail" id="email" type="text"></Input>
      </Label>
      <Label htmlFor="password">
        <Input placeholder="Senha" id="password" type="text"></Input>
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
