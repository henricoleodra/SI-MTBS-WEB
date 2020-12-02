import React from "react";
import { Card, CardBody, Label, Row, Col, Button } from "reactstrap";
import { Wrapper } from "./style";

const Index = (props) => {
  let flag = true;
  let keluhan = props.keluhanAnak.map((curr) => {
    if (flag) {
      flag = false;
      return curr;
    } else {
      return ", " + curr;
    }
  });
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
                <Label className="mr-2">Keluhan Anak : </Label> {keluhan}
              </Row>
            </Col>
            <Col xs={2}>
              <Button
                className="button-orange mt-2"
                onClick={() => {
                  props.handleDetails(props.id);
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
