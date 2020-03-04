import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


let outlineColor = {
    borderColor : '#41E8B3'
}

const HIV = (props) =>{
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
                    <h3 className="text-center font-weight-bold">HIV</h3>
                    <hr
                    style={{
                        color: "#41E8B3",
                        backgroundColor: "#41E8B3",
                        height: 5
                    }}
                    />
                </div>
                <div className="row d-flex justify-content-center">
                    <Card style={outlineColor} className="text-center w-75 mt-3">
                        <CardBody>
                            <CardTitle className="h5"><b>Tanyakan! </b>Anak memiliki orang tua kandung dan/atau saudara kandung .....</CardTitle>
                            <hr
                            style={{
                                color: "#41E8B3",
                                backgroundColor: "#41E8B3",
                                height: 1
                            }}
                            />
                            <div className="d-flex flex-column justify-content-center pt-2">
                                <div className="w-100">
                                    <h6>..... yang terdiagnosis HIV</h6>
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
                                </div>
                                <div className="w-100">
                                    <h6>..... yang meninggal karena penyebab tidak diketahui tapi masih mungkin karena HIV</h6>
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
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card style={outlineColor} className="text-center w-75 mt-3">
                        <CardBody>
                            <CardTitle className="h5"><b>Tanyakan! </b>Anak masih mendapatkan ASI</CardTitle>
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
                        </CardBody>
                    </Card>
                    <Card style={outlineColor} className="text-center w-75 mt-3">
                        <CardBody>
                            <CardTitle className="h5"><b>Lihat! </b>Ada bercak putih di rongga mulut</CardTitle>
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
                </div>
            </div>
            <div className="d-flex justify-content-around mt-3">
                <Link to="HIV1"><Button color="danger">Sebelumnya</Button></Link>
                <Link to="Imunisasi1"><Button color="success">Pemeriksaan Imunisasi</Button></Link>
            </div>
        </div>
        </Form>
    );
}

export default HIV;