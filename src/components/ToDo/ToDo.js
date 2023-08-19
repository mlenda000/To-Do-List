import { useState, useEffect, useLocalStorage } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Completed from "../Completed/Completed";
import Header from "../Header/Header";
import Footer from "../Header/Footer";

export default function ToDo() {
  const [completedList, setCompletedList] = useState([]);
  // const [list, setList] = useState([]);
  const [completePage, setCompletePage] = useState(false);
  const [order, setOrder] = useState();
  const [button, setButton] = useState("Completed List");
  const useLocalStorage = (storageKey, fallbackState) => {

    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem('storageKey')) ?? fallbackState
    );
    useEffect(() => {
      localStorage.setItem('storageKey', JSON.stringify(value));
    }, value);
    return [value, setValue];
  };

  // const [userKey, setUserKey] = useLocalStorage('tempkey', 0);
  // auth.onAuthStateChanged(function(user) {
  //   if (user) {
  //     props.setLog(true);
  //     localStorage.setItem('tempkey', JSON.stringify(auth.currentUser.email));
  //   } else {
  //     prop.setLog(false);
  //   }
  // });

  // const userKeyStored = userKey;
  const [list, setList] = useLocalStorage('storageKey', []);

  // useEffect(() => {
  //   localStorage.setItem('list', JSON.stringify(list));
  // }, [list]);
    
  //   useEffect(() => {
  //     const items = JSON.parse(localStorage.getItem('list'));
  //     if (list) {
  //      console.log(setList(list));
  //     }
  //   }, []);


  const removeItem = (index) => {
    setList([...list.slice(0, index), ...list.slice(index + 1, list.length)]);
  };

  const addItem = (a) => {
    setList([...list, [a, true]]);
    localStorage.setItem('storageKey', JSON.stringify(list));

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
