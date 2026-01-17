import { useState } from "react";
import api from "../api/axios";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/login", { Name, Email, Password });
    login(res.data);
    
    if (res.data.user?.role === "Admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-8 rounded shadow w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          className="w-full border p-2 mb-3"
          placeholder="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full border p-2 mb-3"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full border p-2 mb-3"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-green-600 text-white p-2 rounded" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}
