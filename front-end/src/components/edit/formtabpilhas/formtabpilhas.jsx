import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  ListGroup,
  ListGroupItem,
  UncontrolledCollapse,
  Row,
  Col,
  Button,
} from "reactstrap";

import api from "../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const FormTabPilhas = (props) => {
  const addPilhas = (e) => {
    e.preventDefault();
    const customId = "custom-id";
    props.pilhas.map((pilha) =>
      api.post("/addPilhas", pilha).then(function (res) {
        if (!res.data.status) {
          api.put("/editPilhas", pilha).then(function (res) {
            if (res.data.status) {
              toast.success(res.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                toastId: customId,
              });
            } else {
              toast.error(res.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                toastId: customId,
              });
            }
          });
        } else {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: customId,
          });
        }
      })
    );
  };

  const addNewPilha = () => {
    props.setPilhas([
      ...props.pilhas,
      {
        id: props.pilhas.length + 1,
        titulo: "Titulo",
        conteudo: "Aqui você coloca informações relevantes",
        animacao: "fadeInRight",
      },
    ]);
  };

  const removePilha = (pilha) => {
    props.setPilhas(props.pilhas.filter((item) => item.id !== pilha.id));
    api.delete("/removerPilha/" + pilha.id).then(function (res) {
      if (res.data.status) {
        toast.warning(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("Erro ao remover.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };
  const FormTab = props.pilhas.map((pilhas, index) => (
    <FormGroup key={index}>
      <Row className="align-items-center">
        <Col xs="6" md="6">
          <Label>Pilha {index}</Label>
        </Col>
        <Col xs="6" md="6" className="excluir-tab text-right">
          <NavLink href="#" onClick={() => removePilha(pilhas)}>
            {" "}
            excluir
          </NavLink>
        </Col>
      </Row>
      <Input
        onChange={(e) => {
          let { value } = e.target;
          const newInfos = [...props.pilhas];
          let newInfo = { ...newInfos[index] };
          newInfo.titulo = value;
          newInfos[index] = newInfo;
          props.setPilhas(newInfos);
        }}
        type="text"
        name="texttitle"
        placeholder="Titulo Pilha"
      />
      <Input
        onChange={(e) => {
          let { value } = e.target;
          const newInfos = [...props.pilhas];
          let newInfo = { ...newInfos[index] };
          newInfo.conteudo = value;
          newInfos[index] = newInfo;
          props.setPilhas(newInfos);
        }}
        type="textarea"
        name="texttab"
        placeholder="Texto Pilha"
      />
      <Input
        onChange={(e) => {
          let { value } = e.target;
          const newInfos = [...props.pilhas];
          let newInfo = { ...newInfos[index] };
          newInfo.imagem = value;
          newInfos[index] = newInfo;
          props.setPilhas(newInfos);
        }}
        type="file"
        name="imagecoment3"
        id="imagecoment3"
      />
      <hr />
    </FormGroup>
  ));
  return (
    <ListGroup>
      <ListGroupItem tag="a" className="form-session" id="tab-pilha" action>
        Pilhas
      </ListGroupItem>
      <UncontrolledCollapse toggler="#tab-pilha">
        <Form className="text-center" onSubmit={addPilhas}>
          {FormTab}
          <NavLink href="#" onClick={addNewPilha}>
            + add novo tab-pilha
          </NavLink>
          <Button type="submit">Salvar</Button>
        </Form>
      </UncontrolledCollapse>
    </ListGroup>
  );
};
export default FormTabPilhas;
