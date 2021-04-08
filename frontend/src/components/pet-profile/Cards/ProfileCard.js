import React from "react";

import "./ProfileCard.css";
import { Card } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const ProfileCard = (props) => {
  return (
    <Card className="card">
      <FaHeart className="heartIcon" />
      <Card.Img variant="top" src={props.image} className="imgPet" />
      <Card.Body className="cardBody">
        <Card.Title className="cardTitle">{props.type}</Card.Title>
        <Card.Text className="cardText">Pol: {props.sex}</Card.Text>
        <Card.Text className="cardText">Starost: {props.age}</Card.Text>
        <Card.Text className="cardText">Mesto: {props.location}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
