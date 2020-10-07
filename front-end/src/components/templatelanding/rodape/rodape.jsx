import React from "react";
import {
    Row,
    Col,
    Container
  } from "reactstrap";
  import {BsEnvelope} from 'react-icons/bs'
  import {FaWhatsapp} from 'react-icons/fa'
  import {RiStore2Line} from 'react-icons/ri'
const Rodape = (props) => {
  return (
    <Container
      className="justify-content-center div-footer themed-container pt-5"
      fluid={true}
    >
      <Row className="justify-content-start">
        <Col xs="12" md="4">
          <Row className="justify-content-center">
            <Col xs="7" md="6">
              <img
                className="w-100 mb-2"
                src={require("./logo-shop.png")}
                alt="COMPARIE"
              />
            </Col>
            <Col xs="10" md="12" className="sobre-nos">
              <p className="text-justifys">
                {
                  props.rodape.sobrenos /*Somos uma loja de origem bastante humilde e prezamos muito
              por transparência e sinceridade com nossos clientes. Nosso
              maior objetivo é fornecer produtos de qualidade. Buscamos
              sempre novidades internacionais para manter nosso portfólio
              atualizado com o que há de mais novo.*/
                }
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="4">
          <Row>
            <Col xs="12" md="12">
              <h3>CONTATOS</h3>
            </Col>
            <Col xs="12" md="12" className="contatos">
              <Row className="justify-content-center">
                <Col xs="10" md="7 pt-2">
                  <a href={"mailto:" + props.rodape.email}>
                    <BsEnvelope/>
                    <span className="pl-2">{props.rodape.email}</span>
                  </a>
                </Col>
                <Col xs="10" md="7 pt-2">
                <RiStore2Line/>
                <span className="pl-2">{props.rodape.endereco}</span>
                </Col>
                <Col xs="10" md="7 pt-2 mb-4">
                  <a
                    href={
                      "https://api.whatsapp.com/send?phone=" + props.rodape.telefone
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp/>
                    <span className="pl-2">{props.rodape.telefone}</span>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="4">
          <Row>
            <Col xs="12" md="12">
              <h3>SELOS DE SEGURANÇA</h3>
            </Col>
            <Col xs="12" md="12">
              <Row className="justify-content-center">
                <Col xs="10" md="7 pt-3">
                  <img
                    src="https://cdn.awsli.com.br/production/static/img/struct/stamp_encryptssl.png"
                    alt="Site Seguro"
                  />
                </Col>
                <Col xs="10" md="7">
                  <img
                    src="https://cdn.awsli.com.br/production/static/img/struct/stamp_google_safe_browsing.png"
                    alt="Google Safe Browsing"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Rodape;
