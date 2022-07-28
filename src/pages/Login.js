import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const [inputs, setInputs] = useState({
    name: "",
    password: "",
  });
  const { email, password } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    checkReg();
  };

  const checkReg = () => {
    if (pwdRegex.test(password) && emailRegex.test(email))
      setBtnDisabled(false);
  };
  const onSubmit = (e) => {
    axios
      .post("http://localhost:8080/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        alert(res.data.message);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        alert(err.details);
      });
    e.preventDefault();
  };
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      alert("로그인 정보가 유효하지 않습니다. 로그인해주세요.");
      navigate("/auth/login");
    } else {
      alert("이미 로그인 되어있습니다");
      navigate("/");
    }
  }, []);

  return (
    <Wrapper>
      <Title>로 그 인</Title>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="eamil을 입력해주세요."
        />
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="password를 입력해주세요."
        />
        <Button type="submit" disabled={btnDisabled}>
          로그인
        </Button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 638px;
  margin: 0 auto;
  background: #7165ff;
  border-radius: 15px;
  text-align: center;
  padding: 50px 0;
`;

const Title = styled.div`
  padding-bottom: 30px;
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
export default Login;
