import { useState } from "react";
import "./ToDo.css";

function ToDoForm(props) {
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
    console.log("test", newTask);
  };
  return (
    <div className={"display" + props.completePage}>
      <h3 className="formMsg">Add Tasks to your To-Do List</h3>
      <form className="addTask">
        <label className="inputsAdd">
          Enter a task:
          <input type="text" value={newTask} onChange={handleChange}></input>
        </label>
        <input
          onClick={(e) => {
            e.preventDefault();
            props.addItem(newTask);
          }}
          type="submit"
          value="Add Task"
          className="addButton"
        ></input>
      </form>
    </div>
  );
}
export default ToDoForm;
