import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const TodoDetail = ({ id, token }) => {
  const [detail, setDetail] = useState([]);
  axios
    .get(`http://localhost:8080/todos/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      setDetail(res.data.data);
    });

  return (
    <Portal>
      <ModalWrapper>
        <p>제목 : {detail.title}</p>
        <p>내용 : {detail.content}</p>
        <p>생성 날짜 : {detail.createdAt}</p>
        <p>업데이트 날짜 : {detail.updatedAt}</p>
      </ModalWrapper>
    </Portal>
  );
};

const Portal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background: rgb(0 0 0 / 40%);
  width: 100%;
  height: 100%;
`;

const ModalWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  background: #fff;
  padding: 30px 20px;
  text-align: center;
  width: 400px;
  height: 60%;
`;

export default TodoDetail;
