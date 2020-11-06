import React from "react";
import { Row, Col, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import { Wrapper } from "./style";
import distribusiPenyakit from "./../../Assets/image/dashboard/distribusipenyakit.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'

const Index = (props) => {
  return (
    <Wrapper>
      <div className="statistik-wrapper">
        <Row>
          <Col>
            <h4 className="px-2 pt-2 text-muted statistik-title font-weight-light">
              Statistik
            </h4>
            <hr className="my-0" />
          </Col>
        </Row>

        {/* Isi Disini */}

        <Row className="justify-content-center">
          <Col className="mt-2">
            <h3 className="text-center">
              01/03/2019 - 01/03/2020
            </h3>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="d-flex justify-content-center">
            <p>Daerah 1</p>
          </Col>
          <Col className="d-flex justify-content-center">
            <p>Daerah 2</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="d-flex justify-content-center">
            <p>Jawa Barat</p>
          </Col>
          <Col className="d-flex justify-content-center">
            <p>Jawa Timur</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="d-flex justify-content-center">
            <img src={distribusiPenyakit} className="statistik-diagram" />
          </Col>
          <Col className="d-flex justify-content-center">
            <img src={distribusiPenyakit} className="statistik-diagram" />
          </Col>
        </Row>
        
      </div>
    </Wrapper>
  );
};

export default Index;
