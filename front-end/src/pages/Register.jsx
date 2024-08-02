import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Register() {
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });
  const [val, setval] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        loginData
      );
      console.log("Sign up successful.....");
      setval([1]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginData((val) => ({
      ...val,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      {val.length === 0 ? (
        <>
          {" "}
        <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username: </label>
              <input
                type="text"
                required
                name="username"
                value={loginData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                required
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Register</button>
          </form>
          <p>
            Login <Link to="/login">Here</Link>
          </p>
        </>
      ) : (
        <>
          <h1>Register successful</h1>
          <p>
            Login <Link to="/login">Here</Link>
          </p>
        </>
      )}
    </div>
  );
}

export default Register;
