import React, {  } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Input, Form, Card, CardBody, CardTitle, Button, Row, Col, Label } from "reactstrap";
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
                    <div style={{minHeight: "440px"}}>
                        <Row className="justify-content-center">
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Tentukan! </b>Lingkar lengan atas(LiLA) untuk anak umur 6 bulan / lebih</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col  sm="4">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">
                                                    <p>liLA &#44;x</p>
                                                <Input type="radio" name="" required />
                                                <span style={{left:"30px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="4">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Akan
                                                <Input type="radio"/>
                                                <span style={{left:"30px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="4">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Sudah
                                                <Input type="radio"/>
                                                <span style={{left:"30px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                            {/* <CardTitle className="h5">Jika BB/PB < -3SD ATAU LiLA < 11&#44;5 cm, maka: </CardTitle> */}
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    {/* <CardTitle className="h5">Nilai pemberian ASI pada anak umur <6 bulan! Apakah anak memiliki masalah pemberian ASI? </CardTitle> */}
                                    <Row className="limitCol "> 
                                        <Col  sm="4">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">
                                                    <p>liLA</p>
                                                <Input type="radio" name="" required />
                                                <span style={{left:"30px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="4">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Akan
                                                <Input type="radio"/>
                                                <span style={{left:"30px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="4">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Sudah
                                                <Input type="radio"/>
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