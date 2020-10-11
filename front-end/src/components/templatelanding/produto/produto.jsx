import React from "react";
import { Row, Col, Container, Button } from "reactstrap";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import {FaAngleDoubleDown} from 'react-icons/fa'
const Produto = (props) => {
  return (
    <Container
      className="justify-content-center session-1 themed-container"
      id="product"
      fluid={true}
    >
      <Row>
      
        <Col className="mensagem-1">
          <AnimatedOnScroll
            className="w-100"
            animationIn="flipInX"
            animationInDuration={2000}
          >
            <hr className="tab-separator" />
            <h1>{props.produto.headline}</h1>
          </AnimatedOnScroll>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col xs="12" md="6">
          <Row className="text-center">
            <Col xs="12" md="12" className="mensagem-2">
              <h4>CONHEÇA NOSSO</h4>
            </Col>
            <Col xs="12" md="12" className="name-product">
              <AnimatedOnScroll
                className="w-100"
                animationIn="bounce"
                animationInDuration={1000}
              >
                <h2>{props.produto.nome}</h2>
              </AnimatedOnScroll>
            </Col>
            <Col xs="12" md="12">
              <AnimatedOnScroll
                className="w-100"
                animationIn="bounce"
                animationInDuration={2000}
              >
                <iframe
                  src={props.produto.video}
                  frameBorder="2"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                />
              </AnimatedOnScroll>
            </Col>
            <Col
              xs="12"
              md="12"
              className="buy-button w-100"
              id="button-desktop"
            >
              <Row className="justify-content-center">
                <Col md="5">
                  <Button size="lg" outline href="#" block>
                    COMPRAR AGORA
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="6">
          <AnimatedOnScroll
            className="w-100"
            animationIn="fadeInLeft"
            animationInDuration={1000}
          >
            {props.files.map((file,index) => file.idImagem === props.produto.idImagem && <img key={index} className="img-product" src={ file.url } alt="" />)}
          </AnimatedOnScroll>
        </Col>
        <Col xs="12" md="12" id="button-mobile">
          <Row className="justify-content-center">
            <Col xs="12" md="12" className="mensagem-3">
              <h4>PENSADO PARA TE TRAZER CONFORTO</h4>
            </Col>
            <Col md="12" className="buy-button w-100">
              <Button size="lg" href="#" block>
                COMPRAR AGORA
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="12">
          <Row className="saberm">
            <Col xs="12" md="12" className="mensagem-4">
              <AnimatedOnScroll
                className="w-100"
                animationIn="fadeIn"
                animationInDuration={1800}
              >
                <h5>SABER MAIS</h5>
              </AnimatedOnScroll>
            </Col>
            <Col xs="12" md="12">
              <AnimatedOnScroll
                className="w-100"
                animationIn="fadeIn"
                animationInDuration={1800}
              >
              <FaAngleDoubleDown className="mt-2" size='2em' color='#fff'/>
              </AnimatedOnScroll>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Produto;
