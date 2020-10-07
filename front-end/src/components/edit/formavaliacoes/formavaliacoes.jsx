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
  Button
} from "reactstrap";
import "./formavaliacoes.css";

import api from "../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const FormAvaliacoes = (props) => {
  const addAvaliacoes = (e) => {
    e.preventDefault();
    const customId = "custom-id";
    props.avaliacoes.map((avaliacao) =>
      api.post("/addAvaliacoes", avaliacao).then(function (res) {
        if (!res.data.status) {
          api.put("/editAvaliacoes", avaliacao).then(function (res) {
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

  const addNewAvaliacao = () => {
    props.setAvaliacoes([
      ...props.avaliacoes,
      {
        id: props.avaliacoes.length + 1,
        imagem:
          "https://images.assets-landingi.com/OT8yTv3i709JEeEb/Screenshot_26.png",
        titulo: "Paulo Augusto",
        cidade: "Salvador - BA",
      },
    ]);
  };

  const removeAvaliacao = (avaliacao) => {
    props.setAvaliacoes(props.avaliacoes.filter((item) => item.id !== avaliacao.id));
    api.delete("/removerAvaliacao/" + avaliacao.id).then(function (res) {
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

  const FormAva = props.avaliacoes.map((avaliacao, index) => (
    <FormGroup key={index}>
      <Row className="align-items-center">
        <Col xs="6" md="6">
          <Label>Coment {index}</Label>
        </Col>
        <Col xs="6" md="6" className="excluir-tab text-right">
          <NavLink href="#" onClick={() => removeAvaliacao(avaliacao)}>
            {" "}
            excluir
          </NavLink>
        </Col>
      </Row>
      <Input type="file" name={index} />
      <Input
        onChange={(e) => {
          let { value } = e.target;
          const newInfos = [...props.avaliacoes];
          let newInfo = { ...newInfos[index] };
          newInfo.titulo = value;
          newInfos[index] = newInfo;
          props.setAvaliacoes(newInfos);
        }}
        type="text"
        name={index}
        placeholder="Titulo"
      />
      <Input
        onChange={(e) => {
          let { value } = e.target;
          const newInfos = [...props.avaliacoes];
          let newInfo = { ...newInfos[index] };
          newInfo.cidade = value;
          newInfos[index] = newInfo;
          props.setAvaliacoes(newInfos);
        }}
        type="text"
        name={index}
        placeholder="Cidade"
      />
      <hr />
    </FormGroup>
  ));
  return (
    <ListGroup>
      <ListGroupItem tag="a" className="form-session" id="avaliacao" action>
        Avaliacões
      </ListGroupItem>
      <UncontrolledCollapse toggler="#avaliacao">
        <Form className="text-center" onSubmit={addAvaliacoes}>
          {FormAva}
          <NavLink href="#" onClick={addNewAvaliacao}>
            + add nova avaliação
          </NavLink>
          <Button type="submit">Salvar</Button>
        </Form>
      </UncontrolledCollapse>
    </ListGroup>
  );
};
export default FormAvaliacoes;
