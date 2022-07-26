import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { SignUpValidationSchema } from "../../lib/validation";

interface initialValueType {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  phone: string;
}

const SignUp = () => {
  const router = useRouter();
  const formik = useFormik<initialValueType>({
    initialValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
      phone: "",
    },
    onSubmit: (values) => {
      console.log("회원가입 폼 api찌르기");
      router.push("/signUp");
    },
    validationSchema: SignUpValidationSchema,
  });
  return (
    <form>
      <input
        id="name"
        name="name"
        placeholder="이름을 입력해주세요"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
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
      <input
        id="passwordConfirm"
        name="passwordConfirm"
        placeholder="비밀번호 다시 한 번 입력해주세요"
        type="passwordConfirm"
        onChange={formik.handleChange}
        value={formik.values.passwordConfirm}
      />
      <input
        id="phone"
        name="phone"
        placeholder="핸드폰번호를 입력해주세요"
        type="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignUp;
