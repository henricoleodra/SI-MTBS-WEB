import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

import '../../Assets/style/style.css';

var outlineColor = {
    borderColor: '#41E8B3'
}

const Demam = (props) => {
    return (
        <Form /**onSubmit={handleSubmit}**/> 
            <div className="w-100">
                <div className="col-12">
                    <div className="d-flex justify-content-center mt-3">
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} style={{ color: '#41E8B3' }} />
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
                    <div style={{minHeight: "354px"}}>
                        <Row className="justify-content-around">
                            <Card style={outlineColor} className="text-center w-75" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Lakukan! </b>Tes Malaria</CardTitle>
                                    <div>
                                        <h6>Hasil RDT:</h6>
                                        <Row className="limitCol "> 
                                            <Col  sm="3">
                                            
                                            </Col>
                                            <Col sm="3">
                                                <FormGroup className="d-inline pr-2">  
                                                    <Label className="rdoBtn">Ya
                                                    <Input type="radio" name="radio1" /**value={1} onChange={handleAnswer1} checked={tbu_letargis === true}**/ required/>
                                                    <span style={{left:"20px"}} className="checkmark"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col sm="1">
                                            
                                            </Col>
                                            <Col sm="3">
                                                <FormGroup className="d-inline">
                                                    <Label className="rdoBtn">Tidak
                                                    <Input type="radio" name="radio1" /**value={2} onChange={handleAnswer1} checked={tbu_letargis === false}**/ /> 
                                                    <span style={{left:"0px"}} className="checkmark"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </Row>
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
                <Row className="justify-content-between px-5 py-0">
                    <Col sm="4">
                        <Link to="Demam3" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Button type="submit" color="success" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                    </Col>
                </Row>
            </div>
        </Form>
    )
}
export default Demam;