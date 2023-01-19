import styled from "styled-components";
import { IoLogOutOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";

function Home() {

  return (
    <PageContainer>
      <TopContainer>
        <p>Olá Fulano!</p>
        <LeaveIcon />
      </TopContainer>
      <MiddleContainer></MiddleContainer>
      <BottomContainer>
        <CommandBox>
          <p>Nova entrada</p>
          <PlusIcon/>
        </CommandBox>
        <CommandBox>
          <p>Nova saída</p>
          <MinusIcon/>
        </CommandBox>
      </BottomContainer>
    </PageContainer>
  );
}

export default Home;

const PageContainer = styled.div`
  height: 700px;
  align-items: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: rgb(140, 16, 190);
`;

const TopContainer = styled.div`
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

const LeaveIcon = styled(IoLogOutOutline)`
  font-size: 30px;
  color: #ffffff;
`;

const MiddleContainer = styled.div`
  align-items: center;
  width: 326px;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 13px;
`;

const BottomContainer = styled.div`
  width: 326px;
  display: flex;
  justify-content: space-between;
`;

const CommandBox = styled.div`
  position: relative;
  width: 155px;
  height: 114px;
  background: #a328d6;
  border-radius: 5px;
  p {
    width:1px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    position: absolute;
    bottom: 15px;
    left: 10px;
    color: #FFFFFF;
  }
`;

const MinusIcon = styled(IoRemoveCircleOutline)`
  top:10px;
  left:10px;
  position:absolute;
  font-size: 22px;
  color: #ffffff;
`;

const PlusIcon = styled(IoAddCircleOutline)`
  top:10px;
  left:10px;
  position:absolute;
  font-size: 22px;
  color: #ffffff;
`;