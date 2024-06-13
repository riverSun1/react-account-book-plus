import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #7a7a7a;
  margin: 30px auto;
  padding: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 400px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

export const Input = styled.input`
  border-radius: 8px;
  padding: 8px 8px;
  text-align: start;
  margin: 5px 0px;
  margin-bottom: 10px;
  font-size: 1rem;
  border: 0;
`;

export const Button = styled.button`
  margin: 10px 0px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid black;
  color: black;
  background: #f72847;
  border: 0;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #fd4763;
  }
`;

export const Span = styled.span`
  color: blue;
  font-weight: normal;
  cursor: pointer;
  &:hover {
    font-weight: bolder;
  }
`;
