import React from "react";
import styled from "styled-components";

const TodoHeader = ({ count }) => {
  return <Header>할 일 {count} </Header>;
};

const Header = styled.div`
  margin-bottom: 10px;
  font-size: 30px;
`;

export default TodoHeader;
