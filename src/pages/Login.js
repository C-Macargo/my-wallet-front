import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";


export default function Login() {

  const navigate = useNavigate();


  return (
    <PageContainer>
      <Title>My Wallet</Title>
      <LoginForm>
      </LoginForm>
      <StyledLink>
        <p           
          onClick={() => {
          navigate('/cadastro');
        }}>Primeira vez? Cadastre-se!</p>
      </StyledLink>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  height:660px;
  align-items:center;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: rgb(140, 16, 190)
`;

const Title = styled.h1`
  font-family: "Saira Stencil One";
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: #FFFFFF;
  margin-top:159px;
  margin-bottom:24px;
`;

const StyledLink = styled.p`
margin-top:36px;
font-weight: 700;
font-size: 15px;
line-height: 18px;
color: #FFFFFF;
`
