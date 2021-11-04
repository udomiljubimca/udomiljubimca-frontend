import React from "react";
import { Dropdown, Button, Form } from "react-bootstrap";
import "./Filter.css";

export default function Filter() {
  return (
    <>
      <Form.Control
        className="d-inline input"
        type="text"
        placeholder="Normal text"
        size="sm"
      />
      <Dropdown className="d-inline dropdown-item">
        <Dropdown.Toggle id="dropdown-autoclose-true" variant="warning">
          Pol
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Svi</Dropdown.Item>
          <Dropdown.Item href="#">Muski</Dropdown.Item>
          <Dropdown.Item href="#">Zenski</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline dropdown-item">
        <Dropdown.Toggle id="dropdown-autoclose-true" variant="warning">
          Starost
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Svi</Dropdown.Item>
          <Dropdown.Item href="#">Junior</Dropdown.Item>
          <Dropdown.Item href="#">Adult</Dropdown.Item>
          <Dropdown.Item href="#">Senior</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline dropdown-item">
        <Dropdown.Toggle id="dropdown-autoclose-true" variant="warning">
          Velicina
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Svi</Dropdown.Item>
          <Dropdown.Item href="#">Mali</Dropdown.Item>
          <Dropdown.Item href="#">Srednji</Dropdown.Item>
          <Dropdown.Item href="#">Veliki</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button className="custom-btn btn-primary">Primeni</Button>
    </>
  );
}
