import styled from "styled-components";
import DepositForm from "../components/DepositForm";

export default function Deposit(){
    return (
        <PageContainer>
            <Title><p>Nova entrada</p></Title>
            <DepositForm></DepositForm>
        </PageContainer>
    )
}


const PageContainer = styled.div`
  height: 700px;
  align-items: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: rgb(140, 16, 190);
`;


const Title = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  width: 320px;
  align-items: center;

  P {
    font-weight: 700;
    font-size: 26px;
    color: #ffffff;
  }
`;