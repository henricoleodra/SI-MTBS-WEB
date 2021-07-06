import React from "react";
import { Card, CardBody, Label, Row, Col, Button } from "reactstrap";
import { Wrapper } from "./style";

const Index = (props) => {
  return (
    <Wrapper>
      <Card className="mb-3 wrapper-riwayat-pemeriksaan">
        <CardBody>
          <Row className="justify-content-center px-3">
            <Col xs={10}>
              <Row>
                <Label className="mr-2">Tanggal Pemeriksaan : </Label>{" "}
                {props.tanggal}
              </Row>
              <Row>
                <Label className="mr-2">Keluhan Anak : </Label>{" "}
                {props.keluhanAnak}
              </Row>
            </Col>
            <Col xs={2}>
              <Button
                className="button-orange mt-2"
                onClick={() => {
                  props.handleDetails(props.idPemeriksaan);
                }}
              >
                Detail
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Wrapper>
  );
};

export default Index;
