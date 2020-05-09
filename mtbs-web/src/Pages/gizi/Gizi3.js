import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


var outlineColor = {
    borderColor: '#41E8B3'
}

const Gizi3 = (props) => {
    return (
        <Form /**onSubmit={handleSubmit}**/>
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
                    <div style={{minHeight: "475px"}}>
                        <Row className="justify-content-center">
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
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
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio5" /**value={1} onChange={handleAnswer1} checked={tbu_letargis === true}**/ required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio5" /**value={1} onChange={handleAnswer1} checked={tbu_letargis === true}**/ required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                                
                                        </div>
                                        <div className="d-line">
                                            <h6>Apakah ada klasifikasi berat?</h6>
                                            <FormGroup check className="d-inline pr-2">
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio5" /**value={1} onChange={handleAnswer1} checked={tbu_letargis === true}**/ required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio5" /**value={1} onChange={handleAnswer1} checked={tbu_letargis === true}**/ required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
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
                                            <Row className="limitCol">
                                                <Col sm="3">
                                                </Col>
                                                <Col sm="3">
                                                    <FormGroup className="d-inline pr-2">  
                                                        <Label className="rdoBtn">Ya
                                                        <Input type="radio" name="radio6" /**value={1} onChange={handleAnswer1} checked={tbu_letargis === true}**/ required/>
                                                        <span style={{left:"20px"}} className="checkmark"></span>
                                                        </Label>
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="1">
                                                </Col>
                                                <Col sm="3">
                                                    <FormGroup className="d-inline">
                                                        <Label className="rdoBtn">Tidak
                                                        <Input type="radio" name="radio6" /**value={2} onChange={handleAnswer1} checked={tbu_letargis === false}**/ /> 
                                                        <span style={{left:"0px"}} className="checkmark"></span>
                                                        </Label>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </div>
                                </CardBody>
                            </Card>
                        </Row>
                    </div>
                </div>
                <Row className="justify-content-between px-5 py-3">
                    <Col sm="4">
                        <Link to="Gizi2" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Button type="submit" color="success" block >Pemeriksaan Anemia <FontAwesomeIcon icon={faChevronRight}/></Button>
                    </Col>
                </Row>
            </div>
        </Form>
    )
}

export default Gizi3