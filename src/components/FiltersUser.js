import React, { useState, useEffect } from "react";
import { Row, Col, Form, Input, Label } from "reactstrap";

function FiltersUser(props) {
  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = (selVal) => {
    props.setResultFilterUser(selVal);
  };

  return (
    <div>
      <Row>
        <Col xs="8 mt-5 in-line">
          <Form className="form-inline mr-4">
            <Label>Ordenar por:</Label>
            <Input
              type="select"
              name="order"
              className="ml-4"
              onChange={(val) => handleClick(val.target.value)}
            >
              <option value="order">Ordenar</option>
              <option value="id">Id</option>
              <option value="name">Nombre</option>
            </Input>
          </Form>
        </Col>
        <Col xs="4"></Col>
      </Row>
    </div>
  );
}

export default FiltersUser;
