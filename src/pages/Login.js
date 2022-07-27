import React, { useState } from "react";
import axios from "axios";

const Login = () => {
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
      })
      .catch((err) => {
        alert(err.details);
      });
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">이메일 </label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="eamil을 입력해주세요."
        />
        <label htmlFor="password">비밀번호 </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="password를 입력해주세요."
        />
        <button type="submit" disabled={btnDisabled}>
          로그인
        </button>
      </form>
    </>
  );
};

export default Login;
