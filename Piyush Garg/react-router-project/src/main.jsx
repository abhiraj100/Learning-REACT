import React, { useEffect, useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  NavLink,
} from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <div className="post-container">
        {posts.map((post) => (
          <NavLink
            className="post-titles"
            style={{ display: "block" }}
            to={`/post/${post.id}`}
          >
            {post.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

const PostPage = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  console.log("Params", params);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  console.log("Data", data);

  if (data === null) return <p>Loading...</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      {/* <h1>Helloo</h1> */}
      <p>{data.body}</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};

const Settings = () => {
  return (
    <div>
      <h1>Setting Page</h1>
    </div>
  );
};

const SayUser = () => {
  const params = useParams();
  console.log("params", params);

  return (
    <div>
      <h1>Your name is {params.userName}</h1>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:postId" element={<PostPage />} />

        {/* Dynamic Routes  */}
        <Route path="/user/:userName" element={<SayUser />} />

        {/* Nested Route  or multi-level routing */}
        {/* <Route path='/account/profile' element={<Profile />} /> */}
        <Route path="account">
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
