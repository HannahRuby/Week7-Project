import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import { useState, useEffect } from "react";

export default function UserPage() {
  const [form, setForm] = useState({
    full_name: "",
    comment: "",
  });
  let { user, setUser } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
  }

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.full_name]: event.target.value,
    });
  }
  const [users, setUsers] = useState([]);
  // users = {
  //   posts: ["Post 1", "Post 2"],
  //   comments: ["comment 1", "comment 2"],
  // };

  useEffect(() => {
    getUsers();
  }, []);
  async function getUsers() {
    const response = await fetch("http://localhost:8080/users");
    const data = await response.json();
    setUsers(data);
    console.log(data);
  }
  return (
    <div>
      <h1>User Page</h1>
      <h2>Posts:</h2>
      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.full_name}</p>
          <p>Position: {user.job_title}</p>
          <p>Industry: {user.industry}</p>
          <p>Post: {user.post}</p>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <h3>Add a comment</h3>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        ></input>

        <label>Comments</label>
        <textarea
          name="comment"
          placeholder="Your Comment"
          id="comment"
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      {/* <h2>Comments:</h2>
      {posts.map((post) => (
        <div key={post.id}>{post}</div>
      ))} */}
    </div>
  );
}
