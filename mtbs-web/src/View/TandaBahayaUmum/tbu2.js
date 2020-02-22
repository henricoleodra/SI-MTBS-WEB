import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Row, Col, Card, CardBody,
  CardTitle, Button,} from "reactstrap";

var bColor = {
  backgrouColor : '#41E8B3'
}
const TandaBahayaUmum2 = (props) => {
  return (
    <Form>
      <div className="w-100">
        <div className="col-12">
          <div className="p-3" style={bColor}>
            <h3 className="text-center font-weight-bold">Tanda Bahaya Umum</h3>
            <hr
              style={{
                  color: "#41E8B3",
                  backgroundColor: "#41E8B3",
                  height: 5
              }}
            />
          </div>
          <h4 className="text-center">Tanyakan dan periksa !</h4>
          <div className="row d-flex justify-content-center">
            <Card className="text-center w-50">
              <CardBody>
                <CardTitle className="h5">Ada stridor</CardTitle>
                <FormGroup check className="d-inline pr-2">
                <Label cek>
                  <Input type="radio" name="radio5"/>{''}
                  Ya
                </Label>
                </FormGroup>
                <FormGroup check className="d-inline">
                  <Label cek>
                    <Input type="radio" name="radio5"/>{''}
                    Tidak
                  </Label>
                </FormGroup>
              </CardBody>
            </Card>
          </div>
          <div className="row d-flex justify-content-center">
            <Card className="text-center w-50">
              <CardBody>
                <CardTitle className="h5">Biru(sianosis)</CardTitle>
                <FormGroup check className="d-inline pr-2">
                <Label cek>
                  <Input type="radio" name="radio6"/>{''}
                  Ya
                </Label>
                </FormGroup>
                <FormGroup check className="d-inline">
                  <Label cek>
                    <Input type="radio" name="radio6"/>{''}
                    Tidak
                  </Label>
                </FormGroup>
              </CardBody>
            </Card>
          </div>
          <div className="row d-flex justify-content-center">
            <Card className="text-center w-50">
              <CardBody>
                <CardTitle className="h5">Ujung tangan dan kaki pucat dan dingin</CardTitle>
                <FormGroup check className="d-inline pr-2">
                <Label cek>
                  <Input type="radio" name="radio7"/>{''}
                  Ya
                </Label>
                </FormGroup>
                <FormGroup check className="d-inline">
                  <Label cek>
                    <Input type="radio" name="radio7"/>{''}
                    Tidak
                  </Label>
                </FormGroup>
              </CardBody>
            </Card>
          </div>
        </div>
        <Row>
          <Col className="text-center">
            <Link to="tb1"><Button>Sebelumnya</Button></Link>
          </Col>
          <Col className="text-center">
          </Col>
        </Row>
      </div>
    </Form>
  );
}

export default TandaBahayaUmum2