import React from "react";
import axios from "axios";

const TodoDetail = (id) => {
  const token = localStorage.getItem("token");
  const detail = () => {
    axios.get(`http://localhost:8080/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  };
  return (
    <>
      {detail.map((todo) => (
        <>
          <li>{todo.title}</li>
          <li>{todo.content}</li>
          <li>{todo.createdAt}</li>
          <li>{todo.updatedAt}</li>
        </>
      ))}
    </>
  );
};

export default TodoDetail;
