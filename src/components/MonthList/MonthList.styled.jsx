import styled from "styled-components";

export const MonthComponent = styled.div`
  margin: 25px 0px;
  padding: 15px;
  border-radius: 8px;
  font-size: 1.6rem;
  line-height: 1.5;
  border: 1px solid #999999;
  background: #646464;
`;

export const MonthButton = styled.button`
  margin: 7px;
  flex-wrap: wrap;
  width: 50px;
  height: 38px;
  padding: 5px;
  border-radius: 8px;
  font-size: 1.1rem;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  /* 활성화된 상태일 때의 스타일 */
  color: ${(props) => (props.$isActive ? "white" : "black")};
  background: ${(props) => (props.$isActive ? "#f72847" : "#f6f7fa")};
  border: 0;
  cursor: pointer;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
