import React from "react";
import "./App.css";
import { Container } from "reactstrap";
import Routes from "./router/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Container>
      <Router>
        <Routes />
      </Router>
    </Container>
  );
}

export default App;
