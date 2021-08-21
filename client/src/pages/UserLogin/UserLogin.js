import React from "react";
import axios from "axios";

const UserLogin = () => {
  const loginUser = (obj) => {
    axios.post("http://localhost:8080/user/login", obj);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const userDetails = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    loginUser(userDetails);
    alert("submitted!!");
  }

  return (
    <div>
      <h1>login page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>your email</label>
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

export default UserLogin;
