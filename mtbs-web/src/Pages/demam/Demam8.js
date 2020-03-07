import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


var outlineColor = {
    borderColor: '#41E8B3'
}

const Demam = (props) => {
    return (
        <Form>
            <div className="w-100">
                <div className="col-12">
                    <div className="d-flex justify-content-center mt-3">
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} style={{ color: '#41E8B3' }} />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-center font-weight-bold">Demam</h3>
                        <hr
                            style={{
                                color: "#41E8B3",
                                backgroundColor: "#41E8B3",
                                height: 5
                            }}
                        />
                        <p className="text-center"><b>Jika demam 2 hari sampai dengan 7 hari, tanya dan periksa</b></p>
                    </div>
                    <div style={{minHeight: "500px"}}>
                        <Row className="row d-flex justify-content-around">
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Lihat! </b>Apakah anak muntah?</CardTitle>
                                    <FormGroup check className="d-inline pr-2">
                                        <Label cek>
                                            <Input type="radio" name="radio1" />{''}
                                            Ya
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="d-inline">
                                        <Label cek>
                                            <Input type="radio" name="radio1" />{''}
                                            Tidak
                                        </Label>
                                    </FormGroup>
                                    <hr
                                        style={{
                                            color: "#41E8B3",
                                            backgroundColor: "#41E8B3",
                                            height: 1
                                        }}
                                    />
                                    <h5>Jika, ya</h5>
                                    <div>
                                        <h6>Apakah sering?</h6>
                                        <FormGroup check className="d-inline pr-2">
                                            <Label cek>
                                                <Input type="radio" name="radio2" />{''}
                                                Ya
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check className="d-inline">
                                            <Label cek>
                                                <Input type="radio" name="radio2" />{''}
                                                Tidak
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div>
                                        <h6>Apakah muntah dengan darah atau seperti kopi?</h6>
                                        <FormGroup check className="d-inline pr-2">
                                            <Label cek>
                                                <Input type="radio" name="radio3" />{''}
                                                Ya
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check className="d-inline">
                                            <Label cek>
                                                <Input type="radio" name="radio3" />{''}
                                                Tidak
                                            </Label>
                                        </FormGroup>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Tanyakan! </b>Apakah berak berwarna hitam?</CardTitle>
                                    <FormGroup check className="d-inline pr-2">
                                        <Label cek>
                                            <Input type="radio" name="radio4" />{''}
                                            Ya
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="d-inline">
                                        <Label cek>
                                            <Input type="radio" name="radio4" />{''}
                                            Tidak
                                        </Label>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                        </Row>
                    </div>
                </div>
                <Row className="justify-content-between px-5 py-3">
                    <Col sm="4">
                        <Link to="Demam7" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Link to="Demam9" style={{textDecoration: "none"}}><Button color="success" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
                    </Col>
                </Row>
            </div>
        </Form>
    )
}
export default Demam;