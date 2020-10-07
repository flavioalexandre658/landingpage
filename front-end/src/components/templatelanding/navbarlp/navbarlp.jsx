import React from "react";
import {
  NavLink,
  Row,
  Col,
  Container
} from "reactstrap";

const NavbarLp = (props) => {
  return (
    <Container
      className="justify-content-center navbar themed-container"
      fluid={true}
    >
      <Row>
        <Col md="12">
          <Row className="nav-items align-items-start">
            <Col xs="2" md="2">
              <NavLink href="#product">Início</NavLink>
            </Col>
            <Col xs="3" md="3">
              <NavLink href="#detail">Detalhes</NavLink>
            </Col>
            <Col xs="3" md="3">
              <NavLink className="pr-2" href="#coments">
                Avaliações
              </NavLink>
            </Col>
            <Col xs="3" md="3">
              <NavLink href="#garantees">Garantia</NavLink>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default NavbarLp;
