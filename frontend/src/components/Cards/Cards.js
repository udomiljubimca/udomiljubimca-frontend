import Card from "./Card";

const Cards = ({ ljubimci, isLike, trigger }) => {
  return (
    <div>
      <Card ljubimac={ljubimci} like={isLike} changeStyle={trigger} />
    </div>
  );
};

export default Cards;
// <Card ljubimac={ljubimci} like={isLike} />
