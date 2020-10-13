import React from "react";
import { Button, Col, Container, Form, Input, Label, Row } from "reactstrap";
import api from "../../services/api";
import "./login.css";
function Login({ history }) {
  function handleLogin(e) {
    e.preventDefault();
    let data = {
      nome: "admin",
      email: e.target[0].value,
      senha: e.target[1].value,
    };
    api.post("/auth", data).then(function (res) {
      if (res.data.status) {
        sessionStorage.setItem("@api-landing:JWT_TOKEN", res.data.token);
        history.push("edit");
      }
    });
  }

  return (
    <Container className="justify-content-center align-items-center content-login">
      <Row className="justify-content-center align-items-center mt-5 mb-5">
        <img
          src="https://accounts.cartx.io/assets/images/logo/full.svg"
          className="mb-3"
          height="40"
          alt=""
        />
      </Row>
      <Row className="text-left">
        <Col xs="10" md="4 mx-auto content-form">
          <Form onSubmit={handleLogin} className="form-login">
            <h6 className="msg-login">
              {" "}
              Seja Bem-vindo(a)! Efetue o login para editar sua página.
            </h6>
            <Label>Endereço de email</Label>

            <Input type="text" name="email" placeholder="Seu email" required />

            <Label>Senha</Label>

            <Input
              type="password"
              name="password"
              placeholder="Sua senha"
              required
            />
            <Button className="button-login" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
