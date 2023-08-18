import "./ToDo.css";

function ToDoList(props) {
  let removeItem = props.removeItem;

  const listItem = props.list.map((list, index) => {
    return (
      <li key={index} className={"strike" + list[1]}>
        <input
          className="checkbox"
          type="checkbox"
          onChange={() => {
            let temp = props.list.map((a) => a);
            temp[index][1] = !temp[index][1];
            props.checkItem(list);
          }}
        />

        {list}
        <div className="buttons">
          <button
            onClick={() =>
              props.editItem(prompt("Enter a new list item"), index)
            }
          >
            Modify
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              removeItem(index);
            }}
          >
            Delete
          </button>
        </div>
      </li>
    );
  });
  return (
    <div className={"display" + props.completePage}>
      <h3 className="formMsg">Things still left to do</h3>
      <ul>{listItem}</ul>
    </div>
  );
}

export default ToDoList;
