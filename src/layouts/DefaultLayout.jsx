import React from "react";
import { Link } from "react-router-dom";

export const DefaultLayout = (props) => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        {props.token && (
          <button onClick={() => props.setToken(null)}>Log Out</button>
        )}
      </nav>
      <main>{props.children}</main>
    </>
  );
};
