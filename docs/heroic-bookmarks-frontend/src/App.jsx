import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CharacterPage from "./components/CharacterPage";
import NotFound from "./pages/NotFound";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserBase from "./components/UserBase";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:code" element={<CharacterPage />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userbase" element={<UserBase />} />
        <Route path="/character" element={<CharacterPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
