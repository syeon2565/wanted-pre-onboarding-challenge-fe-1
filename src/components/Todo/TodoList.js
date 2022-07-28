import React, { useCallback, useMemo, useState } from "react";
import axios from "axios";
import TodoDetail from "./TodoDetail";
import TodoItem from "./TodoItem";

const TodoList = ({ token, todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
