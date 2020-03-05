import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


var outlineColor = {
    borderColor: '#41E8B3'
}

const Gizi2 = (props) => {
    return (
        <Form>
            <div className="w-100">
                <div className="col-12">
                    <div className="d-flex justify-content-center mt-3">
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} style={{ color: '#41E8B3' }} />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
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
                                <CardTitle className="h5"><b>Tentukan! </b>Berat badan(BB) menurut Panjang Badan(PB) / Tinggi Badan(TB)</CardTitle>
                                <FormGroup check className="mt-3">
                                    BB menurut PB / TB : xSD<input type="number"/>
                                </FormGroup>
                                <FormGroup check className="mt-3">
                                    BB menurut PB / TB : -3SD sampai dengan -2SD<input type="number"/>
                                </FormGroup>
                                <FormGroup check className="mt-3">
                                    BB menurut PB / TB : >= -2SD<input type="number"/>
                                </FormGroup>
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3" >
                            <CardBody>
                                <CardTitle className="h5"><b>Tentukan! </b>Lingkar lengan atas(LiLA) untuk anak umur 6 bulan / lebih</CardTitle>
                                <FormGroup check className="mt-3">
                                    LiLA lebih kecil dari 11.5 cm<input type="number"/>
                                </FormGroup>
                                <FormGroup check className="mt-3">
                                    LiLA 11.5 cm - 12.5 cm<input type="number"/>
                                </FormGroup>
                                <FormGroup check className="mt-3">
                                    LiLA >= 12.5 cm<input type="number"/>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="d-flex justify-content-around mt-3">
                    <Link to="Gizi1"><Button color="danger">Sebelumnya</Button></Link>
                    <Link to="Gizi3"><Button color="success">Selanjutnya</Button></Link>
                </div>
            </div>
        </Form>
    )
}

export default Gizi2