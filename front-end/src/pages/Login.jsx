import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });
  const [val, setval] = useState([]);
  const [note,setnote]=useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginData
      );
      const { success, message } = response.data;

      if (success) {
        console.log("login successfuly");
        setval([1]);
      } else {
        console.log("No data found");
        setnote('invalid data')
      }
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
          <h1>Login</h1>
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
            <button type="submit">Login</button>
          </form>
          <p>{note}    </p>
          <p>
            Register <Link to="/">Here</Link>
          </p>
        </>
      ) : (
        <><h1>Login successful!</h1></>
      )}
    </div>
  );
}

export default Login;
