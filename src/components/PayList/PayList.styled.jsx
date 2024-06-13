import styled from "styled-components";

export const PayListComponent = styled.div`
  padding: 10px;
  border-radius: 8px;
  font-size: 1.6rem;
  border: 1px solid #999999;
  color: black;
  background: #646464;
  margin: 25px 0px;
  width: 97.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 8px;
  font-size: 1.2rem;
  border: 0;
  color: black;
  background: #f6f7fa;
  width: 90%;
  cursor: pointer;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  &:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

export const NoListItem = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const StyleText = styled.div`
  color: #f72847;
  font-weight: bold;
`;
