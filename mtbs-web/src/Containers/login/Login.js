import React, { useState } from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Wrapper } from "./Style";
import { Link, useHistory } from "react-router-dom";
import LogoKemenkes from "../../Assets/image/logo/kemenkes.png";
import LogoPuskemas from "../../Assets/image/logo/puskesmas.png";
import LogoUnpar from "../../Assets/image/logo/unpar.png";
import LogoInformatika from "../../Assets/image/logo/informatika.png";

const Login = () => {
  const history = useHistory();
  let [userName, setUserName] = useState();
  let [password, setPassword] = useState();
  let [alert, setAlert] = useState(false);

  const closeAlert = () => {
    setAlert(false);
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const loginProcess = (event) => {
    event.preventDefault();
    if (userName === "petugasmtbs" && password === "123456") {
      history.push("Lobby");
    } else if (userName === "adminmtbs" && password === "123456")
      history.push("Dashboard");
    else {
      setAlert(true);
    }
  };

  return (
    <Wrapper style={{ width: "100%", height: "100%" }}>
      <Container
        className=" wrapper-login h-100 d-flex justify-content-center flex-column p-5 min-vh-100"
        fluid
      >
        <Row className="mt-4">
          <Col sm={12} className="text-center">
            <img src={LogoKemenkes} className="logo-kemenkes" />
          </Col>
          {/* <Col ">
                        <Link >X</Link>
                    </Col> */}
        </Row>
        <Link className="button-x mr-3 mt-1 fa-2x" to="..">
          <FontAwesomeIcon icon={faTimes} />
        </Link>
        <Row className="justify-content-center">
          <Col sm={6}>
            <h2 className="text-primary text-center m-4">
              Sistem Informasi Manajemen Terpadu Balita Sakit (MTBS)
            </h2>
          </Col>
        </Row>

        <Row>
          {/* <Col sm={3}></Col> */}
          <Col sm={12} className="justify-content-center d-flex flex-column">
            {/* align-self-center */}
            <div className="justify-content-center d-flex flex-row">
              <Form
                className="justify-content-center d-flex flex-column w-25"
                onSubmit={loginProcess}
              >
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Username"
                    style={{ borderColor: "#46d0fe", width: "100%" }}
                    onChange={handleUserName}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    style={{ borderColor: "#46d0fe" }}
                    onChange={handlePassword}
                    required
                  />
                </FormGroup>
                <Row className="justify-content-center d-flex flex-column m-2">
                  <Button className="button-pepper-mint" type="submit">
                    Masuk
                  </Button>
                </Row>
                <Row className="justify-content-center d-flex flex-column m-2">
                  {/* <Button className="button-orange">Kembali</Button> */}
                </Row>
              </Form>
            </div>
          </Col>
          {/* <Col sm={3}></Col>      */}
        </Row>
        <Row className="justify-content-center my-3">
          <Col
            xs={2}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={LogoPuskemas} className=" logo-puskesmas" />
          </Col>
          <Col
            xs={2}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={LogoUnpar} className=" logo-unpar" />
          </Col>
          <Col
            xs={2}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={LogoInformatika} className=" logo-informatika" />
          </Col>
        </Row>
        <small className="text-muted text-center">
          Copyright © 2020 Tim Pengembangan SI-MTBS
        </small>
      </Container>
      <Modal
        isOpen={alert}
        className="modal-dialog-centered"
        toggle={closeAlert}
      >
        <ModalHeader toggle={closeAlert}>Warning</ModalHeader>
        <ModalBody>Invalid Username or Password.</ModalBody>
        <ModalFooter>
          <Button className="button-orange" onClick={closeAlert}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Wrapper>
  );
};

export default Login;
