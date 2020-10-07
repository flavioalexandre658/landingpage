import React from "react";
import { Row, Col, Container, Button } from "reactstrap";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import './precos.css'
const Precos = (props) => {
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2080 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    for (let i = 0; i < props.precos.length; i++) {
      // Display the result in the element with id="demo"
      let timer = document.getElementById("timer" + i);
      if (timer !== null && timer !== undefined) {
        timer.innerHTML = hours + ":" + minutes + ":" + seconds + "";
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          timer.innerHTML = "EXPIRED";
        }
      }
    }
  }, 1000);

  const Prec = props.precos.map((preco, index) => (
    <Col xs="10" md="3 div-price" key={index}>
      <AnimatedOnScroll
        animationIn="zoomInLeft"
        animationInDuration={1400}
        animationOutDuration={1400}
        isVisible={true}
      >
        <Row className="align-items-center info-price">
          <Col xs="12" md="12">
            <Row className="text-middle align-items-center">
              <Col xs="12" md="12 pr-0">
                <span className="mb-0 unidade">{preco.unidade} UNIDADE(S)</span>
              </Col>
            </Row>
            <Row>
              <img className="w-100 img-preco" src={preco.imagem} alt="" />
            </Row>
            <Row className="text-middle align-items-center price-content">
              <Col xs="12" md="12 pr-0">
                <span className="mb-0 parcel-text">
                  POR APENAS {preco.parcela}x
                </span>
              </Col>
              <Col xs="2" md="2 pr-0">
                <h3 className="mb-0">R$</h3>
              </Col>
              <Col xs="9" md="9 pl-0" className="text-center price-parcel">
                <span className="price">
                  {(preco.preco / preco.parcela).toFixed(2)}
                </span>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs="12" md="12 pt-2">
                <h5>FRETE GRÁTIS ACABA EM:</h5>
              </Col>
              <Col xs="12" md="12">
                <p className="timer" id={"timer" + index}></p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Button outline href="#">
                COMPRAR AGORA
              </Button>{" "}
            </Row>
          </Col>
        </Row>
      </AnimatedOnScroll>
    </Col>
  ));

  return (
    <Container
      className="justify-content-center session-price themed-container"
      fluid={true}
    >
      <AnimatedOnScroll
        animationIn="bounceIn"
        animationInDuration={1400}
        animationOutDuration={1400}
        isVisible={true}
      >
        <Row className="justify-content-center title-price">
          <Col xs="12" md="12">
            <h2 className="mb-0">ESCOLHA A MELHOR</h2>
          </Col>
          <Col xs="12" md="12">
            <h1>OFERTA PARA VOCÊ!</h1>
          </Col>
          <Col xs="12" md="3" className="descont-content">
            <h3 className="mb-0">PRIMEIRA COMPRA</h3>
            <h3 className="mb-0">COM 5% DESCONTO</h3>
          </Col>
        </Row>
      </AnimatedOnScroll>
      <Row className="justify-content-center">{Prec}</Row>
    </Container>
  );
};
export default Precos;
