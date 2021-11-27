import React from "react";

// Components
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import FormPageWrap from "../components/FormPageWrap/FormPageWrap";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

// Assets
import donationsBg from "../assets/donations.png";

const DonationsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <FormPageWrap title="DONACIJA" img={donationsBg}>
      <Row>
        <Col md={6} sm={12}>
          <p className="mb-0">Naziv udruženja:</p>
          <p className="info-box">Maza</p>
        </Col>
        <Col md={6} sm={12}>
          <p className="mb-0">Grad:</p>
          <p className="info-box">Beograd</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="mb-0">Račun za uplatu:</p>
          <p className="info-box">11-123456-11</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p class="divider-text">
            <span>ili putem</span>
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <PayPalScriptProvider options={{ "client-id": "test" }}>
          <PayPalButtons style={{ layout: "horizontal", tagline: "false" }} />
        </PayPalScriptProvider>
      </Row>
      <Row className="mb-2">
        <Col>
          <label>Drugi vid donacije (hrana, operma, usluge...) </label>
          <textarea
            className="w-100"
            placeholder="Pošalji poruku udruženju"
            rows="5"
            {...register("donations-message")}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="border-bottom-red">Kontakt telefon: 011/ 123 123</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            className="custom-btn btn-primary btn-center"
            type="submit"
            value="Pošalji"
          />
        </Col>
      </Row>
    </FormPageWrap>
  );
};

export default DonationsPage;
