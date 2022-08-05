import { Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";

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
        <Route path="/todo" element={<Todo />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
