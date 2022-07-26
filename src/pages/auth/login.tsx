import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";

interface initialValueType {
  email: string;
  password: string;
}

const login = () => {
  const router = useRouter();
  const formik = useFormik<initialValueType>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      router.push("/");
    },
  });
  return (
    <form>
      <input
        id="email"
        name="email"
        placeholder="이메일을 입력해주세요"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id="password"
        name="password"
        placeholder="비밀번호을 입력해주세요"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">로그인</button>
    </form>
  );
};

export default login;
