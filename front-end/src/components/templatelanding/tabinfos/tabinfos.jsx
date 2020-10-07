import React from 'react';
import {
    Row,
    Col,
    Container,
    CardBody,
    Card,
    CardImg,
  } from "reactstrap";
  import { AnimatedOnScroll } from "react-animated-css-onscroll";
  import './tabinfos.css';
  const TabInfos = (props) => {
    const TabInfo = props.informacoes.map((infos) => (
      <Col key={infos.id} xs="12" md="6  mt-3 div-info" >
        <AnimatedOnScroll
          animationIn={infos.animacao}
          animationInDuration={1400}
        >
          <Card>
          {props.files.map((item,index) => <CardImg key={index} top width="100%" src={item.idImagem === infos.idImagem ? item.url: item.url } alt="" />)}
            <CardBody>
              <h4 className="text-left">{infos.titulo}</h4>
              <p className="text-justify">{infos.conteudo}</p>
              {/*<p>{JSON.stringify(infos)}</p>*/}
            </CardBody>
          </Card>
        </AnimatedOnScroll>
      </Col>
    ));

    return (
      <Container className="justify-content-center mt-2">
        <Row className="align-items-center tab-1">{TabInfo}</Row>
      </Container>
    );
  }
export default TabInfos;