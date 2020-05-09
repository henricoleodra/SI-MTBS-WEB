import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


var outlineColor = {
    borderColor : '#41E8B3'
}

const Imunisasi = (props) =>{
    return(
        <Form>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
                    </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div>  
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Imunisasi</h3>
                    <hr
                    style={{
                        color: "#41E8B3",
                        backgroundColor: "#41E8B3",
                        height: 5
                    }}
                    />
                </div>
                <div style={{minHeight: "520px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Sudah diberi DPT-HB-Hib 1</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Belum
                                            <Input type="radio" name="radio1" value={'belum'}/>
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Akan
                                            <Input type="radio" name="radio1" value={'akan'}/>
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Sudah
                                            <Input type="radio" name="radio1" value={'sudah'}/>
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Sudah diberi DPT-HB-Hib 2</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Belum
                                            <Input type="radio" name="radio2" value={'belum'}/>
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Akan
                                            <Input type="radio" name="radio2" value={'akan'}/>
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Sudah
                                            <Input type="radio" name="radio2" value={'sudah'}/>
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Sudah diberi DPT-HB-Hib 3</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Belum
                                            <Input type="radio" name="radio3" value={'belum'}/>
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Akan
                                            <Input type="radio" name="radio3" value={'akan'}/>
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Sudah
                                            <Input type="radio" name="radio3" value={'sudah'}/>
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Row>
                </div>
            </div>

            <Row className="justify-content-between px-5 py-0">
                <Col sm="4">
                    <Link to="Imunisasi2" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/>Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    <Button color="success" type="submit" block>Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Imunisasi;