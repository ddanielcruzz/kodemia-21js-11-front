import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { PostsPage } from "./pages/PostsPage";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage token={token} setToken={setToken} />}
          />
          <Route
            path="/login"
            element={<LoginPage token={token} setToken={setToken} />}
          />
          <Route
            path="/posts"
            element={<PostsPage token={token} setToken={setToken} />}
          />
          <Route
            path="/register"
            element={<RegisterPage token={token} setToken={setToken} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
