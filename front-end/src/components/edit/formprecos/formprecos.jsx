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

const FormPrecos = (props) => {
  const addPrecos = (e) => {
    e.preventDefault();
    const customId = "custom-id";
    props.precos.map((preco) =>
      api.post("/addPrecos", preco).then(function (res) {
        if (!res.data.status) {
          api.put("/editPrecos", preco).then(function (res) {
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

  const addNewPreco = () => {
    props.setPrecos([
      ...props.precos,
      {
        id: props.precos.length + 1,
        preco: 50,
        parcela: 12,
        unidade: 1,
        idImagem: ""
      },
    ]);
  };

  const removePreco = (preco) => {
    props.setPrecos(props.precos.filter((item) => item.id !== preco.id));
    api.delete("/removerPreco/" + preco.id).then(function (res) {
      if (res.data.status) {
        api.delete("/removerFile/" + preco.idImagem)
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
      idImagem: "preco-" + indice,
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
    props.precos.forEach((preco, index) => {
      if (preco.idImagem === "") {
        handlePrecos(index, uploadedFiles.idImagem);
      }
    });
  };

  const handlePrecos = (index, id) => {
    const newPrecos = [...props.precos];
    let newPreco = { ...newPrecos[index] };
    newPreco.idImagem = id;
    newPrecos[index] = newPreco;
    props.setPrecos(newPrecos);
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
      <Label for="unidade">Unidade</Label>
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
      <Label for="imagem">Imagem</Label>
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
      <Label for="preco">Preço</Label>
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
      <Label for="parcelas">Parcelas</Label>
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
