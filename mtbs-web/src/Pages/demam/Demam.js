import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


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
                    </div>
                    <div className="row d-flex justify-content-around">
                        <Card style={outlineColor} className="text-center w-75" >
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan dan periksa!</b></CardTitle>
                                <FormGroup check className="d-inline pr-2">
                                    <Label cek>
                                        <Input type="radio" name="radio1" />{''}
                                        Anamnesis
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="d-inline">
                                    <Label cek>
                                        <Input type="radio" name="radio1" />{''}
                                        Teraba panas
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="d-inline pl-4">
                                    <Label cek>
                                        <Input type="radio" name="radio1" />{''}
                                        Suhu >= 37.5 derajat Celcius
                                    </Label>
                                </FormGroup>
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3" >
                            <CardBody>
                                <CardTitle className="h5"><b>Periksa! </b>Tentukan daerah endemis malaria</CardTitle>
                                <FormGroup check className="d-inline pr-2">
                                    <Label cek>
                                        <Input type="radio" name="radio2" />{''}
                                        Tinggi
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="d-inline">
                                    <Label cek>
                                        <Input type="radio" name="radio2" />{''}
                                        Rendah
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="d-inline pl-4">
                                    <Label cek>
                                        <Input type="radio" name="radio2" />{''}
                                        Non Endemis
                                    </Label>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="d-flex justify-content-around mt-3">
                    <Link to="Diare1"><Button color="danger">Pemeriksaan Diare</Button></Link>
                    <Link to="Demam2"><Button color="success">Selanjutnya</Button></Link>
                </div>
            </div>
        </Form>
    )
}
export default Demam;