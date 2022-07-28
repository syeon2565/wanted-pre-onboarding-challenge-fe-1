import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <>
      <li>{todo.title}</li>
      <button>수정</button>
      <button>삭제</button>
      <button>상세보기</button>
    </>
  );
};

export default TodoItem;
