import React, { useState } from "react";
import Header from "./Header";
import { Row, Col } from "reactstrap";
import ConsultAvengersCenter from "./ConsultAvengersCenter";
import FiltersUser from "./FiltersUser";

function AvengersPortal() {
  const [resultFilterUser, setResultFilterUser] = useState();
  const [findUser, setFindUser] = useState("");

  return (
    <div>
      <Row>
        <Col xs="12">
          <Header findUser={findUser} setFindUser={setFindUser} />
          <FiltersUser
            resultFilterUser={resultFilterUser}
            setResultFilterUser={setResultFilterUser}
          />
          <ConsultAvengersCenter
            resultFilterUser={resultFilterUser}
            setResultFilterUser={setResultFilterUser}
          />
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
}

export default AvengersPortal;
