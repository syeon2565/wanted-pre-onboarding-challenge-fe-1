import React, { useState } from "react";
import { axios } from "axios";
import TodoDetail from "./TodoDetail";
import styled from "styled-components";

const TodoItem = ({ token, todo }) => {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const [modal, setModal] = useState(false);
  const id = todo.id;
  console.log(id);
  const { title, content } = input;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleModify = () => {
    axios.put(
      "http://localhost:8080/todos",
      { title: title, contnet: content },
      {
        headers: { Authorization: token },
      }
    );
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/todos/${id}`, {
      headers: { Authorization: token },
    });
  };

  const handleModal = () => {
    setModal(true);
  };

  return (
    <Wrapper>
      <li>{todo.title}</li>
      <Button onClick={handleModify}>수정</Button>
      <Button onClick={handleDelete}>삭제</Button>
      <Button onClick={handleModal}>상세보기</Button>
      {modal && <TodoDetail id={id} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10px;
`;
const Button = styled.button`
  margin: 5px;
  width: 93px;
  height: 30px;
  background: rgba(255, 239, 92, 0.7);
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`;

export default TodoItem;
