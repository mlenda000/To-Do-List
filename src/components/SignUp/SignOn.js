import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/fireBaseConfig";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./SignUp.css";

const SignOn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/ToDoList");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <h3 className="signupMsg">Please sign on</h3>

            <form className="signUp">
              <div>
                <label htmlFor="email-address" className="inputs">
                  Email address
                
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                </label>
              </div>

              <div>
                <label htmlFor="password" className="inputs">
                  Password
                
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                </label>
              </div>

              <div>
                <button onClick={onLogin} className="signup-button">Login</button>
              </div>
            </form>

            <p className="text-sm text-white text-center">
              No account yet? <NavLink to="/SignUp">Sign up</NavLink>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignOn;
