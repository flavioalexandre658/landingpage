import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Dropzone from "react-dropzone";
import "./formproduto.css";

import api from "../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const FormProduto = (props) => {
  const addProduto = (e) => {
    e.preventDefault();
    const customId = "custom-id";
    let produto = props.produto;
    api.put("/editProduto", produto).then(function (res) {
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
  /*const addNewImage = async () => {
        setSaving(true)
        const data = new FormData();
        data.append('card', cardFile);
    }*/

    const handleUpload = (file) => {
      const uploadedFiles = {
        file: file[0],
        idImagem: "produto-0",
        name: file[0].name,
        chave: file[0].name,
        size: file[0].size,
        url: URL.createObjectURL(file[0]),
      };

      props.files.forEach((file, index) => {
        if (file.idImagem === "produto-0") {
          props.files.splice(index, 1);
        }
      });

      props.setFiles([...props.files, uploadedFiles]);
      props.setProduto({ ...props.produto, idImagem: uploadedFiles.idImagem })
    };
  return (
    <Form className="text-center" onSubmit={addProduto}>
      <FormGroup>
        <Label for="headLine">Headline</Label>
        <Input
          onChange={(e) =>
            props.setProduto({ ...props.produto, headline: e.target.value })
          }
          type="textarea"
          name="headline"
          id="headline"
          placeholder="Escreva sua headline"
        />
      </FormGroup>
      <FormGroup>
        <Label for="productName">Nome Produto</Label>
        <Input
          onChange={(e) =>
            props.setProduto({ ...props.produto, nome: e.target.value })
          }
          type="text"
          name="productname"
          id="productname"
          placeholder="Informe nome do produto"
        />
      </FormGroup>
      <FormGroup>
        <Label for="urlVideo">Video</Label>
        <Input
          onChange={(e) =>
            props.setProduto({ ...props.produto, video: e.target.value })
          }
          type="url"
          name="urlvideo"
          id="urlvideo"
          placeholder="Insira url do video"
        />
      </FormGroup>
      <FormGroup>
        <Label for="imagemProduto">Imagem</Label>
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
      </FormGroup>
      <Button type="submit">Salvar</Button>
    </Form>
  );
};

export default FormProduto;
