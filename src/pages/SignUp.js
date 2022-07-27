import React, { useState } from "react";
import axios from "axios";
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
        navigate("/");
      })
      .catch((err) => {
        alert(err.details);
      });
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="이름을 입력해주세요."
        />
        <label htmlFor="email">이메일</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={onChange}
          placeholder="eamil을 입력해주세요."
        />
        <label htmlFor="password">비밀번호 </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onChange}
          placeholder="password를 입력해주세요."
        />{" "}
        <label htmlFor="password">비밀번호 확인 </label>
        <input
          type="password"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={onChange}
          placeholder="password를 한번 더 입력해주세요."
        />
        <button type="submit" disabled={btnDisabled}>
          회원가입
        </button>
      </form>
    </>
  );
};

export default SignUp;
