import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import "./tabmotivos.css";
const TabMotivos = (props) => {
  const TabMotivo = props.motivos.map((motivo) => (
    <Col key={motivo.id} xs="12" md="4" tag="div" >
      <Card className="div-motivo">
        <Col xs="12" md="12 text-left" className="icone-motivo">
          <svg
            width="4em"
            height="4em"
            viewBox="0 0 16 16"
            className="bi bi-box-seam"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" d={motivo.icone} />
          </svg>
        </Col>
        <CardBody>
          <h4 className="text-left titulo-motivo">{motivo.titulo}</h4>
          <p className="text-justify">{motivo.conteudo}</p>
          {/*<p>{JSON.stringify(infos)}</p>*/}
        </CardBody>
      </Card>
    </Col>
  ));

  return (
    <Container className="justify-content-center mt-3 content-separator">
      <Row className="align-items-center">
        <Col xs="12" md="12">
          <Container className="justify-content-center">
            <Row>
              <Col sm="12">
                <Row>{TabMotivo}</Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default TabMotivos;
