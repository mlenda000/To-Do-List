import { useState } from "react";
import "./SignUp.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

let logon = false;
function SignUp() {
  const [user, setUser] = useState(false);
  const handleClick = () => {
    logon = true;
  };
  return (
    <div>
      <Header />
      <h3 className="title">Welcome to the To-Do list</h3>
      <p className="signupMsg">Please sign up</p>
      <form className="signUp">
        <label className="inputs">
          Username: <input type="text" id="userName"></input>
        </label>
        <label className="inputs">
          Email: <input type="email" id="email" className="input"></input>
        </label>
        <label className="inputs">
          Password: <input type="password" id="password"></input>
        </label>
        <Link to="/ToDoList" className="Iwanttobeabutton">
          SignUp
        </Link>
        {logon}
      </form>
    </div>
  );
}

export default SignUp;
