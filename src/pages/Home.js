import styled from "styled-components";
import { IoLogOutOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { TokenContext } from "../AppContext/TokenContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link , useNavigate } from 'react-router-dom';



function Home() {
  const navigate = useNavigate();
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
      getBalance()
    });
    getRegistry.catch((error) => {
      console.log(error)
      alert("Seu token expirou");
      navigate('/')
    });

  }, [setHistory]);

  function getBalance(){
    const URL = `${process.env.REACT_APP_API_URL}/balance`;
    const header = { headers: { Authorization: `Bearer ${usertoken}` } };
    const getBalance = axios.get(URL, header);
    getBalance.then((response) => {
      setSaldo(response.data);
  });
  }
  


  return (

    <PageContainer>
      <TopContainer>
        <p>Olá {history.name}!</p>
        <LeaveIcon 
        onClick={() => {
          navigate('/');
        }}
        />
        
      </TopContainer>
      <MiddleContainer>
        <TransactionContainer>
        {!history.wallet || history.wallet.length === 0 ? (
          <Title><p>Não há registros de entrada ou saída</p></Title>
        ) : (
          history.wallet.map((entry, index) => (
            <Entry key={index}>
            <div style={{display:'flex'} }>
            <h1>{entry.date}</h1>
            <h2>{entry.description}</h2>
            </div>
            <p className={entry.type === 'withdraw' ? 'red' : entry.type === 'deposit' ? 'green' : ''}>
              {Number(entry.value).toFixed(2)}
            </p>
          </Entry>
          ))
        )}
        </TransactionContainer>
        {history.wallet && history.wallet.length > 0 ? 
        <SaldoContainer>
          <div style={{display:'flex', justifyContent:'space-between'}}>
              <h1 style={{marginLeft:30}}> Saldo: </h1>
              <div style={{marginRight:30}}><h2 className={saldo > 0 ? "green" : "red"}>{saldo}</h2></div>
          </div>
        </SaldoContainer>: <></>}

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

  h2{
    margin-left:8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  h1{
    margin-left:3px;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
  }

  p{
    margin-right:3px;
  }

`;
const SaldoContainer = styled.div`
  width: 100%;
  position:absolute;
  bottom:10px;

  .red{
    color:red;
}
.green{
    color:green;
}
  
`;

const TransactionContainer = styled.div`
  width: 100%;
  height:93%;
  overflow:auto;
  
`;

const Title = styled.div`
font-size: 20px;
color: #868686;
position:absolute;
text-align: center;
align-items:center;
margin:auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`