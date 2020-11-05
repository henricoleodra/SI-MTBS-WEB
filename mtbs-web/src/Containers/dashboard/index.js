import React from "react";
import { Row, Col, Label } from "reactstrap";
import { Wrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import peta from "./../../Assets/image/dashboard/peta.jpg";
import diagramJumlahPasien from "./../../Assets/image/dashboard/jumlahpasiendiperiksa.PNG";

const Index = (props) => {
  return (
    <Wrapper>
      <div className="dashboard-wrapper">
        <Row>
          <Col>
            <h4 className="px-2 pt-2 text-muted dashboard-title font-weight-light">
              Dashboard
            </h4>
            <hr className="my-0" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="mt-2">
            <h3 className="text-center dashboard-diagram-title">
              Jumlah Pemeriksaan Pada Setiap Provinsi
            </h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <img src={peta} className="dashboard-diagram" />
          </Col>
        </Row>
        <Row className="justify-content-center mt-1">
          <Col xs={2} className="text-center">
            <FontAwesomeIcon icon={faCircle} className="sky-blue" />
            <Label className="ml-1">&lt; 500.000</Label>
          </Col>
          <Col xs={3} className="text-center">
            <FontAwesomeIcon icon={faCircle} className="aqua-blue" />
            <Label className="ml-1"> 500.000 - 1.000.000</Label>
          </Col>
          <Col xs={2} className="text-center">
            <FontAwesomeIcon icon={faCircle} className="azure-blue" />
            <Label className="ml-1"> &gt; 1.000.000</Label>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col>
            <h3 className="text-center dashboard-diagram-title">
              Jumlah Pasien Yang Diperiksa
            </h3>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="d-flex justify-content-center">
            <img src={diagramJumlahPasien} className="dashboard-diagram" />
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default Index;
