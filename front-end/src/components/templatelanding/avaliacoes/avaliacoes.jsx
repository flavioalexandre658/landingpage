import React from "react";
import { Row, Col, Container } from "reactstrap";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "./avaliacoes.css";
const Avaliacoes = (props) => {
  const Ava = props.avaliacoes.map((avaliacao) => (
    <Col xs="10" md="3 mr-3 div-coment" key={avaliacao.id}>
      <Row className="justify-content-center">
        <Col xs="3" md="3" className="num-coment">
          <h1>{avaliacao.id}</h1>
        </Col>
      </Row>

      <Row className="align-items-center info-coment">
        <Col xs="12" md="12">
          <AnimatedOnScroll
            animationIn="flipInY"
            animationInDuration={1400}
            isVisible={true}
          >
            <Row className="text-middle">
              <Col xs="12" md="12">
                {props.files.map(
                  (file, index) =>
                    file.idImagem === avaliacao.idImagem && (
                      <img key={index} width="100%" src={file.url} alt="" />
                    )
                )}
              </Col>
              <Col xs="12" md="12" className="star-coment">
                <span>★★★★★</span>
              </Col>
            </Row>
          </AnimatedOnScroll>
          <AnimatedOnScroll
            animationIn="flipInY"
            animationInDuration={1600}
            isVisible={true}
          >
            <Row className="justify-content-center info-text">
              <Col xs="12" md="7">
                <h4>{avaliacao.titulo}</h4>
              </Col>
              <Col xs="12" md="7">
                <span>
                  <b>{avaliacao.cidade}</b>
                </span>
              </Col>
            </Row>
          </AnimatedOnScroll>
        </Col>
      </Row>
    </Col>
  ));

  return (
    <Container
      className="justify-content-center themed-container"
      id="coments"
      fluid={true}
    >
      <AnimatedOnScroll
        animationIn="zoomIn"
        animationInDuration={1400}
        isVisible={true}
      >
        <Row className="justify-content-center title-coment">
          <h1>DEPOIMENTOS DE QUEM JÁ COMPROU</h1>
        </Row>
      </AnimatedOnScroll>
      <Row className="justify-content-center">{Ava}</Row>
    </Container>
  );
};
export default Avaliacoes;
