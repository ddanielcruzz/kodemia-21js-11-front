import React, { useState } from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";

export const RegisterPage = (props) => {
  const [successfulRegister, setSuccessfulRegister] = useState(false);

  const register = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    fetch("http://localhost:8080/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.registered) {
          setSuccessfulRegister(true);
        }
      });
  };
  return (
    <DefaultLayout token={props.token} setToken={props.setToken}>
      <h1>Register Page</h1>
      {successfulRegister && (
        <article className="success-notification">
          Successfully Registered!
        </article>
      )}
      <form className="form" onSubmit={register}>
        <input name="email" type="email" />
        <input name="password" type="password" />
        <input type="submit" value="Register" />
      </form>
    </DefaultLayout>
  );
};
