import AddDataForm from "../components/AddDataForm/AddDataForm";
import Graph from "../components/Graph/Graph";
import MonthList from "../components/MonthList/MonthList";
import PayList from "../components/PayList/PayList";

import styled from "styled-components";

export const Contaier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  h1 {
    color: #f6f7fa;
  }
`;

const Home = () => {
  return (
    <Contaier>
      <h1>💸가계부💰</h1>
      <AddDataForm />
      <MonthList />
      <Graph />
      <PayList />
    </Contaier>
  );
};

export default Home;
