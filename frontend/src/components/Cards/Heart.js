import { FaRegHeart, FaHeart } from "react-icons/fa";
import styled from "styled-components";

const HeartBox = styled.div`
  position: relative;
`;

const IconHeartEmpty = styled(FaRegHeart)`
  width: 32px;
  height: 27px;
  position: absolute;
  left: 220px;
  top: 20px;
  cursor: pointer;
  fill: #111111;
  z-index: 1;
`;

const IconHeartFill = styled(FaHeart)`
  width: 32px;
  height: 27px;
  position: absolute;
  left: 220px;
  top: 20px;
  cursor: pointer;
  fill: #000;
  z-index: 1;
`;

function Heart({ kojeSrce, isLike }) {
  return (
    <HeartBox>
      {kojeSrce.isLike ? (
        <IconHeartFill onClick={() => isLike(kojeSrce.id)} />
      ) : (
        <IconHeartEmpty onClick={() => isLike(kojeSrce.id)} />
      )}
    </HeartBox>
  );
}

export default Heart;
// favorite={kojeSrce.isLike}
// <IconHeartEmpty onClick={() => isLike(kojeSrce.id)} />
