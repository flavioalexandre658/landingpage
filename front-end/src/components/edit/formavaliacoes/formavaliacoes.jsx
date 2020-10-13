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
import "./formavaliacoes.css";
import Dropzone from "react-dropzone";
import api from "../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const FormAvaliacoes = (props) => {
  const customId = "custom-id";
  const addAvaliacoes = (e) => {
    e.preventDefault();
    props.avaliacoes.map((avaliacao) =>
      api.post("/addAvaliacoes", avaliacao).then(function (res) {
        if (!res.data.status) {
          api.put("/editAvaliacoes", avaliacao).then(function (res) {
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

  const addNewAvaliacao = () => {
    props.setAvaliacoes([
      ...props.avaliacoes,
      {
        id: props.avaliacoes.length + 1,
        titulo: "Paulo Augusto",
        cidade: "Salvador - BA",
        idImagem: "",
      },
    ]);
  };

  const removeAvaliacao = (avaliacao) => {
    props.setAvaliacoes(
      props.avaliacoes.filter((item) => item.id !== avaliacao.id)
    );
    api.get("/getAvaliacao/" + avaliacao.id).then(function (res) {
      if (res.data.length > 0) {
        api.delete("/removerAvaliacao/" + avaliacao.id).then(function (res) {
          if (res.data.status) {
            if (avaliacao.idImagem !== "") {
              api.get("/getFile/" + avaliacao.idImagem).then(function (res) {
                if (res.data.length > 0) {
                  api.delete("/removerFile/" + avaliacao.idImagem);
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
    const uploadedFiles = {
      file: file[0],
      idImagem: "avaliacao-" + indice,
      name: file[0].name,
      chave: file[0].name,
      size: file[0].size,
      url: URL.createObjectURL(file[0]),
    };

    props.files.forEach((file, index) => {
      if (file.idImagem === uploadedFiles.idImagem) {
        props.files.splice(index, 1);
      }
    });

    props.setFiles([...props.files, uploadedFiles]);
    props.avaliacoes.forEach((avaliacao, index) => {
      if (avaliacao.idImagem === "") {
        handleAvaliacoes(index, uploadedFiles.idImagem);
      }
    });
  };

  const handleAvaliacoes = (index, id) => {
    const newAvaliacoes = [...props.avaliacoes];
    let newAvaliacao = { ...newAvaliacoes[index] };
    newAvaliacao.idImagem = id;
    newAvaliacoes[index] = newAvaliacao;
    props.setAvaliacoes(newAvaliacoes);
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
      <Label>Imagem</Label>
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
      <Label>Nome da pessoa</Label>
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
      <Label>Cidade</Label>
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
