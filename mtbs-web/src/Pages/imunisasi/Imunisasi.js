import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


let outlineColor = {
    borderColor : '#41E8B3'
}

const Imunisasi = (props) =>{
    return(
        <Form>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
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
                <div style={{minHeight: "500px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-left w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5 text-center"><b>Tanyakan! </b>Sudah diberi.....</CardTitle>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        BCG
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        HB 0
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Polio 1
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Polio 2
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Polio 3
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Polio 4
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        DPT-HB-HiB 1
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        DPT-HB-HiB 2
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        DPT-HB-HiB 3
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        IPV
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Campak
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        DPT-HB-HiB (lanjutan)
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Campak (lanjutan)
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
                    <Link to="VitaminA" style={{textDecoration: "none"}}><Button color="success" block >Pemeriksaan VitaminA <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Imunisasi;