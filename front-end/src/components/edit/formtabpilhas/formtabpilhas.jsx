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
import Dropzone from "react-dropzone";
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
        idImagem: "",
      },
    ]);
  };

  const removePilha = (pilha) => {
    props.setPilhas(props.pilhas.filter((item) => item.id !== pilha.id));
    api.delete("/removerPilha/" + pilha.id).then(function (res) {
      if (res.data.status) {
        api.delete("/removerFile/" + pilha.idImagem);
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

  const handleUpload = (file, indice) => {
    const uploadedFiles = {
      file: file[0],
      idImagem: "pilha-" + indice,
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
    props.pilhas.forEach((pilha, index) => {
      if (pilha.idImagem === "") {
        handlePilhas(index, uploadedFiles.idImagem);
      }
    });
  };

  const handlePilhas = (index, id) => {
    const newPilhas = [...props.pilhas];
    let newPilha = { ...newPilhas[index] };
    newPilha.idImagem = id;
    newPilhas[index] = newPilha;
    props.setPilhas(newPilhas);
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
        onChange={(e) => {
          let { value } = e.target;
          const newPilhas = [...props.pilhas];
          let newPilha = { ...newPilhas[index] };
          newPilha.titulo = value;
          newPilhas[index] = newPilha;
          props.setPilhas(newPilhas);
        }}
        type="text"
        name="texttitle"
        placeholder="Titulo Pilha"
      />
      <Input
        onChange={(e) => {
          let { value } = e.target;
          const newPilhas = [...props.pilhas];
          let newPilha = { ...newPilhas[index] };
          newPilha.conteudo = value;
          newPilhas[index] = newPilha;
          props.setPilhas(newPilhas);
        }}
        type="textarea"
        name="texttab"
        placeholder="Texto Pilha"
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
