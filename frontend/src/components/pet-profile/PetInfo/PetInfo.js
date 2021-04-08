import React from "react";

import "./PetInfo.css";
import { FaPaw } from "react-icons/fa";

const PetInfo = () => {
  return (
    <div className="petInfo">
      <div className="infoAbout">
        <h1 className="name">Naziv</h1>
        <hr />
        <p>
          Pas
          <FaPaw className="pawIcon" />
          Beograd
        </p>
        <hr />
        <p>
          Mali
          <FaPaw className="pawIcon" />
          Muzjak
          <FaPaw className="pawIcon" />
          Junior
          <FaPaw className="pawIcon" />
          Mešanac
        </p>
        <p className="infoParagraphs">Vakcine</p>
        <p className="infoParagraphs">Zdravje</p>
        <p className="infoParagraphs">Karakter</p>
        <p className="infoParagraphs">Navike</p>
        <h3>Moja priča</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          condimentum metus sed leo laoreet, at bibendum metus ultrices.
          Praesent neque sapien, ultrices nec erat blandit, ultrices tincidunt
          dui. Etiam at semper augue. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus vel velit sed nisl bibendum tristique sed sit
          amet metus. Morbi at porttitor elit. Mauris quis lectus gravida,
          tincidunt libero sed, venenatis leo. Praesent elementum, ipsum sed
          eleifend lobortis, lorem mauris eleifend massa, in aliquet mauris urna
          nec nisl. Cras at rhoncus velit. Nulla rhoncus risus scelerisque
          mauris fringilla tincidunt. Sed nisl elit, aliquam ac odio sed,
          porttitor congue ligula. Nam eget lectus ligula. Aliquam quis eleifend
          massa.
        </p>
      </div>
      <div className="mapInfo">
        <p>MAPA</p>
      </div>
    </div>
  );
};

export default PetInfo;
