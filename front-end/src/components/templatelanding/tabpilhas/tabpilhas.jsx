import React, { useState } from "react";
import classnames from "classnames";
import { NavLink, Row, Col, Container, TabContent, TabPane } from "reactstrap";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "./tabpilhas.css";
const TabPilhas = (props) => {
  //TABS
  const [activeTab, setActiveTab] = useState(1);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const TabPilha = props.pilhas.map((pilha) => (
    <NavLink
      key={pilha.id}
      size="lg w-100"
      className={classnames({ active: activeTab === pilha.id })}
      onClick={() => {
        toggle(pilha.id);
      }}
    >
      <Row>
        <Col xs="12" md="12">
          <h4 className="text-left title-button-tabs-pilha">{pilha.titulo}</h4>
        </Col>
        <Col xs="12" md="12">
          <p className="text-left">{pilha.conteudo}</p>
        </Col>
      </Row>
    </NavLink>
  ));
  const TabPilhaImg = props.pilhas.map((pilha) => (
    <TabPane tabId={pilha.id} key={pilha.id}>
      <Container className="justify-content-center">
        <Row className="align-items-center">
          <Col xs="12" md="12">
            <AnimatedOnScroll
              animationIn={pilha.animacao}
              animationInDuration={1000}
              isVisible={true}
            >
              {props.files.map(
                (file, index) =>
                  file.idImagem === pilha.idImagem && (
                    <img
                      key={index}
                      width="100%"
                      src={file.url}
                      alt=""
                    />
                  )
              )}
            </AnimatedOnScroll>
          </Col>
        </Row>
      </Container>
    </TabPane>
  ));
  return (
    <Row className="justify-content-start nav-items-tabs-pilha">
      <Col xs="12" md="5" className="pr-0">
        <Row className="align-items-start">
          <Col xs="12" md="12" className="tabs-pilha-button">
            {TabPilha}
          </Col>
        </Row>
      </Col>
      <Col xs="12" md="7" className="pl-0 tab-pilha-imagem">
        <TabContent activeTab={activeTab} className="tab-container ">
          {TabPilhaImg}
        </TabContent>
      </Col>
    </Row>
  );
};
export default TabPilhas;
