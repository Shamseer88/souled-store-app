import { useNavigate } from "react-router-dom";
import "./Logo.css";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <>
      <img src="/logo.png" alt="Logo" onClick={() => navigate("/")} />
    </>
  );
}
