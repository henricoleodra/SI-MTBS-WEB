import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, InputGroup, InputGroupText, InputGroupAddon, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


let outlineColor = {
    borderColor : '#41E8B3'
}

let bgColor ={
    backgroundColor : '#41E8B3',
    color: 'white'
}

const Telinga = (props) =>{
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
                        <h3 className="text-center font-weight-bold">Telinga</h3>
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
                                    <CardTitle className="h5"><b>Tanyakan! </b>Ada nyeri telinga</CardTitle>
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
                                    <CardTitle className="h5"><b>Tanyakan! </b>Ada rasa penuh di telinga</CardTitle>
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
                                    <CardTitle className="h5"><b>Tanyakan! </b>Ada cairan/nanah keluar dari telinga</CardTitle>
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
                                    <h5>Jika ya, berapa lama?</h5>
                                    <div className="w-100 d-flex justify-content-center">
                                        <InputGroup className="w-50">
                                            <Input type="number" min="0"/>
                                            <InputGroupAddon addonType="append" >
                                                <InputGroupText style={bgColor}>Hari</InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>         
                                    </div> 
                                </CardBody>
                            </Card>
                        </Row>
                    </div>
                </div>
                <Row className="justify-content-between px-5 py-3">
                    <Col sm="4">
                        <Link to="Demam1" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Pemeriksaan Demam</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Link to="Telinga2" style={{textDecoration: "none"}}><Button color="success" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
                    </Col>
                </Row>
            </div>
        </Form>
    );
}

export default Telinga;