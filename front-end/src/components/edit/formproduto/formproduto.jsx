import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Dropzone from "react-dropzone";
import { uniqueId } from "lodash";
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
    if (props.files[0]) {
      props.files.forEach((file) => {
        const data = new FormData();
        data.append("file", file.file);
        data.append("id", file.idImagem);
        api.put("/editFiles", data, {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          },
        });
      });
    }
  };
  /*const addNewImage = async () => {
        setSaving(true)
        const data = new FormData();
        data.append('card', cardFile);
    }*/
  const handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      idImagem: uniqueId(),
      name: file.name,
      uploaded: false,
      error: false,
      url: URL.createObjectURL(file),
    }));
    props.setFiles(uploadedFiles);
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
        <Dropzone onDrop={()=>handleUpload(1)} multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()} className="dropcontainer">
                <input {...getInputProps()} />
                <p>Inserir Imagem</p>
              </div>
            </section>
          )}
        </Dropzone>
        {/*<Input
          onChange={(e) => props.setImageProduct(e.target.value)}
          type="file"
          name="imageproduct"
          id="imageProduct"
        />*/}
      </FormGroup>
      <Button type="submit">Salvar</Button>
    </Form>
  );
};

export default FormProduto;
