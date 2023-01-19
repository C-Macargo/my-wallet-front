import styled from "styled-components";
import WithdrawForm from "../components/WithdrawForm";

export default function WithDraw(){
    return (
        <PageContainer>
            <Title><p>Nova saída</p></Title>
            <WithdrawForm></WithdrawForm>
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