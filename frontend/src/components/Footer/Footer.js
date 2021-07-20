import styled from "styled-components";
import "./Footer.css";

const Li = styled.li`
  list-style: none;
  width: 59px;
  height: 18px;
  flex-basis: ${({ parametarWith }) => parametarWith};
`;

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <ul className="footer-nav">
          <Li parametarWith={"71px"}>
            {" "}
            <a href="#">O Nama</a>{" "}
          </Li>
          <Li parametarWith={"139px"}>
            {" "}
            <a href="#">Prijevi problem</a>{" "}
          </Li>
          <Li parametarWith={"156px"}>
            {" "}
            <a href="#">Uslovi koriscenja</a>{" "}
          </Li>
          <Li parametarWith={"72px"}>
            {" "}
            <a href="#">Konctact</a>{" "}
          </Li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
