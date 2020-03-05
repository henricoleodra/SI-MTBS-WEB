import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


var outlineColor = {
    borderColor: '#41E8B3'
}

const Gizi3 = (props) => {
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
                            <FontAwesomeIcon icon={faCircle} style={{ color: '#41E8B3' }} />
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-center font-weight-bold">Status Gizi</h3>
                        <hr
                        style={{
                            color: "#41E8B3",
                            backgroundColor: "#41E8B3",
                            height: 5
                        }}
                    />
                    </div>
                    <div className="row d-flex justify-content-center">
                        <Card style={outlineColor} className="text-center w-75" >
                            <CardBody>
                                <CardTitle className="h5">Jika BB menurut PB/TB lebih kecil -3SD ATAU Lingkar Lengan Atas dibawah 11.5 cm, periksa komplikasi medis</CardTitle>
                                <hr
                                    style={{
                                        color: "#41E8B3",
                                        backgroundColor: "#41E8B3",
                                        height: 1
                                    }}
                                />
                                <div className="d-flex justify-content-around pt-2">
                                    <div className="d-line">
                                        <h6>Apakah anda tanda bahaya umum?</h6>
                                        <FormGroup check className="d-inline pr-2">
                                            <Label cek>
                                                <Input type="radio" name="radio3"/>{''}
                                                Ya
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check className="d-inline">
                                            <Label cek>
                                                <Input type="radio" name="radio3"/>{''}
                                                Tidak
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div className="d-line">
                                        <h6>Apakah ada klasifikasi berat?</h6>
                                        <FormGroup check className="d-inline pr-2">
                                            <Label cek>
                                                <Input type="radio" name="radio4"/>{''}
                                                Ya
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check className="d-inline">
                                            <Label cek>
                                                <Input type="radio" name="radio4"/>{''}
                                                Tidak
                                            </Label>
                                        </FormGroup>
                                    </div>
                                </div>
                                <hr
                                    style={{
                                        color: "#41E8B3",
                                        backgroundColor: "#41E8B3",
                                        height: 1
                                    }}
                                />
                                <div className="d-line">
                                        <h5>Jika tidak ada komplikasi media, nilai pemberian ASI pad aanak umur lebih kecil dari 6 bulan</h5>
                                        <h5>Apakah anaka memiliki masalah pemberian ASI?</h5>
                                        <FormGroup check className="d-inline pr-2">
                                            <Label cek>
                                                <Input type="radio" name="radio5"/>{''}
                                                Ya
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check className="d-inline">
                                            <Label cek>
                                                <Input type="radio" name="radio5"/>{''}
                                                Tidak
                                            </Label>
                                        </FormGroup>
                                    </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="d-flex justify-content-around mt-3">
                    <Link to="Gizi2"><Button color="danger">Sebelumnya</Button></Link>
                    <Link to="Anemia"><Button color="success">Pemeriksaan Anemia</Button></Link>
                </div>
            </div>
        </Form>
    )
}

export default Gizi3