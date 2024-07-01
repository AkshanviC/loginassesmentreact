import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tokenUrl, setTokenUrl] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      body: { username: username, password: password },
    })
      .then((res) => res.json)
      .then((res) => {
        if (res.success) {
          setTokenUrl(res.url);
        }
      });
  }, []);
  useEffect(() => {
    if (tokenUrl) {
      fetch(tokenUrl, {
        method: "get",
        body: { username: username, password: password },
      })
        .then((res) => res.json)
        .then((res) => {
          if (res.success) {
            navigate("/dashboard", { state: { data: res } });
          }
        });
    }
  }, [tokenUrl]);
  return (
    <div className="container">
      <div className="flex-row login flex-clmn">
        <div className="loginDiv flex-clmn">
          <label htmlFor="user">UserName</label>
          <input
            name="user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="loginDiv flex-clmn">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}
