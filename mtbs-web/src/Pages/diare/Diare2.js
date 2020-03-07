
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

let outlineColor = {
    borderColor : '#41E8B3'
}

const Diare = (props) => {
    return(
        <Form>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
                    </div> 
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Diare</h3>
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
                                <CardTitle className="h5"><b>Tanyakan dan periksa! </b>Mataung</CardTitle>
                                <FormGroup check className="d-inline pr-2">
                                    <Label>
                                        <Input type="radio" name="radio4"/>{''}
                                        Ya
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="d-inline">
                                    <Label>
                                        <Input type="radio" name="radio4"/>{''}
                                        Tidak
                                    </Label>
                                </FormGroup>
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Beri anak minum</CardTitle>
                                <FormGroup check className="d-inline pr-2">
                                    <Label>
                                        <Input type="radio" name="radio5"/>{''}
                                        Tidak bisa minum / malas minum
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="d-inline">
                                    <Label>
                                        <Input type="radio" name="radio5"/>{''}
                                        Haus, minum dengan lahap
                                    </Label>
                                </FormGroup>
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Cubit kulit perut, apakah kembalinya : </CardTitle>
                                <FormGroup check className="pr-2">
                                    <Label>
                                        <Input type="radio" name="radio6"/>{''}
                                        Sangat lambat (lebih dari 2 detik)
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="pr-2">
                                    <Label>
                                        <Input type="radio" name="radio6"/>{''}
                                        Lambat (masih sempat terlihat lipatan kulit)
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="pr-2">
                                    <Label>
                                        <Input type="radio" name="radio6"/>{''}
                                        Normal
                                    </Label>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Row>
                </div>
            </div>
            <Row className="justify-content-between px-5 py-3">
                <Col sm="4">
                    <Link to="Diare1" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    <Link to="Demam1" style={{textDecoration: "none"}}><Button color="success" block >Pemeriksaan Demam <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Diare