import React from "react";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";
import App from "../App.css";

function HomePage() {
  return (
    <div className="bodyHomepage">
      <Row className="d-flex justify-content-center mt-5">
        <Link to="/AvengersPortal" className="access">
          ACCESS
        </Link>
      </Row>
    </div>
  );
}

export default HomePage;
