import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


import '../../Assets/style/style.css';

let outlineColor = {
    borderColor : '#41E8B3'
}

const Anemia = (props) =>{
    return(
        <Form>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
                    </div> 
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Anemia</h3>
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
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Lihat! </b>Ada kepucatan telapak tangan</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="4">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Sangat Pucat
                                            <Input type="radio" name="radio1"/>
                                            <span style={{left:"-2px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="4">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Agak Pucat
                                            <Input type="radio" name="radio1"/>
                                            <span style={{left:"6px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Normal
                                            <Input type="radio" name="radio1"/>
                                            <span style={{left:"24px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Row>
                </div>
            </div>
            <Row className="justify-content-between px-5 py-3">
                <Col sm="4">
                    <Link to="Gizi1" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Pemeriksaan Gizi</Button></Link>
                </Col>
                <Col sm="4">
                    <Link to="HIV1" style={{textDecoration: "none"}}><Button color="success" block >Pemeriksaan HIV <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Anemia;