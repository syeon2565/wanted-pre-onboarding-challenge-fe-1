import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const nameRegex = /^[가-힣]{2,5}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
  const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { name, email, password, passwordConfirm } = inputs;

  const onChange = (e) => {
    const { id, value } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
    checkReg();
  };

  const checkReg = () => {
    if (
      nameRegex.test(name) &&
      pwdRegex.test(password) &&
      emailRegex.test(email) &&
      password === passwordConfirm
    )
      setBtnDisabled(false);
  };
  const onSubmit = (e) => {
    axios
      .post("http://localhost:8080/users/create", {
        name: name,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
      })
      .then((res) => {
        alert(res.data.message);
        localStorage.setItem("token", res.data.token);
        navigate("/auth/login");
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
    e.preventDefault();
  };
  return (
    <Wrapper>
      <Title>회 원 가 입</Title>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="이름을 입력해주세요."
        />
        <Input
          type="text"
          id="email"
          value={email}
          onChange={onChange}
          placeholder="eamil을 입력해주세요."
        />
        <Input
          type="password"
          id="password"
          value={password}
          onChange={onChange}
          placeholder="password를 입력해주세요."
        />{" "}
        <Input
          type="password"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={onChange}
          placeholder="password를 한번 더 입력해주세요."
        />
        <Button type="submit" disabled={btnDisabled}>
          회원가입
        </Button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 638px;
  height: 700px;
  margin: 0 auto;
  background: #7165ff;
  border-radius: 15px;
  text-align: center;
`;

const Title = styled.div`
  padding: 50px 0 30px 0;
  font-size: 50px;
`;

const Input = styled.input`
  display: flex;
  margin: 20px auto;
  box-sizing: border-box;
  width: 344px;
  height: 60px;
  background: #e1d7ff;
  border: 2px solid #97aeff;
  border-radius: 20px;
  font-size: 20px;
`;

const Button = styled.button`
  margin-top: 32px;
  width: 190px;
  height: 67px;
  font-size: 30px;
  color: black;
  background: #c6abff;
  border-radius: 20px;
  cursor: pointer;
  :disabled {
    background: #d5ccea;
  }
`;

export default SignUp;
