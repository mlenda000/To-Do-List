import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Completed from "../Completed/Completed";
import Header from "../Header/Header";
import Footer from "../Header/Footer";

export default function ToDo(props) {
  const [completedList, setCompletedList] = useState([]);
  const [list, setList] = useState([
    ["Learn how to code", true],
    ["Finish my Homework", true],
  ]);
  const [completePage, setCompletePage] = useState(false);
  const [order, setOrder] = useState();
  const [button, setButton] = useState("Completed List");

  const removeItem = (index) => {
    setList([...list.slice(0, index), ...list.slice(index + 1, list.length)]);
  };

  const addItem = (a) => {
    console.log("list", list);
    setList([...list, [a, true]]);
  };

  const checkItem = (list) => {
    if (list[1] === false) {
      setCompletedList([...completedList, list]);
    } else {
      setCompletedList([
        ...completedList.slice(0, order),
        ...completedList.slice(order + 1, completedList.length),
      ]);
    }
  };

  const editItem = (update, index) => {
    const updatedItem = [...list];
    updatedItem[index] = [update, true];
    setList(updatedItem);
  };

  const displayPage = () => {
    setCompletePage(!completePage);
    if (completePage === true) {
      setButton("Completed List");
    } else {
      setButton("Things to do List");
    }
  };

  return (
    <div>
      <Header />
      <Completed
        completedList={completedList}
        setOrder={setOrder}
        completePage={completePage}
      />
      <div className="mainContent">
        <div className="leftContent">
          <ToDoList
            removeItem={removeItem}
            addItem={addItem}
            checkItem={checkItem}
            editItem={editItem}
            completedList={completedList}
            list={list}
            setOrder={setOrder}
            completePage={completePage}
          />
        </div>
        <div className="rightContent">
          <ToDoForm addItem={addItem} completePage={completePage} />
        </div>
      </div>

      <Footer
        completePage={completePage}
        setCompletePage={setCompletePage}
        displayPage={displayPage}
        button={button}
      />
    </div>
  );
}
