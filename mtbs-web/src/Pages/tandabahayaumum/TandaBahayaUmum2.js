import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

var outlineColor = {
  borderColor : '#41E8B3'
}

const TandaBahayaUmum2 = (props) => {
  return (
    <Form>
      <div className="w-100">
        <div className="col-12">
          <div className="d-flex justify-content-center mt-3">
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle}  className="text-muted"/>
            </div>
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
            </div> 
          </div>
          <div className="mt-2">
            <h3 className="text-center font-weight-bold">Tanda Bahaya Umum</h3>
            <hr
              style={{
                  color: "#41E8B3",
                  backgroundColor: "#41E8B3",
                  height: 5
              }}
            />
          </div>

          <div style={{minHeight: "500px"}}>
            <Row className="justify-content-center">
              <Card style={outlineColor} className="text-center w-75">
                <CardBody>
                  <CardTitle className="h5"><b>Tanyakan! </b>Ada stridor</CardTitle>
                  <FormGroup check className="d-inline pr-2">
                  <Label>
                    <Input type="radio" name="radio1"/>{''}
                    Ya
                  </Label>
                  </FormGroup>
                  <FormGroup check className="d-inline">
                    <Label>
                      <Input type="radio" name="radio1"/>{''}
                      Tidak
                    </Label>
                  </FormGroup>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5"><b>Tanyakan! </b>Biru (sianosis)</CardTitle>
                  <FormGroup check className="d-inline pr-2">
                  <Label>
                    <Input type="radio" name="radio2"/>{''}
                    Ya
                  </Label>
                  </FormGroup>
                  <FormGroup check className="d-inline">
                    <Label>
                      <Input type="radio" name="radio2"/>{''}
                      Tidak
                    </Label>
                  </FormGroup>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5"><b>Tanyakan! </b>ujung tangan dan kaki pucat dan dingin</CardTitle>
                  <FormGroup check className="d-inline pr-2">
                  <Label>
                    <Input type="radio" name="radio3"/>{''}
                    Ya
                  </Label>
                  </FormGroup>
                  <FormGroup check className="d-inline">
                    <Label>
                      <Input type="radio" name="radio3"/>{''}
                      Tidak
                    </Label>
                  </FormGroup>
                </CardBody>
              </Card>
            </Row>
          </div>
          
          <Row className="justify-content-between px-5 py-3">
            <Col sm="4">
              <Link to="TandaBahayaUmum1" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
            </Col>
            <Col sm="4">
              <Link to="BatukYaTidak" style={{textDecoration: "none"}}><Button color="success" block >Pemeriksaan Batuk <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
            </Col>
          </Row>
          
        </div>
      </div>
    </Form>
  );
}

export default TandaBahayaUmum2