import React from "react";
import {
    Row,
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    UncontrolledCollapse
  } from "reactstrap";
const Faq = (props) => {
  return (
    <Container
      className="justify-content-center div-questions themed-container pt-5 pb-5"
      fluid={true}
    >
      <h3>PERGUNTAS FREQUENTES </h3>
      <Row className="justify-content-center">
        <Col xs="12" md="8">
          <ListGroup>
            <ListGroupItem tag="button" id="um" action>
              Qual o prazo de entrega ?
            </ListGroupItem>
            <UncontrolledCollapse toggler="#um">
              <p>
                Pelo fato do produto ser de origem internacional o nosso prazo
                de entrega varia entre 15 a 30 dias úteis (em média). Porem a
                média de recebimento é de 25 dias úteis.
              </p>
            </UncontrolledCollapse>
            <ListGroupItem tag="button" id="dois" action>
              Os produtos possuem rastreamento ?
            </ListGroupItem>
            <UncontrolledCollapse toggler="#dois">
              <p>
                Todos os nossos produtos possuem rastreamento. Após o produto
                ser despachado você receberá o código de rastreamento do seu
                produto e poderá acompanhá-lo quando quiser.
              </p>
            </UncontrolledCollapse>
            <ListGroupItem tag="button" id="seis" action>
              Esse site é seguro ?
            </ListGroupItem>
            <UncontrolledCollapse toggler="#seis">
              <p>
                Sim, 100% seguro! Utilizamos uma plataforma inovadora para
                efetuar nossos pagamentos. Dessa forma, os processos e
                ferramentas utilizadas seguem todos os protocolos de segurança
                mais avançados existentes.
              </p>
            </UncontrolledCollapse>
            <ListGroupItem tag="button" id="quatro" action>
              Qual a origem do meu produto ?
            </ListGroupItem>
            <UncontrolledCollapse toggler="#quatro">
              <p>
                Trabalhamos com revenda de produtos internacionais. Temos
                fornecedores no Canadá, Estados Unidos e China. A origem vai
                depender do tipo de produto que adquirir.
              </p>
            </UncontrolledCollapse>
            <ListGroupItem tag="button" id="cinco" action>
              Quando poderei solicitar trocas ou devoluções ?
            </ListGroupItem>
            <UncontrolledCollapse toggler="#cinco">
              <p>
                Quando o produto apresentar algum defeito ou vier diferente
                daquele anunciado.
              </p>
            </UncontrolledCollapse>
            <ListGroupItem tag="button" id="tres" action>
              Qual o prazo para solicitar trocas ou devoluções ?
            </ListGroupItem>
            <UncontrolledCollapse toggler="#tres">
              <p>
                Você pode solicitar sua troca ou devolução em até 7 dias após o
                recebimento do seu produto e enviá-lo para o nosso endereço.
                Após isso, em no máximo 2 dias úteis analisaremos a condição do
                produto e entraremos em contado com você via e-mail.
              </p>
            </UncontrolledCollapse>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Faq;
