import Header from "../Header/Header";
import "./Completed.css";
import pic from "../images/congrats-13.gif";

function Completed(props) {
  const listItem = props.completedList.map((list, index) => {
    props.setOrder(index);
    return (
      <div>
        <ul>
          <li key={index} className="completedList">
            {list}
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div className={"completedList" + props.completePage}>
      <div className="'leftContent'">
        <img src={pic} />
      </div>
      <div className="rightContent">
        <h3 className="heading-top">Stuff you got done today!</h3>
        {listItem}
      </div>
    </div>
  );
}

export default Completed;
