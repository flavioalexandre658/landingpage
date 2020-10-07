import React from "react";
import { Row, Col, Container } from "reactstrap";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import './avisooriginal.css'
const Avisooriginal = (props) => {
  return (
    <Container
      className="justify-content-center avisooriginal"
      id="avisooriginal"
      fluid={true}
    >
      <Row>
      
        <Col className="titulo-aviso">
          <AnimatedOnScroll
            className="w-100"
            animationIn="flipInX"
            animationInDuration={2000}
          >
            <h1>Muito Importante!</h1>
          </AnimatedOnScroll>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center conteudo-aviso">
        <Col xs="12" md="7 text-center">
            <p>Existem dezenas de sites piratas na internet que oferecem este produto ou similares e não são revendedores oficiais.</p>
            <p>Já recebemos dezenas de mensagens de pessoas informando que comprou e não recebeu. Quando solicitamos a confirmação de compra. 99.9% das vezes são de sites piratas.</p>
            <p>Aqui, você está comprando com revendedor <b>OFICIAL e AUTORIZADO</b> pela fabricante do produto.</p>
        </Col>
      </Row>
    </Container>
  );
};
export default Avisooriginal;