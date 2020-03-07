import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, InputGroup, InputGroupText, InputGroupAddon, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


let outlineColor = {
    borderColor : '#41E8B3'
}

let bgColor ={
    backgroundColor : '#41E8B3',
    color: 'white'
}

const PemberianMakanan = (props) =>{
    return(
        <Form>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
                    </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div>  
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Pemberian Makanan</h3>  
                    <hr
                    style={{
                        color: "#41E8B3",
                        backgroundColor: "#41E8B3",
                        height: 5
                    }}
                    />
                    <p className="text-center">Jika anak berumur kurang dari 2 tahun atau GIZI KURUS atau ANEMIA <b>DAN</b> anak tidak akan dirujuk segera</p>
                </div>
                <div style={{minHeight: "500px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Apakah ibu menyusui anak?</CardTitle>
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
                                <hr
                                    style={{
                                        color: "#41E8B3",
                                        backgroundColor: "#41E8B3",
                                        height: 1
                                    }}
                                />
                                <div className="d-flex flex-column justify-content-around pt-2">
                                    <div className="">                         
                                        <div className="w-100 d-flex flex-column">
                                            <h6>Jika Ya, berapa kali sehari ?</h6>
                                            <div className="d-flex justify-content-center">
                                                <InputGroup className="w-50">
                                                    <Input type="number" min="0"/>
                                                    <InputGroupAddon addonType="append" >
                                                        <InputGroupText style={bgColor}>Kali</InputGroupText>
                                                    </InputGroupAddon>
                                                </InputGroup> 
                                            </div>                 
                                        </div> 
                                    </div>
                                    <div className="mt-2">
                                        <h6>Apakah menyusui juga di malam hari?</h6>
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
                    </Row>
                </div>
            </div>
            <Row className="justify-content-between px-5 py-3">
                <Col sm="4">
                    <Link to="KeluhanLain" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Pemeriksaan Keluhan Lain</Button></Link>
                </Col>
                <Col sm="4">
                    <Link to="PemberianMakanan2" style={{textDecoration: "none"}}><Button color="success" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default PemberianMakanan;