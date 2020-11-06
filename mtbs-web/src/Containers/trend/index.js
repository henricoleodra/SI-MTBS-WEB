import React from "react";
import { FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Col } from "reactstrap";
import { Wrapper } from "./style";
import grafik from "./../../Assets/image/dashboard/trenpenyakit.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'

const Index = (props) => {
  return (
    <Wrapper>
      <div className="trend-wrapper">
        <Row>
          <Col>
            <h4 className="px-2 pt-2 text-muted trend-title font-weight-light">
              Trend
            </h4>
            <hr className="my-0" />
          </Col>
        </Row>

        <FormGroup className="ml-5 trend-form p-3 mt-4">
          <Row className="mt-2">
            <Col sm={1}>
              <Label>Daerah 1:</Label>
            </Col>
            <Col sm={3}>
              <Input type="select" name="daerah1" id="daerah1">
                  <option value={1}>Jawa Barat</option>
                  <option value={2}>Jawa Tengah</option>
                  <option value={3}>Jawa Timur</option>
              </Input>
            </Col>
          </Row>

          <Row className="mt-4">
          <Col sm={1}>
              <Label>Tanggal: </Label>
            </Col>
            <Col sm={3}>
              <InputGroup>
                    <Input type="date" name="tanggalAwal" id="tanggalAwal"/>
                    <InputGroupAddon addonType="append">
                        <InputGroupText style={{backgroundColor : "#46d0fe", borderColor : "#46d0fe"}}><FontAwesomeIcon icon={faCalendarDay} style={{color: 'white'}}/></InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
            <Col sm={1}>
              <h1>-</h1>
            </Col>
            <Col sm={3}>
              <InputGroup>
                    <Input type="date" name="tanggalAkhir" id="tanggalAkhir"/>
                    <InputGroupAddon addonType="append">
                        <InputGroupText style={{backgroundColor : "#46d0fe", borderColor : "#46d0fe"}}><FontAwesomeIcon icon={faCalendarDay} style={{color: 'white'}}/></InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col sm={1}>
              <Label>Penyakit:</Label>
            </Col>
            <Col sm={3}>
              <Input type="select" name="penyakit" id="penyakit">
                  <option value={1}>Penyakit Sangat Berat</option>
                  <option value={2}>Pneumonia</option>
                  <option value={3}>Anemia</option>
              </Input>
            </Col>
          </Row>
        </FormGroup>

        <Row className="justify-content-center">
          <Col className="mt-2">
            <p className="ml-5">
              Daerah: Jawa Barat
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="">
            <p className="ml-5">
              Tanggal: 01/03/2019 - 01/03/2020
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="">
            <p className="ml-5">
              Penyakit: Penyakit Sangat Berat
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-2">
            <img src={grafik} className="trend-diagram" />
          </Col>
        </Row>

      </div>
    </Wrapper>
  );
};

export default Index;
