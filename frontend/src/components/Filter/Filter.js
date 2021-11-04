import React, { useState } from "react";
import { Dropdown, Button, Form } from "react-bootstrap";
import "./Filter.css";

export default function Filter() {
  const [selected, setSelected] = useState([]);
  const [dropdownValues, setDropdownValues] = useState([]);
  const [city, setCity] = useState("");

  const handleSelect = (e) => {
    console.log(e);
    setDropdownValues([...dropdownValues, e]);
  };

  const handleInput = (e) => {
    setCity(e.target.value);
    console.log(city);
  };

  const handleSubmit = () => {
    setSelected([...dropdownValues, city]);
    console.log("selected values are", selected);
  };

  return (
    <div className="filters">
      <Form.Control
        className="d-inline input text-center"
        type="text"
        placeholder="Grad"
        size="m"
        id="input"
        onChange={handleInput}
      />
      <Dropdown className="d-inline" onSelect={handleSelect}>
        <Dropdown.Toggle variant="warning">Pol</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="svi">Svi</Dropdown.Item>
          <Dropdown.Item eventKey="muski">Muški</Dropdown.Item>
          <Dropdown.Item eventKey="zenski">Ženski</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline" onSelect={handleSelect}>
        <Dropdown.Toggle id="dropdown-autoclose-true" variant="warning">
          Starost
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="svi">Svi</Dropdown.Item>
          <Dropdown.Item eventKey="junior">Junior</Dropdown.Item>
          <Dropdown.Item eventKey="adult">Adult</Dropdown.Item>
          <Dropdown.Item eventKey="senior">Senior</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline" onSelect={handleSelect}>
        <Dropdown.Toggle id="dropdown-autoclose-true" variant="warning">
          Veličina
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="svi">Svi</Dropdown.Item>
          <Dropdown.Item eventKey="mali">Mali</Dropdown.Item>
          <Dropdown.Item eventKey="srednji">Srednji</Dropdown.Item>
          <Dropdown.Item eventKey="veliki">Veliki</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button className="btn-primary" id="primeni" onClick={handleSubmit}>
        Primeni
      </Button>
      {}
    </div>
  );
}
