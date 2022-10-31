import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";

export const HomePage = (props) => {
  return (
    <DefaultLayout token={props.token} setToken={props.setToken}>
      <h1>Home Page</h1>
    </DefaultLayout>
  );
};
