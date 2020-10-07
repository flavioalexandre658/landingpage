import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  UncontrolledCollapse,
} from "reactstrap";
import Template from "../templatelanding/templatelanding";
import FormProduto from "./formproduto/formproduto";
import FormTabInfos from "./formtabinfos/formtabinfos";
import FormTabMotivos from "./formtabmotivos/formtabmotivos";
import FormTabPilhas from "./formtabpilhas/formtabpilhas";
import FormAvaliacoes from "./formavaliacoes/formavaliacoes";
import FormPrecos from "./formprecos/formprecos";
import "./edit.css";
import FormRodape from "./formrodape/formrodape";
import api from '../../services/api';
import {TiEdit, TiThMenuOutline} from 'react-icons/ti';

const Edit = (props) => {

/* VÁRIAVEIS EDITAVEIS */
let [files, setFiles] = useState([]);

let [produto, setProduto] = useState({});

let [rodape, setRodape] = useState({})

let [informacoes, setInformacoes] = useState([]);

let [motivos, setMotivos] = useState([]);

let [pilhas, setPilhas] = useState([]);

let [avaliacoes, setAvaliacoes] = useState([]);

let [precos, setPrecos] = useState([]);

useEffect(() => {
  api.get('/getFiles')
  .then(function(res){

    if(props.files === undefined)
      setFiles(res.data)
    })
 
  .catch(function(error){
      if(error)  console.log(error)
  })
}, [props.files])

useEffect(() => {
  api.get('/getProduto')
  .then(function(res){
    if(props.produto === undefined)
      setProduto(res.data[0])
  })
  .catch(function(error){
      if(error)  console.log(error)
  })
}, [props.produto])

useEffect(() => {
  api.get('/getInformacoes')
  .then(function(res){
    if(props.informacoes === undefined)
      setInformacoes(res.data)
  })
  .catch(function(error){
      if(error)  console.log(error)
  })
}, [props.informacoes])

useEffect(() => {
  api.get('/getMotivos')
  .then(function(res){
    
    if(props.motivos === undefined)
      setMotivos(res.data)
  })
  .catch(function(error){
      if(error)  console.log(error)
  })
}, [props.motivos])

useEffect(() => {
  api.get('/getPilhas')
  .then(function(res){
    
    if(props.pilhas === undefined)
      setPilhas(res.data)
  })
  .catch(function(error){
      if(error)  console.log(error)
  })
}, [props.pilhas])

useEffect(() => {
  api.get('/getAvaliacoes')
  .then(function(res){
    
    if(props.avaliacoes === undefined)
      setAvaliacoes(res.data)
  })
  .catch(function(error){
      if(error)  console.log(error)
  })
}, [props.avaliacoes])

useEffect(() => {
  api.get('/getPrecos')
  .then(function(res){
    
    if(props.precos === undefined)
      setPrecos(res.data)
  })
  .catch(function(error){
      if(error)  console.log(error)
  })
}, [props.precos])

useEffect(() => {
  api.get('/getRodape')
  .then(function(res){

    if(props.rodape === undefined)
      setRodape(res.data[0])
  })
  .catch(function(error){
      if(error)  console.log(error)
  })
}, [props.rodape])

  return (
    <Row>
      <Col xs="2" md="2" className="edit-content">
        <Row>
          <Col xs="12" md="12" className="pt-4">
            <Row>
              <Col xs="3" md="2 pr-0 text-right">
                <TiEdit/>
              </Col>
              <Col xs="9" md="9 pl-0 text-center">
                <h5>Edição de Landing</h5>
              </Col>
            </Row>
          </Col>
          <Col xs="12" md="12" className="w-100">
            <ListGroup>
              <ListGroupItem tag="a" id="um" className="a-content" action>
                <Row className="align-items-center">
                  <Col xs="9" md="9 text-left">
                    <h6>Sessão Inicial </h6>
                  </Col>
                  <Col xs="3" md="3">
                    <TiThMenuOutline />
                  </Col>
                </Row>
              </ListGroupItem>
              <UncontrolledCollapse toggler="#um">
                <Col xs="12" md="12" className="edit-sessions">
                  <FormProduto produto={produto} setProduto={setProduto} files={files} setFiles={setFiles}/>
                </Col>
              </UncontrolledCollapse>
              <ListGroupItem tag="a" id="dois" className="a-content" action>
                <Row className="align-items-center">
                  <Col xs="9" md="9 text-left">
                    <h6>Sessão Informações </h6>
                  </Col>
                  <Col xs="3" md="3">
                    <TiThMenuOutline />
                  </Col>
                </Row>
              </ListGroupItem>
              <UncontrolledCollapse toggler="#dois">
                <Col xs="12" md="12" className="edit-sessions">
                  <FormTabInfos
                    informacoes={informacoes}
                    setInformacoes={setInformacoes}
                    files={files} setFiles={setFiles}
                  />
                  <FormTabMotivos motivos={motivos} setMotivos={setMotivos} />
                  <FormTabPilhas pilhas={pilhas} setPilhas={setPilhas} />
                </Col>
              </UncontrolledCollapse>
              <ListGroupItem tag="a" id="tres" className="a-content" action>
                <Row className="align-items-center">
                  <Col xs="9" md="9 text-left">
                    <h6>Sessão Avaliações </h6>
                  </Col>
                  <Col xs="3" md="3">
                      <TiThMenuOutline />
                  </Col>
                </Row>
              </ListGroupItem>
              <UncontrolledCollapse toggler="#tres">
                <Col xs="12" md="12" className="edit-sessions">
                  <FormAvaliacoes
                    avaliacoes={avaliacoes}
                    setAvaliacoes={setAvaliacoes}
                  />
                </Col>
              </UncontrolledCollapse>
              <ListGroupItem tag="a" id="quatro" className="a-content" action>
                <Row className="align-items-center">
                  <Col xs="9" md="9 text-left">
                    <h6>Sessão Preço </h6>
                  </Col>
                  <Col xs="3" md="3">
                    <TiThMenuOutline />
                  </Col>
                </Row>
              </ListGroupItem>
              <UncontrolledCollapse toggler="#quatro">
                <Col xs="12" md="12" className="edit-sessions">
                  <FormPrecos precos={precos} setPrecos={setPrecos} />
                </Col>
              </UncontrolledCollapse>
              <ListGroupItem tag="a" id="cinco" className="a-content" action>
                <Row className="align-items-center">
                  <Col xs="9" md="9 text-left">
                    <h6>Sessão Rodapé </h6>
                  </Col>
                  <Col xs="3" md="3">
                    <TiThMenuOutline />
                  </Col>
                </Row>
              </ListGroupItem>
              <UncontrolledCollapse toggler="#cinco">
                <Col xs="12" md="12" className="edit-sessions">
                  <FormRodape rodape={rodape} setRodape={setRodape} />
                </Col>
              </UncontrolledCollapse>
            </ListGroup>
          </Col>
        </Row>
      </Col>
      <Col xs="10" md="10" className="edit-template-landing">
        <Template
          files={files}
          produto={produto}
          informacoes={informacoes}
          motivos={motivos}
          pilhas={pilhas}
          avaliacoes={avaliacoes}
          precos={precos}
          rodape={rodape}
        />
      </Col>
    </Row>
  );
};

export default Edit;
