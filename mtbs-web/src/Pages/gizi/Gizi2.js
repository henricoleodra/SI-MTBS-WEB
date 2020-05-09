import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


var outlineColor = {
    borderColor: '#41E8B3'
}

const Gizi2 = (props) => {
    return (
        <Form /**onSubmit={handleSubmit}**/>
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
                    <div style={{minHeight: "475px"}}>
                        <Row className="justify-content-center">
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Tentukan! </b>Berat badan(BB) menurut Panjang Badan(PB) / Tinggi Badan(TB)</CardTitle>
                                    {/* <FormGroup check className="mt-3">
                                        BB menurut PB / TB :<Input type="number" required/>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Tentukan! </b>Lingkar lengan atas(LiLA) untuk anak umur 6 bulan / lebih</CardTitle>
                                    <FormGroup check className="mt-3">
                                        LiLA :<Input type="number" required/>
                                    </FormGroup> */}
                                    <Row>
                                        <Col sm="2">
                                                
                                        </Col>
                                        <Col sm="8">
                                            <FormGroup check className="mt-3">
                                                BB menurut PB / TB :<Input type="number" required/>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="2">
                                            
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Tentukan! </b>Lingkar lengan atas(LiLA) untuk anak umur 6 bulan / lebih</CardTitle>
                                    <Row>
                                        <Col sm="2">
                                                
                                        </Col>
                                        <Col sm="8">
                                            <FormGroup check className="mt-3">
                                                LiLA :<Input type="number" required/>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="2">
                                            
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Row>
                    </div>
                </div>
                <Row className="justify-content-between px-5 py-3">
                    <Col sm="4">
                        <Link to="Gizi1" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Button type="submit" color="success" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                    </Col>
                </Row>
            </div>
        </Form>
    )
}

export default Gizi2