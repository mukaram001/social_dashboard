import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const { username, password } = user;
  const navigate = useNavigate();

  const handleFileds = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username != "abc@xyz.com" || password != "1234") {
      console.log("sorry user is not register");
    } else {
      window.localStorage.setItem("user", username);

      console.log("successfuly login");
      navigate("/dashboard");
    }
  };

  return (
    <>
      <section id="login-wrapper">
        <div className="opacity"></div>
        <div className="container lin">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="row login-main">
                <div className="col-md-6 p-0">
                  <div className="login-left">
                    <a href="">
                      <img src="" />
                    </a>
                    <div>
                      <h2>Please Sign in to continue!</h2>
                      <p>
                        We will verify your account and you will get an
                        activation email from admin. You can check your course
                        details and progress from your profile page.
                      </p>
                      <div className="line"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-0">
                  <div className="login-right">
                    <form
                      onSubmit={handleSubmit}
                      className="login-form"
                      action=""
                      method=" post"
                    >
                      <h2>SignIn</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </p>
                      <div className="form-group one">
                        <label>E-mail</label>
                        <input
                          type="email"
                          name="username"
                          placeholder="example@mail.com"
                          className="form-control"
                          value={username}
                          onChange={handleFileds}
                        />
                      </div>
                      <div className="form-group two mb-5">
                        <label>Password</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="6+ strong character"
                          className="form-control"
                          value={password}
                          onChange={handleFileds}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="submit"
                          name=""
                          value="Login"
                          className="login-btn rounded-pill"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
