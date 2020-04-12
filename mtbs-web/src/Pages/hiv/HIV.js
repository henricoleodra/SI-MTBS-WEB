import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, InputGroup, InputGroupText, InputGroupAddon, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import '../../Assets/style/style.css';

let outlineColor = {
    borderColor : '#41E8B3'
}

let bgColor ={
    backgroundColor : '#41E8B3',
    color: 'white'
}

const HIV = (props) =>{
    return(
        <Form>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div>
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">HIV</h3>
                    <hr
                    style={{
                        color: "#41E8B3",
                        backgroundColor: "#41E8B3",
                        height: 5
                    }}
                    />
                </div>
                <div style={{minHeight: "475px"}}>
                    <Row className="justify-content-center pr-0 pl-0">
                        <Card style={outlineColor} className=" text-center pr-0 pl-0 w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Anak sudah pernah tes HIV</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline pr-2">  
                                        <Label className="rdoBtn">Ya
                                        <Input type="radio" name="radio1"/>
                                        <span style={{left:"20px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline">
                                        <Label className="rdoBtn">Tidak
                                        <Input type="radio" name="radio1"/>
                                        <span style={{left:"6px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <hr
                                    style={{
                                        color: "#41E8B3",
                                        backgroundColor: "#41E8B3",
                                        height: 1
                                    }}
                                />
                                <div className="d-flex justify-content-around pt-2">
                                    <div className="d-line">
                                        <h6>Jika pernah, kapan ?</h6>
                                        <div className="w-100 d-flex justify-content-center">
                                            <InputGroup className="w-75">
                                                <InputGroupAddon addonType="append" >
                                                    <InputGroupText style={bgColor}>Tahun</InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="number" min="0"/>
                                            </InputGroup>         
                                        </div> 
                                    </div>
                                    <div className="d-line">
                                        <h6>Hasilnya</h6>
                                        <Row className="limitCol "> 
                                            <Col sm="6">
                                                <FormGroup className="d-inline ">  
                                                    <Label className="rdoBtn">Ya
                                                    <Input type="radio" name="radio2"/>
                                                    <span style={{left:"-40px"}} className="checkmark"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col sm="6">
                                                <FormGroup className="d-inline">
                                                    <Label className="rdoBtn">Tidak
                                                    <Input type="radio" name="radio2"/>
                                                    <span style={{left:"-40px"}} className="checkmark"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Ibu pernah tes HIV</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline pr-2">  
                                        <Label className="rdoBtn">Ya
                                        <Input type="radio" name="radio3"/>
                                        <span style={{left:"20px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline">
                                        <Label className="rdoBtn">Tidak
                                        <Input type="radio" name="radio3"/>
                                        <span style={{left:"6px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <h6>Hasilnya</h6>
                                <Row className="limitCol "> 
                                    <Col  sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline pr-2">  
                                        <Label className="rdoBtn">Ya
                                        <Input type="radio" name="radio4"/>
                                        <span style={{left:"20px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline">
                                        <Label className="rdoBtn">Tidak
                                        <Input type="radio" name="radio4"/>
                                        <span style={{left:"6px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>   
                    </Row>
                </div>
            </div>
            <Row className="justify-content-between px-5 py-0">
                <Col sm="4">
                <Link to="Anemia" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/>Pemeriksaaan Anemia</Button></Link>
                </Col>
                <Col sm="4">
                <Link to="HIV2" style={{textDecoration: "none"}}><Button color="success" block>Berikutnya  <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default HIV;