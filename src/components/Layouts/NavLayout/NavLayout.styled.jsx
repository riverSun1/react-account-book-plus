import { Link } from "react-router-dom";
import styled from "styled-components";

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  background: #fcb620;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Button = styled.button`
  margin: 15px;
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

export const Img = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
  gap: 20px;
`;

export const StLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;
