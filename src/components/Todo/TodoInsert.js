import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const TodoInsert = (token) => {
  const [todos, setTodos] = useState({ title: "", content: "" });
  const { title, content } = todos;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodos({
      ...todos,
      [name]: value,
    });
  };
  const handleCreate = () => {
    axios
      .post(
        "http://localhost:8080/todos",
        { title: title, content: content },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(() => {
        alert("ToDo가 추가되었습니다.");
      })
      .catch(() => {
        alert("잘못된 요청입니다. 내용을 채워주세요.");
      });
  };
  return (
    <div>
      <InputTitle
        name="title"
        placeholder="할 일의 제목을 입력하세요!"
        onChange={handleChange}
      />
      <br />
      <InputContent
        name="content"
        cols="20"
        rows="15"
        placeholder="상세 내용을 입력하세요!"
        onChange={handleChange}
      />
      <Button onClick={handleCreate}>추가하기</Button>
    </div>
  );
};

const InputTitle = styled.input`
  width: 288px;
  height: 65px;
  font-size: 20px;
  margin-left: -200px;
  background: rgba(255, 248, 188, 0.7);
  border: 0;
  border-radius: 10px;
`;

const InputContent = styled.textarea`
  width: 288px;
  height: 147px;
  margin-left: -200px;
  margin-top: 16px;
  background: rgba(255, 248, 188, 0.7);
  border: 0;
  font-size: 20px;
  border-radius: 10px;
`;

const Button = styled.button`
  position: absolute;
  left: 300px;
  width: 144px;
  height: 209px;
  font-size: 30px;
  left: 430px;
  top: 110px;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgba(255, 239, 92, 0.7);
  border: 2px solid yellow;
`;

export default TodoInsert;
