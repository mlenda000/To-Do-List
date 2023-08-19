import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/fireBaseConfig";
import Header from "../Header/Header";
import "./SignUp.css";

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/ToDoList");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div>
      <Header userName={userName} />
      <main>
        <section>
          <div>
            <div>
              <h1 className="title">Check those tasks off today!</h1>
              <p className="signupMsg">Please sign up</p>
              <form className="signUp">
                {" "}
                <div>
                  <label className="inputs">
                    Name:{" "}
                    <input
                      
                      type="text"
                      label="name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="email-address" className="inputs">
                    Email address
                  
                  <input
                    type="email"
                    label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email address"
                  />
                  </label>
                </div>
                <div>
                  <label htmlFor="password" className="inputs">
                    Password
                  
                  <input
                    type="password"
                    label="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                  />
                  </label>
                </div>
                <button type="submit" onClick={onSubmit} className="signup-button ">
                  Sign up
                </button>
              </form>

              <p>
                Already have an account? <NavLink to="/">Sign in</NavLink>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Signup;
