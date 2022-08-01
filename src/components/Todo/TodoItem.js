import React, { useState } from "react";
import axios from "axios";
import TodoDetail from "./TodoDetail";
import styled from "styled-components";

const TodoItem = ({ token, todo }) => {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const [modal, setModal] = useState(false);
  const id = todo.id;
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
      `http://localhost:8080/todos/${id}`,
      { title: title, contnet: content },
      {
        headers: { Authorization: token },
      }
    );
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:8080/todos/${id}`, {
        headers: { Authorization: token },
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <Wrapper>
      <li>{todo.title}</li>
      <Button onClick={handleModify}>수정</Button>
      <Button onClick={handleDelete}>삭제</Button>
      <Button onClick={handleModal}>상세보기</Button>
      {modal && <TodoDetail id={id} token={token} modal={modal} />}
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
