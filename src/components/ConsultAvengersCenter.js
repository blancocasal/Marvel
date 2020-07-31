import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Table,
  Spinner,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import rightMarvel from "../img/rightMarvel.jpg";
import { Link } from "react-router-dom";

function ConsultAvengersCenter(props) {
  const [resultApiMarvel, setresultApiMarvel] = useState([]);
  const [valueOffSet, setValueOffSet] = useState(0);

  //Destructuring Filter User for Props
  const resultFilterUser = props.resultFilterUser;

  //Start Pagination

  const sumPagination = () => {
    setValueOffSet(valueOffSet + 20);
  };

  const restPagination = () => {
    if (valueOffSet > 0) {
      setValueOffSet(valueOffSet - 20);
    }
  };
  const startPagination = () => {
    setValueOffSet(valueOffSet === 0);
  };
  const finishPagination = () => {
    setValueOffSet(valueOffSet + 1492);
  };

  //Finish Pagination

  useEffect(() => {
    getApiMarvel();
  }, [valueOffSet]);

  useEffect(() => {
    if (resultFilterUser === "comics") {
      return orderComics();
    }
    if (resultFilterUser === "name") {
      return orderNameAsc();
    }
    if (resultFilterUser === "id") {
      return orderId();
    }
  }, [resultFilterUser]);

  // Consulta API y sólo almaceno en el Estado el objeto final con resultados. NO volver a hacer así. Almacena todo.
  const getApiMarvel = async () => {
    const result = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=${valueOffSet}&apikey=95d098cc93eae74d936deca5018acd1c`
    );
    const resultJson = await result.json();
    console.log(resultJson);
    setresultApiMarvel(resultJson.data.results);
  };

  function orderComics() {
    const resultConcat = [...resultApiMarvel];
    console.log(resultConcat);
    resultConcat.sort(function (a, b) {
      if (a[resultFilterUser] > b[resultFilterUser]) {
        return 1;
      } else if (a[resultFilterUser] < b[resultFilterUser]) {
        return -1;
      }
      return 0;
    });
    setresultApiMarvel(resultConcat);
  }
  function orderNameAsc() {
    const resultConcat = [...resultApiMarvel];
    resultConcat.sort(function (a, b) {
      if (a[resultFilterUser] < b[resultFilterUser]) {
        return 1;
      } else if (a[resultFilterUser] > b[resultFilterUser]) {
        return -1;
      }
      return 0;
    });
    setresultApiMarvel(resultConcat);
  }

  function orderId() {
    const resultConcat = [...resultApiMarvel];
    resultConcat.sort(function (a, b) {
      if (a[resultFilterUser] < b[resultFilterUser]) {
        return 1;
      } else if (a[resultFilterUser] > b[resultFilterUser]) {
        return -1;
      }
      return 0;
    });
    setresultApiMarvel(resultConcat);
  }

  return (
    <div>
      <Row>
        <Col xs="8 mt-5">
          {resultApiMarvel != [] ? (
            <Table>
              <thead>
                <tr>
                  <th>id Vengador</th>
                  <th>Nombre</th>
                  <th>Comics</th>
                  <th>Series</th>
                </tr>
              </thead>
              {resultApiMarvel
                ? resultApiMarvel.map((value) => (
                    <tbody>
                      <tr>
                        <th scope="row">{value.id}</th>
                        <td>{value.name}</td>
                        <td>{value.comics.available}</td>
                        <td>{value.series.available}</td>
                        <td></td>
                        <Link
                          to={`InfoAvenger/${value.id}`}
                          className="btn btn-danger mt-1 d-flex justify-content-center"
                        >
                          + Info
                        </Link>
                      </tr>
                    </tbody>
                  ))
                : "Hola"}
            </Table>
          ) : (
            <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
          )}
          <Pagination
            aria-label="Page navigation example"
            className="d-flex justify-content-center"
          >
            <PaginationItem>
              <PaginationLink
                first
                href="#"
                onClick={() => {
                  startPagination();
                }}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => {
                  restPagination();
                }}
              >
                Anterior
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => {
                  sumPagination();
                }}
              >
                Siguiente
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                last
                href="#"
                onClick={() => {
                  finishPagination();
                }}
              />
            </PaginationItem>
          </Pagination>
        </Col>
        <Col xs="4" className="mt-5 d-flex justify-content-center">
          <img src={rightMarvel} width="150" height="800" />
        </Col>
      </Row>
    </div>
  );
}

export default ConsultAvengersCenter;
