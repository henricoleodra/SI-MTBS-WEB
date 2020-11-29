import React from "react";
import { Card, CardBody, Label, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./style";

const Index = (props) => {
  return (
    <Wrapper>
      <Card
        className="mb-3 wrapper-data-anak"
        onClick={() => {
          props.handleChoose(props.position);
        }}
      >
        <CardBody>
          <Row>
            <Col sm={2}>
              <FontAwesomeIcon icon={faBaby} className="fa-3x" />
            </Col>
            <Col sm={6} className="text-left">
              <Row>
                <Col sm={12}>
                  <Label className="font-weight-bold">Nama Anak : </Label>{" "}
                  {props.namaAnak}
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Label className="font-weight-bold">Nama Ibu : </Label>{" "}
                  {props.namaIbu}
                </Col>
              </Row>
            </Col>
            <Col sm={4} className="text-left">
              <Row>
                <Col sm={12}>
                  <Label className="font-weight-bold">Jenis Kelamin : </Label>{" "}
                  {props.jenisKelamin}
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Label className="font-weight-bold">Tanggal Lahir : </Label>{" "}
                  {props.tanggalLahir}
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Wrapper>
  );
};

export default Index;
