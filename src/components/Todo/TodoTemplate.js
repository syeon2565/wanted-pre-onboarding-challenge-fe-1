import React, { useEffect, useState } from "react";
import TodoInsert from "./TodoInsert";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import axios from "axios";
import styled from "styled-components";

const TodoTemplate = () => {
  const token = localStorage.getItem("token");
  const [todos, setTodos] = useState([]);
  const count = todos.length;

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:8080/todos", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setTodos(res.data.data);
        });
    }
    fetchData();
  }, [todos]);

  return (
    <TemplateWrapper>
      <TodoHeader count={count} />
      <TodoInsert token={token} />
      <TodoList token={token} todos={todos} />
    </TemplateWrapper>
  );
};

const TemplateWrapper = styled.div`
  width: 580px;
  min-height: 742px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  justify-content: center;
  background: #ffc9c9;
  border-radius: 20px;
`;

export default TodoTemplate;
