import React from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import AdvancedSlider from "../../AdvancedSlider/AdvancedSlider";

// Assets
import "./PetInfo.css";

// Fake data
import fakeImages from "../../../fakeImagesData";

const PetInfo = ({ pet }) => {
  return (
    <Container>
      <h5 className="page-title mt-4">PROFIL LJUBIMCA</h5>
      <div className="petInfo">
        <h4 className="petInfo_name">{pet.name}</h4>
        <AdvancedSlider slides={fakeImages} />
        <Row className="d-flex align-items-center petInfo_content">
          <Col md={12} className="d-flex justify-content-end">
            <p>dodati datum</p>
          </Col>
          <Col md={12}>
            <div className="d-md-flex align-items-center petInfo_text-spacer">
              <p className="mb-0 mt-3 mt-md-0">Naziv udruženja</p>
              <p className="mb-0 mt-3 mt-md-0">Beograd</p>
            </div>
            <hr />
            <div className="d-md-flex align-items-center petInfo_text-spacer">
              <p className="mb-0 mt-3 mt-md-0">{pet.type}</p>
              <p className="mb-0 mt-3 mt-md-0">{pet.sex}</p>
              <p className="mb-0 mt-3 mt-md-0">{pet.size}</p>
              <p className="mb-0 mt-3 mt-md-0">{pet.age}</p>
            </div>
            <hr />
          </Col>
          <Col md={8} sm={12}>
            <div>
              <p className="mb-0">Vakcinisan</p>
              <p>{pet.vaccines}</p>
            </div>
            <div>
              <p className="mb-0">Zdravlje</p>
              <p>{pet.health}</p>
            </div>
            <div>
              <p className="mb-0">Karakter</p>
              <p>Lorem ipsum</p>
            </div>
            <div>
              <p className="mb-0">Posebne navike</p>
              <p>{pet.habits}</p>
            </div>
            <div>
              <p className="mb-0">Dobar za život sa</p>
              <p>{pet.goodFor}</p>
            </div>
            <div>
              <p className="mb-0">Nije dobar za život sa</p>
              <p>{pet.badFor}</p>
            </div>
          </Col>
          <Col md={4} sm={12} className="petInfo_adopt text-center">
            <img src={pet.image} alt={`Udomi ljubimca: ${pet.name}`} />
            <a href="/#">
              <h4 className="mt-3 mb-3">Uslovi za udomljavanje</h4>
            </a>
            <button className="custom-btn btn-primary">UDOMI ME</button>
          </Col>
        </Row>
        <div className="petInfo_story storyInfo">
          <h2 className="title-underline">Moja priča</h2>
          <p>{pet.description}</p>
          <div className="petInfo_story-video">
            <video controls></video>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PetInfo;
