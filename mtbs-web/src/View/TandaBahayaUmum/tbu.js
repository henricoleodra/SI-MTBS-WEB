import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Row, Col, Card, CardBody,
  CardTitle, Button, Pagination, PaginationItem, PaginationLink} from "reactstrap";

var bColor = {
  backgrouColor : '#41E8B3'
}
const TandaBahayaUmum = (props) => {
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
                <CardTitle>Tidak bisa minum/menyusu</CardTitle>
                <FormGroup check className="d-inline pr-2">
                <Label cek>
                  <Input type="radio" name="radio1"/>{''}
                  Ya
                </Label>
                </FormGroup>
                <FormGroup check className="d-inline">
                  <Label cek>
                    <Input type="radio" name="radio1"/>{''}
                    Tidak
                  </Label>
                </FormGroup>
              </CardBody>
            </Card>
          </div>
          <div className="row d-flex justify-content-center">
            <Card className="text-center w-50">
              <CardBody>
                <CardTitle>Memuntahkan semuanya</CardTitle>
                <FormGroup check className="d-inline pr-2">
                <Label cek>
                  <Input type="radio" name="radio2"/>{''}
                  Ya
                </Label>
                </FormGroup>
                <FormGroup check className="d-inline">
                  <Label cek>
                    <Input type="radio" name="radio2"/>{''}
                    Tidak
                  </Label>
                </FormGroup>
              </CardBody>
            </Card>
          </div>
          <div className="row d-flex justify-content-center">
            <Card className="text-center w-50">
              <CardBody>
                <CardTitle>Kejang-kejang</CardTitle>
                <FormGroup check className="d-inline pr-2">
                <Label cek>
                  <Input type="radio" name="radio3"/>{''}
                  Ya
                </Label>
                </FormGroup>
                <FormGroup check className="d-inline">
                  <Label cek>
                    <Input type="radio" name="radio3"/>{''}
                    Tidak
                  </Label>
                </FormGroup>
              </CardBody>
            </Card>
          </div>
          <div className="row d-flex justify-content-center">
            <Card className="text-center w-50">
              <CardBody>
                <CardTitle>Gelisah, Letargis atau tidak sadar</CardTitle>
                <FormGroup check className="d-inline pr-2">
                <Label cek>
                  <Input type="radio" name="radio4"/>{''}
                  Ya
                </Label>
                </FormGroup>
                <FormGroup check className="d-inline">
                  <Label cek>
                    <Input type="radio" name="radio4"/>{''}
                    Tidak
                  </Label>
                </FormGroup>
              </CardBody>
            </Card>
          </div>
        </div>
        <Row>
          <Col className="text-center">
          </Col>
          <Col className="text-center">
              <Link to="/TandaBahayaUmum2"><Button>Berikutnya</Button></Link>
          </Col>
        </Row>
      </div>
    </Form>
  );
}

export default TandaBahayaUmum