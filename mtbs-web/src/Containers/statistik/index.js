import React from "react";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { Wrapper } from "./style";
import distribusiPenyakit from "./../../Assets/image/dashboard/distribusipenyakit.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faUnderline } from "@fortawesome/free-solid-svg-icons";

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

        <FormGroup className="mx-2 statistik-form p-3 mt-4">
          <Row className="mt-2">
            <Col sm={2}>
              <Label className="mt-1">Daerah 1:</Label>
            </Col>
            <Col sm={3}>
              <Input type="select" name="daerah1" id="daerah1">
                <option value={1} selected>
                  Jawa Barat
                </option>
                <option value={2}>Jawa Tengah</option>
                <option value={3}>Jawa Timur</option>
              </Input>
            </Col>
            <Col sm={1}></Col>
            <Col sm={2}>
              <Label className="mt-1">Daerah 2:</Label>
            </Col>
            <Col sm={3}>
              <Input type="select" name="daerah2" id="daerah2">
                <option value={1}>Jawa Barat</option>
                <option value={2}>Jawa Tengah</option>
                <option value={3} selected>
                  Jawa Timur
                </option>
              </Input>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col sm={2}>
              <Label className="mt-1">Tanggal: </Label>
            </Col>
            <Col sm={3}>
              <InputGroup>
                <Input type="date" name="tanggalAwal" id="tanggalAwal" />
                <InputGroupAddon addonType="append">
                  <InputGroupText
                    style={{
                      backgroundColor: "#46d0fe",
                      borderColor: "#46d0fe",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCalendarDay}
                      style={{ color: "white" }}
                    />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            <Col sm={1}>
              <hr className="statistik-date-line" />
            </Col>
            <Col sm={3}>
              <InputGroup>
                <Input type="date" name="tanggalAkhir" id="tanggalAkhir" />
                <InputGroupAddon addonType="append">
                  <InputGroupText
                    style={{
                      backgroundColor: "#46d0fe",
                      borderColor: "#46d0fe",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCalendarDay}
                      style={{ color: "white" }}
                    />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col sm={2}>
              <Label>Diagram:</Label>
            </Col>
            <Col sm={2}>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" defaultChecked />
                  Pie
                </Label>
              </FormGroup>
            </Col>
            <Col sm={2}>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" />
                  Bar
                </Label>
              </FormGroup>
            </Col>
            <Col sm={2}>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" />
                  Line
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </FormGroup>

        <Row className="justify-content-center">
          <Col className="mt-2">
            <h3 className="text-center">01/03/2019 - 01/03/2020</h3>
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
