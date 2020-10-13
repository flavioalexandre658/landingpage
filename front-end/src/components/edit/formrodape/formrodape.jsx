import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Dropzone from "react-dropzone";
import api from "../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const FormRodape = (props) => {
  const addRodape = (e) => {
    e.preventDefault();
    const customId = "custom-id";
    let rodape = props.rodape;

        api.put("/editRodape", rodape).then(function (res) {
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

        props.files.forEach((file) => {
          const data = new FormData();
          data.append("file", file.file);
          data.append("id", file.idImagem);
          api.post("/addFiles", data, {
            headers: {
              "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
            },
          }).then(function (res) {
          if(!res.data.status){
            props.files.forEach((file) => {
              const data = new FormData();
              data.append("file", file.file);
              data.append("id", file.idImagem);
              api.put("/editFiles", data, {
                headers: {
                  "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
                },
              })
            });
          }
          });
        });

  };
  const handleUpload = (file) => {
    const uploadedFiles = {
      file: file[0],
      idImagem: "rodape-0",
      name: file[0].name,
      chave: file[0].name,
      size: file[0].size,
      url: URL.createObjectURL(file[0]),
    };

    props.files.forEach((file, index) => {
      if (file.idImagem === "rodape-0") {
        props.files.splice(index, 1);
      }
    });

    props.setFiles([...props.files, uploadedFiles]);
    props.setRodape({ ...props.rodape, idImagem: uploadedFiles.idImagem })
  };



  return (
    <Form className="text-center" onSubmit={addRodape}>
      <FormGroup>
        <Label for="logomarca">Logomarca</Label>
        <Dropzone onDrop={handleUpload} multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()} className="dropcontainer">
                <input {...getInputProps()} />
                <p>Inserir Imagem</p>
              </div>
            </section>
          )}
        </Dropzone>
        <Label for="sobrenos">Sobre nós</Label>
        <Input
          onChange={(e) =>
            props.setRodape({ ...props.rodape, sobrenos: e.target.value })
          }
          type="textarea"
          name="sobrenos"
          id="sobrenos"
          placeholder="Fale um pouco sobre a loja"
        />
        <Label for="email">Email</Label>
        <Input
          onChange={(e) =>
            props.setRodape({ ...props.rodape, email: e.target.value })
          }
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <Label for="endereco">Endereço</Label>
        <Input
          onChange={(e) =>
            props.setRodape({ ...props.rodape, endereco: e.target.value })
          }
          type="text"
          name="endereco"
          id="endereco"
          placeholder="Endereço da sua loja"
        />
        <Label for="telefone">Telefone/Celular</Label>
        <Input
          onChange={(e) =>
            props.setRodape({ ...props.rodape, telefone: e.target.value })
          }
          type="text"
          name="telefone"
          id="telefone"
          placeholder="Telefone/Celular da sua loja"
        />
      </FormGroup>
      <Button type="submit">Salvar</Button>
    </Form>
  );
};

export default FormRodape;
