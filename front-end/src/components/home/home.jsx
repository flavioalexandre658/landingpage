import React from 'react';
import './home.css';
import {
    Row, Col, Container
    } from 'reactstrap';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
const Coments = (props) => {
    return(
        <div>
            <Container className="justify-content-center themed-container" fluid={true}>
                <AnimatedOnScroll animationIn="zoomIn"     animationInDuration={1400}    isVisible={true}  >
                <Row className="justify-content-center title-coment">
                    <h1>DEPOIMENTOS DE QUEM JÁ COMPROU</h1>
                </Row>
                </AnimatedOnScroll>
                <Row className="justify-content-center">
                    <Col xs="10" md="3 mr-3 div-coment">
                    
                        <Row className="justify-content-center">
                            <Col xs="3" md="3" className="num-coment">
                                <h1>1</h1>
                            </Col>
                        </Row>

                        
                        <Row className="align-items-center info-coment">
                            <Col xs="12" md="12" className="img-coment">
                            <AnimatedOnScroll animationIn="flipInY"     animationInDuration={1400}    isVisible={true}  >
                                <Row className="text-middle">
                                    <Col xs="12" md="12">
                                        <img src="https://images.assets-landingi.com/OT8yTv3i709JEeEb/Screenshot_26.png" alt=""/>
                                    </Col>
                                    <Col xs="12" md="12" className="star-coment">
                                        <span>★★★★★</span>
                                    </Col>
                                </Row>
                                </AnimatedOnScroll>
                                <AnimatedOnScroll animationIn="flipInY"     animationInDuration={1600}    isVisible={true}  >
                                <Row className="justify-content-center info-text">
                                    <Col xs="12" md="7">
                                        <h4>Rafix MK</h4>
                                    </Col>
                                    <Col xs="12" md="7">
                                        <span><b>Summers Rift</b></span>
                                    </Col>
                                </Row>
                                </AnimatedOnScroll>
                            </Col>
                        </Row>
                    
                    </Col>
                    <Col xs="10" md="3 mr-3 div-coment">
                        
                        <Row className="justify-content-center">
                            <Col xs="3" md="3" className="num-coment">
                                <h1>2</h1>
                            </Col>
                        </Row>
                        
                        
                        <Row className="align-items-center info-coment">
                            <Col xs="12" md="12" className="img-coment">
                            <AnimatedOnScroll animationIn="flipInY"     animationInDuration={1400}    isVisible={true}  >
                                <Row className="text-middle">
                                    <Col xs="12" md="12">
                                        <img src="https://images.assets-landingi.com/OT8yTv3i709JEeEb/Screenshot_26.png" alt=""/>
                                    </Col>
                                    <Col xs="12" md="12" className="star-coment">
                                        <span>★★★★★</span>
                                    </Col>
                                </Row>
                                </AnimatedOnScroll>
                                <AnimatedOnScroll animationIn="flipInY"     animationInDuration={1600}    isVisible={true}  >
                                <Row className="justify-content-center info-text">
                                    <Col xs="12" md="7">
                                        <h4>Rafix MK</h4>
                                    </Col>
                                    <Col xs="12" md="7">
                                        <span><b>Summers Rift</b></span>
                                    </Col>
                                </Row>
                                </AnimatedOnScroll>
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col xs="10" md="3 div-coment">
                        
                        <Row className="justify-content-center">
                            <Col xs="3" md="3" className="num-coment">
                                <h1>3</h1>
                            </Col>
                        </Row>
                        
                        
                        <Row className="align-items-center info-coment">
                            <Col xs="12" md="12" className="img-coment">
                            <AnimatedOnScroll animationIn="flipInY"     animationInDuration={1400}    isVisible={true}  >
                                <Row className="text-middle">
                                    <Col xs="12" md="12">
                                        <img src="https://images.assets-landingi.com/OT8yTv3i709JEeEb/Screenshot_26.png" alt=""/>
                                    </Col>
                                    <Col xs="12" md="12" className="star-coment">
                                        <span>★★★★★</span>
                                    </Col>
                                </Row>
                                </AnimatedOnScroll>
                                <AnimatedOnScroll animationIn="flipInY"     animationInDuration={1600}    isVisible={true}  >
                                <Row className="justify-content-center info-text">
                                    <Col xs="12" md="7">
                                        <h4>Rafix MK</h4>
                                    </Col>
                                    <Col xs="12" md="7">
                                        <span><b>Summers Rift</b></span>
                                    </Col>
                                </Row>
                                </AnimatedOnScroll>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Coments;