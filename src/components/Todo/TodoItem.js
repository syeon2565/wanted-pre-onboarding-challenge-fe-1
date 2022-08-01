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
  const [fix, setFix] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleFix = () => {
    setFix(true);
  };

  const handleModify = async () => {
    try {
      await axios.put(
        `http://localhost:8080/todos/${id}`,
        { title: title, content: content },
        {
          headers: { Authorization: token },
        }
      );
      alert("내용 변경이 완료되었습니다.");
      setFix(false);
    } catch (err) {
      console.log(err);
    }
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
      <Button onClick={handleFix}>수정</Button>
      {fix && (
        <TodoFix>
          <input
            onChange={handleChange}
            name="title"
            placeholder="제목을 입력하세요"
            value={title}
          />
          <textarea
            onChange={handleChange}
            name="content"
            placeholder="내용을 입력하세요"
            value={content}
          />
          <Button onClick={handleModify}>내용 변경</Button>
        </TodoFix>
      )}
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

const TodoFix = styled.div`
  display: flex;
  margin-left: 20px;
  input {
    width: 200px;
  }
  textarea {
    width: 200px;
  }
  button {
    display: inline;
    width: 100px;
  }
`;

export default TodoItem;
