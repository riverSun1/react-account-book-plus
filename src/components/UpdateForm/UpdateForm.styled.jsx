import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 auto;
`;

export const UpdateComponent = styled.div`
  gap: 10px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  align-items: center;
  margin: 30px;
  padding: 25px;
  text-align: start;
  border-radius: 8px;
  font-size: 1.3rem;
  border: 1px solid #999999;
  color: black;
  background: #646464;
  width: 800px;
`;

export const UpdateInput = styled.input`
  width: 100%;
  text-align: start;
  border: 0;
  border-radius: 8px;
  font-size: 1.3rem;
  padding: 10px;
`;

export const UpdateButton = styled.button`
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 1.3rem;
  border: 1px solid #20b150;
  color: black;
  background: #24c459;
  cursor: pointer;
  &:hover {
    background-color: #3ad36d;
  }
`;

export const DeleteButton = styled.button`
  margin: 10px;
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 1.3rem;
  border: 1px solid #f72847;
  color: black;
  background: #e8344e;
  cursor: pointer;
  &:hover {
    background-color: #fa3d59;
  }
`;

export const BackButton = styled.button`
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 1.3rem;
  border: 1px solid #fcac01;
  color: black;
  background: #fcb620;
  cursor: pointer;
  &:hover {
    background-color: #fcc246;
  }
`;
