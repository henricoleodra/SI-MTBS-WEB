import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'


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
                            <FontAwesomeIcon icon={faCircle} style={{ color: '#41E8B3' }} />
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
                        <p className="text-center"><b>LAKUKAN TES MALARIA  jika tidak ada klasifikasi penyakit berat:</b></p>
                        <p className="text-center">Pada semua kasus balita sakit yang datang ke puskesmas di daerah Endemis Malaria tinggi</p>
                        <p className="text-center">Jika tidak ditemukan penyebab pasti demam di daerah Endemis Malaria rendah</p>
                    </div>
                    <div style={{minHeight: "500px"}}>
                        <Row className="justify-content-around">
                            <Card style={outlineColor} className="text-center w-75" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Lakukan! </b>Tes Malaria</CardTitle>
                                    <div>
                                        <h6>Hasil RDT:</h6>
                                        <FormGroup check className="d-inline pr-2">
                                            <Label cek>
                                                <Input type="radio" name="radio1" />{''}
                                                Positif
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check className="d-inline">
                                            <Label cek>
                                                <Input type="radio" name="radio1" />{''}
                                                Negatif
                                            </Label>
                                        </FormGroup>
                                    </div>  
                                    <hr
                                        style={{
                                            color: "#41E8B3",
                                            backgroundColor: "#41E8B3",
                                            height: 1
                                        }}
                                    />
                                    <div>
                                        <h6>Hasil Mikroskopis:</h6>
                                        <FormGroup check className="d-inline pr-2">
                                            <Input type="textarea"/>
                                        </FormGroup>
                                    </div>

                                </CardBody>
                            </Card>
                        </Row>
                    </div>
                </div>
                <Row className="justify-content-between px-5 py-3">
                    <Col sm="4">
                        <Link to="Demam4" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Link to="Demam6" style={{textDecoration: "none"}}><Button color="success" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
                    </Col>
                </Row>
            </div>
        </Form>
    )
}
export default Demam;