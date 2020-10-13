import React from "react";
import "./formtabinfos.css";
import api from "../../../services/api";
import {
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  ListGroup,
  ListGroupItem,
  UncontrolledCollapse,
  Button,
  Row,
  Col,
} from "reactstrap";
import Dropzone from "react-dropzone";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const FormTabInfos = (props) => {
  const addInformacoes = (e) => {
    e.preventDefault();
    const customId = "custom-id";
    props.informacoes.map((infos) =>
      api.post("/addInformacoes", infos).then(function (res) {
        if (!res.data.status) {
          api.put("/editInformacoes", infos).then(function (res) {
            if (res.data.status) {
              props.files.forEach((file) => {
                if (file.file !== undefined) {
                  const data = new FormData();
                  data.append("file", file.file);
                  data.append("id", file.idImagem);
                  api.put("/editFiles", data, {
                    headers: {
                      "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
                    },
                  });
                }
              });

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
          props.files.forEach((file) => {
            if (file.file !== undefined) {
              const data = new FormData();
              data.append("file", file.file);
              data.append("id", file.idImagem);
              api.post("/addFiles", data, {
                headers: {
                  "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
                },
              });
            }
          });

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

  const addNewInfo = () => {
    props.setInformacoes([
      ...props.informacoes,
      {
        id: props.informacoes.length + 1,
        titulo: "Informação",
        conteudo: "Aqui é para ser inserido informações sobre o produto",
        imagem:
          "https://www.blog.twed.com.br/wp-content/uploads/2018/06/7-Dados-informa%C3%A7%C3%B5es-e-indicadores.png",
        animacao: "fadeInRight",
        idImagem: "",
      },
    ]);
  };

  const removeInfo = (info) => {
    props.setInformacoes(
      props.informacoes.filter((item) => item.id !== info.id)
    );
    api.get("/getInformacao/" + info.id).then(function (res) {
      if (res.data.length > 0) {
        api.delete("/removerInformacao/" + info.id).then(function (res) {
          if (res.data.status) {
            if (info.idImagem !== "") {
              api.get("/getFile/" + info.idImagem).then(function (res) {
                if (res.data.length > 0) {
                  api.delete("/removerFile/" + info.idImagem);
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
  const handleUpload = (file, indice) => {
    let uploadedFiles = {};
    props.informacoes.forEach((infos, index) => {
      uploadedFiles = {
        file: file[0],
        idImagem: "info-" + indice,
        name: file[0].name,
        chave: file[0].name,
        size: file[0].size,
        url: URL.createObjectURL(file[0]),
      };
    });

    props.files.forEach((file, index) => {
      if (file.idImagem === uploadedFiles.idImagem) {
        props.files.splice(index, 1);
      }
    });

    props.setFiles([...props.files, uploadedFiles]);
    props.informacoes.forEach((info, index) => {
      if (info.idImagem === "") {
        handleInfos(index, uploadedFiles.idImagem);
      }
    });
  };

  const handleInfos = (index, id) => {
    const newInfos = [...props.informacoes];
    let newInfo = { ...newInfos[index] };
    newInfo.idImagem = id;
    newInfos[index] = newInfo;
    props.setInformacoes(newInfos);
  };
  const FormTab = props.informacoes.map((infos, index) => (
    <FormGroup key={index}>
      <Row className="align-items-center">
        <Col xs="6" md="6">
          <Label>Info {index}</Label>
        </Col>
        <Col xs="6" md="6" className="excluir-tab text-right">
          <NavLink href="#" onClick={() => removeInfo(infos)}>
            {" "}
            excluir
          </NavLink>
        </Col>
      </Row>
      <Dropzone onDrop={(file) => handleUpload(file, index)} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()} className="dropcontainer">
              <input {...getInputProps()} />
              <p>Inserir Imagem</p>
            </div>
          </section>
        )}
      </Dropzone>
      <Input
        type="text"
        name="titulo"
        placeholder="Titulo do tab"
        onChange={(e) => {
          const newInfos = [...props.informacoes];
          let newInfo = { ...newInfos[index] };
          newInfo.titulo = e.target.value;
          newInfos[index] = newInfo;
          props.setInformacoes(newInfos);
        }}
      />
      <Input
        onChange={(e) => {
          const newInfos = [...props.informacoes];
          let newInfo = { ...newInfos[index] };
          newInfo.conteudo = e.target.value;
          newInfos[index] = newInfo;
          props.setInformacoes(newInfos);
        }}
        type="textarea"
        name="conteudo"
        placeholder="Texto do tab"
      />
      <hr />
    </FormGroup>
  ));
  return (
    <ListGroup>
      <ListGroupItem tag="a" className="form-session" id="tab-info" action>
        Infos
      </ListGroupItem>
      <UncontrolledCollapse toggler="#tab-info">
        <Form className="text-center" onSubmit={addInformacoes}>
          {FormTab}
          <NavLink href="#" onClick={addNewInfo}>
            + add novo tab-info
          </NavLink>
          <Button type="submit">Salvar</Button>
        </Form>
      </UncontrolledCollapse>
    </ListGroup>
  );
};

export default FormTabInfos;
