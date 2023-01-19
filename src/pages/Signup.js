import styled from "styled-components";
import RegisterForm from "../components/Registerform";

function Signup() {
  return (
    <PageContainer>
      <Title>My Wallet</Title>
      <RegisterForm>
      </RegisterForm>
      <StyledLink>
        <p>Já tem uma conta? Entre agora!</p>
      </StyledLink>
    </PageContainer>
  );
}


export default Signup

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
  margin-top:95px;
  margin-bottom:24px;
`;

const StyledLink = styled.p`
margin-top:36px;
font-weight: 700;
font-size: 15px;
line-height: 18px;
color: #FFFFFF; 
` 