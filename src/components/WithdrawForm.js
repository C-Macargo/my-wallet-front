import styled from "styled-components";

function WithdrawForm() {
  return (
    <Form>
      <Label htmlFor="valor">
        <Input placeholder="Valor" id="valor" type="text"></Input>
      </Label>
      <Label htmlFor="descricao">
        <Input placeholder="Descrição" id="descricao" type="text"></Input>
      </Label>
      <SubmitButton type="submit" id="submitbutton">
        <p>Salvar saída</p>
      </SubmitButton>
    </Form>
  );
}

export default WithdrawForm;

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
