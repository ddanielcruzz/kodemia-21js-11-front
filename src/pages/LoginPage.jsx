import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";

export const LoginPage = (props) => {
  const [successfulLogin, setSuccessfulLogin] = useState(false);

  const login = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.login) {
          props.setToken(res.token);
          // setSuccessfulLogin(true);
        }
      });
  };

  // if (successfulLogin) {
  //   return <Navigate to="/posts" />;
  // }

  return (
    <DefaultLayout token={props.token} setToken={props.setToken}>
      <h1>Log In Page</h1>
      <form className="form" onSubmit={login}>
        <input name="email" type="email" />
        <input name="password" type="password" />
        <input type="submit" value="Log In" />
      </form>
    </DefaultLayout>
  );
};
