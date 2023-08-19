import "./SignUp.css";

// import firebase from "../../config/fireBaseConfig.js";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function SignOn() {
  // const app = initializeApp(firebaseConfig)

  return (
    <div>
      <Header />
      <h3 className="title">Welcome to the To-Do list</h3>
      <p className="signupMsg">Please sign on</p>
      <form className="signUp">
        <label className="inputs">
          Email: <input type="email" id="email" className="input"></input>
        </label>
        <label className="inputs">
          Password: <input type="password" id="password"></input>
        </label>
        <Link to="/ToDoList" className="Iwanttobeabutton">
          SignOn
        </Link>
      </form>
      <Link to="/SignUp">
        <p>Register Here</p>
      </Link>
    </div>
  );
}

// export const db = getFirestore(app)
// export const auth = getAuth(app)
// export const storage = getStorage(app)
export default SignOn;
