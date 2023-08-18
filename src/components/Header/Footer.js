import "./Header.css";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <button onClick={props.displayPage}>{props.button}</button>
      <Link to="/" className="Iwanttobeabutton">
        Logout
      </Link>
    </div>
  );
}
export default Footer;
