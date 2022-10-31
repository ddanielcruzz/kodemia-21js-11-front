import React, { useEffect, useState } from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";

export const PostsPage = (props) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/posts", {
      headers: { Authorization: props.token },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        if (res.status === 401) {
          throw Error(res.statusText);
        }
      })
      .then((res) => setPosts(res))
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return (
    <DefaultLayout token={props.token} setToken={props.setToken}>
      <h1>Posts Page</h1>
      {error && <article className="error-notification">{error}</article>}
      {posts.map((post) => (
        <article className="post" key={post.id}>
          {post.title}
        </article>
      ))}
    </DefaultLayout>
  );
};
