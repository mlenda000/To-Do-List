import ToDo from "./components/ToDo/ToDo.js";
import SignUp from "./components/SignUp/SignUp.js";
import Completed from "./components/Completed/Completed.js";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/ToDoList" element={<ToDo />} />
          <Route path="/Completed" element={<Completed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
