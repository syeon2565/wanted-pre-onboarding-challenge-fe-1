import React, { useState } from "react";
import axios from "axios";

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
      <input
        name="title"
        placeholder="할 일의 제목을 입력하세요!"
        onChange={handleChange}
      />
      <br />
      <textarea
        name="content"
        cols="20"
        rows="15"
        placeholder="상세 내용을 입력하세요!"
        onChange={handleChange}
      />
      <button onClick={handleCreate}>추가하기</button>
    </div>
  );
};

export default TodoInsert;
