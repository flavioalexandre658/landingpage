import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import api from "../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const FormRodape = (props) => {
  const addRodape = (e) => {
    e.preventDefault();
    const customId = "custom-id";
    let rodape = props.rodape;
    api.post("/addRodape", rodape).then(function (res) {
      if (!res.data.status) {
        api.put("/editRodape", rodape).then(function (res) {
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
    });
  };
  return (
    <Form className="text-center" onSubmit={addRodape}>
      <FormGroup>
        <Label for="logomarca">Logomarca</Label>
        <Input
          onChange={(e) =>
            props.setRodape({ ...props.rodape, logomarca: e.target.value })
          }
          type="text"
          name="logomarca"
          placeholder="logomarca"
        />
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
