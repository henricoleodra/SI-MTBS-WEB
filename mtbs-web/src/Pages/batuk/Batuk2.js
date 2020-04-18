import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, InputGroup, InputGroupAddon, InputGroupText, Row, Col} from "reactstrap";
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { compStatusChange } from '../../Actions';

import '../../Assets/style/style.css';

let outlineColor = {
    borderColor : '#41E8B3'
}

let bgColor ={
    backgroundColor : '#41E8B3',
    color: 'white'
}

const Batuk = (props) => {
    const dispatch = useDispatch();
    return(
        <Form>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
                    </div> 
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Batuk / Sukar Bernafas</h3>
                    <hr
                    style={{
                        color: "#41E8B3",
                        backgroundColor: "#41E8B3",
                        height: 5
                    }}
                    />
                </div>
                <div style={{minHeight: "455px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Ada wheezing</CardTitle>
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
                                        <span style={{left:"0px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                </Row>     
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Saturasi oksigen</CardTitle>
                                <div className="w-100 d-flex justify-content-center">
                                    <InputGroup className="w-25">
                                        <Input type="number" min="0"/>
                                        <InputGroupAddon addonType="append" >
                                            <InputGroupText style={bgColor}>%</InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>         
                                </div>     
                            </CardBody>
                        </Card>
                    </Row>
                </div>
            </div>
            <Row className="justify-content-between px-5 py-0">
                <Col sm="4">
                    <Link to="Batuk1" style={{textDecoration: "none"}}><Button style={{width: "250px", height : "60px"}} color="danger" ><FontAwesomeIcon icon={faChevronLeft}/> Pemeriksaan Tanda Bahaya Umum</Button></Link>
                </Col>
                <Col sm="4">
                    <Link to="DiareYaTidak" style={{textDecoration: "none"}}><Button style={{width: "250px", height : "60px"}} color="success" onClick={() => dispatch(compStatusChange('DIARE'))}>Pemeriksaan Diare   <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Batuk