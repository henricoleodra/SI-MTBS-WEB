import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import '../../Assets/style/style.css';

var outlineColor = {
  borderColor : '#41E8B3'
}

const TandaBahayaUmum = (props) => {
  return (
    <Form className="">
      <div className="w-100">
        <div className="col-12" style={{minHeight: 50}}>
          <div className="d-flex justify-content-center mt-3">
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
            </div>
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} className="text-muted"/>
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
                  <CardTitle className="h5"><b>Tanyakan! </b>Tidak bisa minum/menyusu</CardTitle>
                  <Row>
                    <Col sm="3">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup check className="d-inline pr-2">  
                        <Label className="rdoBtn">Ya
                          <Input type="radio" name="radio1"/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup check className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio1"/>
                          <span style={{left:"0px"}} class="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5"><b>Tanyakan! </b>Memuntahkan semuanya</CardTitle>
                  <Row>
                    <Col sm="3">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup check className="d-inline pr-2">  
                        <Label className="rdoBtn">Ya
                          <Input type="radio" name="radio2"/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup check className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio2"/>
                          <span style={{left:"0px"}} class="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5"><b>Tanyakan! </b>Kejang-kejang</CardTitle>
                  <Row>
                    <Col sm="3">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup check className="d-inline pr-2">  
                        <Label className="rdoBtn">Ya
                          <Input type="radio" name="radio3"/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup check className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio3"/>
                          <span style={{left:"0px"}} class="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5"><b>Tanyakan! </b>Gelisah, Letargis atau tidak sadar</CardTitle>
                  <Row>
                    <Col sm="3">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup check className="d-inline pr-2">  
                        <Label className="rdoBtn">Ya
                          <Input type="radio" name="radio4"/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup check className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio4"/>
                          <span style={{left:"0px"}} class="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Row>
          </div>
          
          <Row className="justify-content-between px-5 py-3">
            <Col sm="4">
              <Link to="#" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Data Anak</Button></Link>
            </Col>
            <Col sm="4">
              <Link to="TandaBahayaUmum2" style={{textDecoration: "none"}}><Button color="success" block>Berikutnya  <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
            </Col>
          </Row>
        </div>
        
      </div>
    </Form>
  );
}

export default TandaBahayaUmum