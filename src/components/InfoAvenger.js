import React, { useState, useEffect } from "react";
import { Row, Col, Jumbotron, Button, Spinner, Badge } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";

function InfoAvenger() {
  const [resultAvenger, setResultAvenger] = useState();

  let { id } = useParams();

  useEffect(() => {
    resultApi();
  }, []);

  const resultApi = async () => {
    const result = await fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}?apikey=95d098cc93eae74d936deca5018acd1c`
    );
    const resultJson = await result.json();
    setResultAvenger(resultJson.data.results);
  };

  return (
    <div>
      <Row>
        <Col xs="12">
          <Header />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs="4">
          {resultAvenger ? (
            <img
              width="100%"
              height="100%"
              src={`${resultAvenger[0].thumbnail.path}.${resultAvenger[0].thumbnail.extension}`}
            ></img>
          ) : (
            <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
          )}
        </Col>
        <Col xs="8">
          {resultAvenger ? (
            <div>
              <Jumbotron>
                <h1 className="display-3">{resultAvenger[0].name}</h1>
                <p className="lead">{resultAvenger[0].description}</p>
                <hr className="my-2" />
                <p className="lead">
                  {`Disponible en ${resultAvenger[0].comics.available} cómics. `}
                </p>
                <p className="lead">
                  {`Participa en  ${resultAvenger[0].series.available} series. `}
                </p>
                <p>
                  <Badge href={resultAvenger[0].urls[0].url} color="light">
                    COMICS
                  </Badge>
                </p>
                <Link to="/AvengersPortal">
                  <Button color="danger" className="">
                    Back to List
                  </Button>
                </Link>
              </Jumbotron>
            </div>
          ) : (
            <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default InfoAvenger;
