import Heart from "./Heart";
import styled from "styled-components";

const DivCard = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const IndividualCard = styled.div`
  font-family: "Roboto";
  width: 275px;
  height: 371px;
  border-radius: 8px;
  background-color: ${({ blure }) => (blure ? "#C4C4C4;" : "#fff")};
  border: 2px solid ${({ blure }) => (blure ? "#C4C4C4;" : "#aaa")};
  box-sizing: border-box;
  border-radius: 8px;
  line-height: 20px;
  color: #767676;
  position: relative;
  margin-bottom: 10px;
  border-collapse: collapse;
`;

const Img = styled.img`
  box-sizing: border-box;
  background-color: ${({ blure }) => (blure ? "#C4C4C4;" : "#aaa")};
  border: 2px solid ${({ blure }) => (blure ? "#C4C4C4;" : "#aaa")};
  border-collapse: collapse;
  border-radius: 8px;
  width: 275px;
  height: 219px;
`;

const Heading = styled.h1`
  font-size: 20px;
  font-style: normal;
  color: #111;
  font-weight: 400;
`;

const Paragraf = styled.p`
  font-size: 16px;
  margin: 0;
`;

function Card({ ljubimac, like, changeStyle }) {
  return (
    <DivCard>
      {ljubimac.map((podaci) => {
        return (
          <IndividualCard key={podaci.id} blure={changeStyle}>
            <Heart kojeSrce={podaci} isLike={like} />
            <Img src="" alt="" />
            <Heading>Naziv: {podaci.naziv}</Heading>
            <Paragraf>Pol: {podaci.pol}</Paragraf>
            <Paragraf>Starost: {podaci.starost}</Paragraf>
            <Paragraf>Mesto: {podaci.mesto}</Paragraf>
          </IndividualCard>
        );
      })}
    </DivCard>
  );
}

export default Card;
