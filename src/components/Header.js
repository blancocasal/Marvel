import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  InputGroupAddon,
  Button,
  Input,
  InputGroup,
} from "reactstrap";
import descarga from "../img/descarga.png";
import ConsultAvengersCenter from "./ConsultAvengersCenter";

function Header(props) {
  const [resultApi, setResultApi] = useState("");

  //Destructuring find User for Props
  const findUser = props.findUser;
  const setFindUser = props.setFindUser;
  const UrlApi =
    "https://gateway.marvel.com/v1/public/characters?apikey=95d098cc93eae74d936deca5018acd1c";

  const handleClick = () => {
    resultFindUser();
  };

  const changeFind = (e) => {
    setFindUser({ value: e.target.value });
  };

  const resultFindUser = async () => {
    const result = await fetch(`${UrlApi}&nameStartsWith=${findUser.value}`);
    const resultJson = await result.json();
    setResultApi(resultJson);
    console.log(resultJson);
  };

  return (
    <Row className="mt-5">
      <Col xs="6" sm="4">
        <img src={descarga} width="200" height="80" />
      </Col>
      <Col xs="6" sm="4"></Col>
      <Col sm="4">
        <InputGroup className="mt-4">
          <Input placeholder="Busca tu vengador" onChange={changeFind} />

          <InputGroupAddon addonType="append">
            <Button
              color="danger"
              onClick={() => {
                handleClick();
              }}
            >
              Buscar
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </Row>
  );
}

export default Header;
