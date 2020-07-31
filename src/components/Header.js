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

function Header(props) {
  const setResultApiMarvel = props.setResultApiMarvel;

  //Destructuring find User for Props
  const findUser = props.findUser;
  const setFindUser = props.setFindUser;
  const UrlApi =
    "https://gateway.marvel.com/v1/public/characters?limit=100&apikey=95d098cc93eae74d936deca5018acd1c";

  const handleClick = () => {
    resultFindUser(findUser);
    //
  };

  const changeFind = (e) => {
    const result = e.target.value;
    setFindUser(result);
  };

  const resultFindUser = async (texto) => {
    const result = await fetch(`${UrlApi}&nameStartsWith=${texto}`);
    const resultJson = await result.json();
    setResultApiMarvel(resultJson.data.results);
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
