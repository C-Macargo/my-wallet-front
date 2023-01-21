import styled from "styled-components";
import { IoLogOutOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { TokenContext } from "../AppContext/TokenContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Home() {
  const [saldo, setSaldo] = useState(0);
  const [history, setHistory] = useState([]);
  const { token } = useContext(TokenContext);
  const usertoken = token;

  useEffect(() => {
    const URL = `${process.env.REACT_APP_API_URL}/wallet`;
    const header = { headers: { Authorization: `Bearer ${usertoken}` } };
    const getRegistry = axios.get(URL, header);
    getRegistry.then((response) => {
      setHistory(response.data);
      if (history && history.wallet && Array.isArray(history.wallet) && history.wallet.length > 0) {
        calcSaldo()
    }
    });
  }, [history]);

  function calcSaldo(){
    let filanSaldo = 0
    history.wallet.map((s) => s.type === 'withdraw' ? filanSaldo -= s.value : filanSaldo += parseInt(s.value))
    setSaldo(filanSaldo)
  }

  return (

    <PageContainer>
      <TopContainer>
        <p>Olá {history.name}!</p>
        <LeaveIcon />
      </TopContainer>
      <MiddleContainer>

        {!history.wallet || history.wallet.length === 0 ? (
          <p>Não há registros de entrada ou saída</p>
        ) : (
          history.wallet.map((entry, index) => (
            <Entry key={index}>
            <p2>{entry.date}</p2>
            <p>{entry.description}</p>
            <p className={entry.type === 'withdraw' ? 'red' : entry.type === 'deposit' ? 'green' : ''}>
              {entry.value}
            </p>
          </Entry>
          ))
        )}
        
        <SaldoContainer>
        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
          <h1 style={{marginLeft:30}}> Saldo: </h1>
          <div style={{marginRight:30}}>{saldo}</div>
          </div>
        </SaldoContainer>
      </MiddleContainer>
      <BottomContainer>
      <Link to='/nova-entrada'>
        <CommandBox >
          <p>Nova entrada</p>
          <PlusIcon />
        </CommandBox > 
        </Link>

      <Link to='/nova-saida'>
        <CommandBox>
          <p>Nova saída</p>
          <MinusIcon />
        </CommandBox>
        </Link>
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
  overflow:auto;
  
  .red{
    color:red;
}
.green{
    color:green;
}

position:relative;

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
    width: 1px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    position: absolute;
    bottom: 15px;
    left: 10px;
    color: #ffffff;
  }
`;

const MinusIcon = styled(IoRemoveCircleOutline)`
  top: 10px;
  left: 10px;
  position: absolute;
  font-size: 22px;
  color: #ffffff;
`;

const PlusIcon = styled(IoAddCircleOutline)`
  top: 10px;
  left: 10px;
  position: absolute;
  font-size: 22px;
  color: #ffffff;
`;

const Entry = styled.div`
  margin-top:9px;
  display:flex;
  justify-content:space-between;

`;
const SaldoContainer = styled.div`
  width: 100%;
  position:absolute;
  bottom:10px;
  
`;


