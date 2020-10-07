import React from "react";
import {
    Row,
    Col,
    Container
  } from "reactstrap";
  import { AnimatedOnScroll } from "react-animated-css-onscroll";
  import {BsFillAwardFill, BsFillShieldLockFill, BsShieldShaded} from 'react-icons/bs'
const Garantias = (props) => {
  return (
    <Container
      className="justify-content-center div-garantees themed-container pb-5"
      id="garantees"
      fluid={true}
    >
      <AnimatedOnScroll
        animationIn="zoomInRight"
        animationInDuration={1400}
        isVisible={true}
      >
        <Row className="justify-content-center mt-0 pt-5">
          <Col xs="12" md="3 mt-4">
            <Col xs="12" md="12">
              <BsFillAwardFill size='5em' />
            </Col>
            <Col xs="12" md="12">
              <h5 className="text-justify">
                Entrega garantida no prazo combinado e política de devolução.
              </h5>
            </Col>
          </Col>
          <Col xs="12" md="3 mt-4">
            <Col xs="12" md="12">
              <BsFillShieldLockFill size="5em" />
            </Col>
            <Col xs="12" md="12">
              <h5 className="text-justify">
                Dados sigilosos e pessoais não são compartilhados de nenhuma
                forma.
              </h5>
            </Col>
          </Col>
          <Col xs="12" md="3 mt-4">
            <Col xs="12" md="12">
              <BsShieldShaded size='5em' />
            </Col>
            <Col xs="12" md="12">
              <h5 className="text-justify">
                Site 100% confiável e autenticado por empresas de segurança.
              </h5>
            </Col>
          </Col>
        </Row>
      </AnimatedOnScroll>
      <AnimatedOnScroll
        animationIn="bounceIn"
        animationInDuration={1400}
        isVisible={true}
      >
        <Row className="justify-content-center align-items-center ">
          <Col xs="12" md="3 pr-0">
            <img className="selo" src={require("./selo.png")} alt="" />
          </Col>
          <Col xs="12" md="5 pl-0" className="text-start">
            <Col xs="12" md="12">
              <h2 className="mb-0">SATISFAÇÃO GARANTIDA </h2>
              <h5>OU TODO SEU DINHEIRO DE VOLTA!</h5>
            </Col>
            <Col xs="12" md="12">
              <img
                className="payments"
                src={require("./formas-pagamento.png")}
                alt=""
              />
            </Col>
          </Col>
        </Row>
      </AnimatedOnScroll>
    </Container>
  );
};
export default Garantias;
