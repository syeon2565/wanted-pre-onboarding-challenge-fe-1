import React, { useEffect, useState } from "react";
import TodoInsert from "./TodoInsert";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import axios from "axios";

const TodoTemplate = () => {
  const token = localStorage.getItem("token");
  const [todos, setTodos] = useState([]);
  const count = todos.length;
  useEffect(async () => {
    await axios
      .get("http://localhost:8080/todos", {
        headers: { authorization: token },
      })
      .then((res) => {
        setTodos(res.data.data);
      });
  }, []);

  return (
    <>
      <TodoHeader count={count} />
      <TodoInsert token={token} />
      <TodoList token={token} todos={todos} />
    </>
  );
};

export default TodoTemplate;
