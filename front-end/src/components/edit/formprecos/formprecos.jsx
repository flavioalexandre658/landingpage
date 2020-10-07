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

const FormPrecos = (props) => {
  const addPrecos = (e) => {
    e.preventDefault();
    const customId = "custom-id";
    props.precos.map((preco) =>
      api.post("/addPrecos", preco).then(function (res) {
        if (!res.data.status) {
          api.put("/editPrecos", preco).then(function (res) {
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

  const addNewPreco = () => {
    props.setPrecos([
      ...props.precos,
      {
        id: props.precos.length + 1,
        preco: 50,
        parcela: 12,
        unidade: 1,
        imagem: "https://acesso.fornlog.com/cdn/MTc%3D/source/cover.jpg",
      },
    ]);
  };

  const removePreco = (preco) => {
    props.setPrecos(props.precos.filter((item) => item.id !== preco.id));
    api.delete("/removerPreco/" + preco.id).then(function (res) {
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

  const FormPreco = props.precos.map((preco, index) => (
    <FormGroup key={index}>
      <Row className="align-items-center">
        <Col xs="6" md="6">
          <Label>Preço {index}</Label>
        </Col>
        <Col xs="6" md="6" className="excluir-tab text-right">
          <NavLink href="#" onClick={() => removePreco(preco)}>
            {" "}
            excluir
          </NavLink>
        </Col>
      </Row>
      <Input
        onChange={(e) => {
          let { value } = e.target;
          const newInfos = [...props.precos];
          let newInfo = { ...newInfos[index] };
          newInfo.unidade = value;
          newInfos[index] = newInfo;
          props.setPrecos(newInfos);
        }}
        type="text"
        name={index}
        placeholder="Unidade"
      />
      <Input
        onChange={(e) => {
          let { value } = e.target;
          const newInfos = [...props.precos];
          let newInfo = { ...newInfos[index] };
          newInfo.preco = value;
          newInfos[index] = newInfo;
          props.setPrecos(newInfos);
        }}
        type="text"
        name={index}
        placeholder="Preço"
      />
      <Input
        onChange={(e) => {
          let { value } = e.target;
          const newInfos = [...props.precos];
          let newInfo = { ...newInfos[index] };
          newInfo.parcela = value;
          newInfos[index] = newInfo;
          props.setPrecos(newInfos);
        }}
        type="text"
        name={index}
        placeholder="Parcelas"
      />
      <Input
        onChange={(e) => {
          let { value } = e.target;
          const newInfos = [...props.precos];
          let newInfo = { ...newInfos[index] };
          newInfo.imagem = value;
          newInfos[index] = newInfo;
          props.setPrecos(newInfos);
        }}
        type="text"
        name={index}
        placeholder="Imagem"
      />
      <hr />
    </FormGroup>
  ));
  return (
    <ListGroup>
      <ListGroupItem tag="a" className="form-session" id="preco" action>
        Preços
      </ListGroupItem>
      <UncontrolledCollapse toggler="#preco">
        <Form className="text-center" onSubmit={addPrecos}>
          {FormPreco}
          <NavLink href="#" onClick={addNewPreco}>
            + add novo preco
          </NavLink>
          <Button type="submit">Salvar</Button>
        </Form>
      </UncontrolledCollapse>
    </ListGroup>
  );
};
export default FormPrecos;
