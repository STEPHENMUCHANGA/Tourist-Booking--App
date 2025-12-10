import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // State to trigger re-render when login/logout changes
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  // Handle login
  const handleLogin = () => {
    if (username === "admin" && password === "admin@123") {
      localStorage.setItem("isAdmin", "true");
      setIsLoggedIn(true); // update state immediately
      setUsername("");
      setPassword("");
    } else {
      alert("Incorrect username or password!");
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    navigate("/admin-login"); // optional redirect
  };

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto", textAlign: "center" }}>
      {isLoggedIn ? (
        <>
          <h2>Admin Dashboard</h2>
          <button
            onClick={handleLogout}
            style={{
              padding: "8px 16px",
              backgroundColor: "#004080",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Logout
          </button>

          <hr style={{ margin: "20px 0" }} />
          <p>Welcome, admin! You can now post blogs, manage tourist sites, and update content.</p>
          {/* Add blog upload form or other admin features here */}
        </>
      ) : (
        <>
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "10px", width: "250px", marginTop: "10px" }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", width: "250px", marginTop: "10px" }}
          />
          <br />
              <button
                onClick={handleLogin}
                style={{ marginTop: "10px", padding: "10px 20px" }}
              >
                Login
              </button>
            </>
          )}
        </div>
      );
    }
    
    export default AdminPage;
