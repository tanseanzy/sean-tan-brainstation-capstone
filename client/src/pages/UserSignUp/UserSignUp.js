import React from "react";
import axios from "axios";

const UserSignUp = () => {
  const createUser = (obj) => {
    axios.post("http://localhost:8080/api/users/", obj);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      email: e.target.email.value,
      name: e.target.name.value,
      password: e.target.password.value,
    };
    createUser(newUser);
    alert("submitted!!");
  }

  return (
    <div>
      <h1>sign up page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>your email</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>your name</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>your password</label>
          <input type="password" name="password" />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UserSignUp;
