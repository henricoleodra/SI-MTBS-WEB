import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning } from '@fortawesome/free-solid-svg-icons'

//Import Component
import HeaderTitle from './../../Components/headertitle/HeaderTitle'

const IsiDataAnak2 = () =>{
    return(
        <div>
            <HeaderTitle title="Isi Data Anak"/>
            <div className="d-flex justify-content-center mt-5">
                <Form className="w-75 justify-content-center">
                    <div style={{minHeight : "376px"}}>
                        <FormGroup row>
                            <Col sm={2} className="mt-2"><Label for="suhu">Suhu</Label></Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <Input type="number" name="suhu" id="suhu" placeholder="Contoh : 37" style={{borderColor : '#41E8B3'}} min="0"/>
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText style={{backgroundColor : "#41E8B3", borderColor : "#41E8B3"}} className="text-white">°C</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                            <Col sm={2} style={{marginTop : "-10px"}}><hr style={{backgroundColor : "#41E8B3", width : "2px", height : "25px"}}/></Col>
                            <Col sm={2} className="mt-2"><Label for="beratBadan">Berat Badan</Label></Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <Input type="number" name="beratBadan" id="beratBadan" placeholder="Contoh : 20" style={{borderColor : '#41E8B3'}} min="0"/>
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText style={{backgroundColor : "#41E8B3", borderColor : "#41E8B3"}} className="text-white">Kg</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mt-5">
                            <Col sm={2} className="mt-2"><Label for="tinggiBadan">Tinggi Badan</Label></Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <Input type="number" name="tinggiBadan" id="tinggiBadan" placeholder="Contoh : 50" style={{borderColor : '#41E8B3'}} min="0"/>
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText style={{backgroundColor : "#41E8B3", borderColor : "#41E8B3"}} className="text-white">Cm</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                            <Col sm={2} style={{marginTop : "-10px"}}><hr style={{backgroundColor : "#41E8B3", width : "2px", height : "25px"}}/></Col>
                            <Col sm={2} className="mt-2"><Label for="kunjungan">Kunjungan Ke</Label></Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <Input type="number" name="kunjungan" id="kunjungan" placeholder="Contoh : 1" style={{borderColor : '#41E8B3'}} min="0"/>
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText style={{backgroundColor : "#41E8B3", borderColor : "#41E8B3"}}><FontAwesomeIcon icon={faRunning} style={{color: 'white'}}/></InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label for="keluhanLain">Keluhan Lain</Label>
                            <Input type="textarea" name="keluhanLain" id="keluhanLain" style={{height : "180px", borderColor : "#41E8B3"}}/>
                        </FormGroup>
                    </div>
                    
                    <div className="d-flex justify-content-between mt-4">
                        <Link to="IsiDataAnak1" style={{textDecoration: "none"}}><Button color="danger">Sebelumnya</Button></Link>
                        <Link to="MTBS/TandaBahayaUmum1" style={{textDecoration: "none"}}><Button color="success">Selanjutnya</Button></Link>
                    </div>   
                    
                </Form>
            </div>
        </div>
    );
}

export default  IsiDataAnak2;