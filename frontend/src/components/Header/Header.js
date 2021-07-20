import "./Header.css";
import Nav from "./Nav";

function Header({ trigger }) {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-logo" />
        <Nav popUp={trigger} />
      </div>
    </div>
  );
}

export default Header;
