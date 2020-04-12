import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


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
                <div style={{minHeight: "500px"}}>
                    <Row className="justify-content-center">
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
                                        <FormGroup  className="d-inline pr-2">
                                            <Label>
                                                <Input type="radio" name="radio1"/>{''}
                                                Ya
                                            </Label>
                                        </FormGroup>
                                        <FormGroup  className="d-inline">
                                            <Label>
                                                <Input type="radio" name="radio1"/>{''}
                                                Tidak
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div className="w-100">
                                        <h6>..... yang meninggal karena penyebab tidak diketahui tapi masih mungkin karena HIV</h6>
                                        <FormGroup  className="d-inline pr-2">
                                            <Label>
                                                <Input type="radio" name="radio2"/>{''}
                                                Ya
                                            </Label>
                                        </FormGroup>
                                        <FormGroup  className="d-inline">
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
                                <FormGroup  className="d-inline pr-2">
                                    <Label>
                                        <Input type="radio" name="radio3"/>{''}
                                        Ya
                                    </Label>
                                </FormGroup>
                                <FormGroup  className="d-inline">
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
                                <FormGroup  className="d-inline pr-2">
                                    <Label>
                                        <Input type="radio" name="radio4"/>{''}
                                        Ya
                                    </Label>
                                </FormGroup>
                                <FormGroup className="d-inline">
                                    <Label>
                                        <Input type="radio" name="radio4"/>{''}
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
                    <Link to="HIV1" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    <Link to="Imunisasi1" style={{textDecoration: "none"}}><Button color="success" block >Pemeriksaan Imunisasi <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default HIV;