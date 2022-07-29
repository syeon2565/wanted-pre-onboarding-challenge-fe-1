import { Routes, Route } from "react-router-dom";
import TodoTemplate from "./components/Todo/TodoTemplate";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    alert("로그아웃 되었습니다.");
  };
  const token = localStorage.getItem("token");
  return (
    <>
      {token && (
        <button type="button" onClick={handleLogOut}>
          로그아웃
        </button>
      )}
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signUp" element={<SignUp />} />
        <Route path="/" element={<TodoTemplate />} />
      </Routes>
    </>
  );
}

export default App;
