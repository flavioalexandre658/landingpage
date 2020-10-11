//React Hooks
import React, { useState, useEffect } from "react";
import "./templatelanding.css";

import TabInfos from "./tabinfos/tabinfos";
import TabMotivos from "./tabmotivos/tabmotivos";
import TabPilhas from "./tabpilhas/tabpilhas";
import Avaliacoes from "./avaliacoes/avaliacoes";
import Precos from "./precos/precos";
import Produto from "./produto/produto";
import Garantias from "./garantias/garantias";
import Faq from "./faq/faq";
import Rodape from "./rodape/rodape";
import NavbarLp from "./navbarlp/navbarlp";
import api from '../../services/api'
import Avisooriginal from "./avisooriginal/avisooriginal";
//import {Link} from 'react-router-dom';
const TemplateLandingPage = (props) => {
  /* VÁRIAVEIS EDITAVEIS */
  let [files, setFiles] = useState([]);

  let [produto, setProduto] = useState({});

  let [rodape, setRodape] = useState({})

  let [informacoes, setInformacoes] = useState([]);

  let [motivos, setMotivos] = useState([]);

  let [pilhas, setPilhas] = useState([]);

  let [avaliacoes, setAvaliacoes] = useState([]);

  let [precos, setPrecos] = useState([]);

  /* SCRIT PARA GERAR O TIME*/
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
    <div>
      <div className="bg-page">
        <NavbarLp />
        <Produto produto={ props.produto || produto} files={ props.files || files }/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,110L0,112L160,112L160,160L320,160L320,96L480,96L480,128L640,128L640,96L800,96L800,128L960,128L960,288L1120,288L1120,130L1280,130L1280,160L1440,160L1440,320L1280,320L1280,320L1120,320L1120,320L960,320L960,320L800,320L800,320L640,320L640,320L480,320L480,320L320,320L320,320L160,320L160,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
      <TabInfos informacoes={props.informacoes || informacoes} files={ props.files || files } />
      <hr className="tab-separator" />
      <TabMotivos motivos={props.motivos || motivos} />
      <Avisooriginal />
      <TabPilhas pilhas={props.pilhas || pilhas} files={ props.files || files } />
      <div className="bg-page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
          <path
            fill=" rgb(231, 231, 231)"
            fillOpacity="1"
            d="M0,32L0,72L160,72L160,160L320,160L320,96L480,96L480,128L640,128L640,96L800,96L800,128L960,128L960,148L1120,148L1120,100L1280,100L1280,160L1440,160L1440,0L1280,0L1280,0L1120,0L1120,0L960,0L960,0L800,0L800,0L640,0L640,0L480,0L480,0L520,0L520,0L160,0L160,0L0,0L0,0Z"
          ></path>
        </svg>
        <Avaliacoes avaliacoes={props.avaliacoes || avaliacoes} files={ props.files || files } />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,110L0,112L160,112L160,160L320,160L320,96L480,96L480,128L640,128L640,96L800,96L800,128L960,128L960,288L1120,288L1120,130L1280,130L1280,160L1440,160L1440,320L1280,320L1280,320L1120,320L1120,320L960,320L960,320L800,320L800,320L640,320L640,320L480,320L480,320L320,320L320,320L160,320L160,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Precos precos={props.precos || precos} files={ props.files || files } />
      <Garantias />
      <Faq />
      <div className="bg-page">
        <Rodape rodape={props.rodape || rodape}  files={ props.files || files } />
      </div>
    </div>
  );
};
export default TemplateLandingPage;
