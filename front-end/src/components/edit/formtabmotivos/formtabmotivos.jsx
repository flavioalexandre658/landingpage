import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  ListGroup,
  Button,
  ListGroupItem,
  UncontrolledCollapse,
  Col,
  Row,
} from "reactstrap";
import api from "../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const FormTabMotivos = (props) => {
  const addMotivos = (e) => {
    e.preventDefault();
    const customId = "custom-id";
    props.motivos.map((motivo) =>
      api.post("/addMotivos", motivo).then(function (res) {
        if (!res.data.status) {
          api.put("/editMotivos", motivo).then(function (res) {
            if (res.data.status) {
              toast.success(res.data.message, {
                position: "top-right",
                autoClose: 1300,
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
                autoClose: 1300,
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
            autoClose: 1300,
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

  const addNewMotivo = () => {
    props.setMotivos([
      ...props.motivos,
      {
        id: props.motivos.length + 1,
        tituloTab: "3 VANTAGENS",
        titulo: "teste",
        conteudo: "teste",
        icone:
          "M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z",
      },
    ]);
  };

  const removeMotivo = (motivo) => {
    props.setMotivos(props.motivos.filter((item) => item.id !== motivo.id));
    api.get("/getMotivo/" + motivo.id).then(function (res) {
      if (res.data.length > 0) {
        api.delete("/removerMotivo/" + motivo.id).then(function (res) {
          if (res.data.status) {
            if (motivo.idImagem !== "") {
              api.get("/getFile/" + motivo.idImagem).then(function (res) {
                if (res.data.length > 0) {
                  api.delete("/removerFile/" + motivo.idImagem);
                }
              });
            }
            toast.warning(res.data.message, {
              position: "top-right",
              autoClose: 1300,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            toast.error("Erro ao remover.", {
              position: "top-right",
              autoClose: 1300,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
      }
    });
  };
  const FormTab = props.motivos.map((motivo, index) => (
    <FormGroup key={index}>
      <Row className="align-items-center">
        <Col xs="6" md="6">
          <Label>Motivo {index}</Label>
        </Col>
        <Col xs="6" md="6" className="excluir-tab text-right">
          <NavLink href="#" onClick={() => removeMotivo(motivo)}>
            {" "}
            excluir
          </NavLink>
        </Col>
      </Row>
      <Input
        onChange={(e) => {
          let { value } = e.target;
          const newInfos = [...props.motivos];
          let newInfo = { ...newInfos[index] };
          newInfo.titulo = value;
          newInfos[index] = newInfo;
          props.setMotivos(newInfos);
        }}
        type="text"
        name="texttitle"
        placeholder="Titulo Motivo"
      />
      <Input
        onChange={(e) => {
          let { value } = e.target;
          const newInfos = [...props.motivos];
          let newInfo = { ...newInfos[index] };
          newInfo.conteudo = value;
          newInfos[index] = newInfo;
          props.setMotivos(newInfos);
        }}
        type="textarea"
        name="texttab"
        placeholder="Texto Motivo"
      />
      <hr />
    </FormGroup>
  ));
  return (
    <ListGroup>
      <ListGroupItem tag="a" className="form-session" id="tab-motivo" action>
        Motivos
      </ListGroupItem>
      <UncontrolledCollapse toggler="#tab-motivo">
        <Form className="text-center" onSubmit={addMotivos}>
          {FormTab}
          <NavLink href="#" onClick={addNewMotivo}>
            + add novo tab-motivo
          </NavLink>
          <Button type="submit">Salvar</Button>
        </Form>
      </UncontrolledCollapse>
    </ListGroup>
  );
};
export default FormTabMotivos;
