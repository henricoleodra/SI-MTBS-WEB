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

const Demam = (props) => {
    return(
        <Form>
            <div className="w-100">
                <div className="col-12">
                    <div className="mt-2">
                        <h3 className="text-center font-weight-bold">Demam</h3>
                        <hr
                        style={{
                            color: "#41E8B3",
                            backgroundColor: "#41E8B3",
                            height: 5
                        }}
                        />
                </div>
                <div style={{minHeight: "550px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75" >
                            <CardBody className="d-flex justify-content-center flex-column">
                                <CardTitle className="h5"><b>Tanyakan! </b>Apakah anak Demam?</CardTitle>
                                    <div className="w-100 d-flex justify-content-center">
                                        <FormGroup check className="d-inline pr-2">
                                            <Label>
                                                <Input type="radio" name="radio2" style={{backgroundColor: "blue"}}/>{''}
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
                            </CardBody>
                        </Card>
                    </Row>
                </div>
            </div>
            <Row className="justify-content-between px-5 py-3">
                <Col sm="5">
                    <Link to="Diare1" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Pemeriksaan Diare</Button></Link>
                </Col>
                <Col sm="4">
                    <Link to="Demam1" style={{textDecoration: "none"}}><Button color="success" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Demam