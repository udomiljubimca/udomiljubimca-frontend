import Card from "./Card";
import styled from "styled-components";

const UdomiH4 = styled.h4`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 25px;
  color: #000000;
  margin: 20px 0 15px 0;
`;

const Cards = ({ ljubimci, isLike, trigger }) => {
  console.log(isLike);
  return (
    <div>
      <Card ljubimac={ljubimci} like={isLike} changeStyle={trigger} />
    </div>
  );
};

export default Cards;
// <Card ljubimac={ljubimci} like={isLike} />
