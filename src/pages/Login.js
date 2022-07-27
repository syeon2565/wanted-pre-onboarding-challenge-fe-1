import React, { useState } from "react";
import axios from "axios";

const Login = () => {
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
        alert("다시 한번 입력해주세요.");
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
        <button type="submit">로그인</button>
      </form>
      이메일:
      {email} 패스워드: {password}
    </>
  );
};

export default Login;
