import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

// Actions
import { KlasifikasiImunisasiChange, AnsImunisasiChange } from '../../Actions';

var outlineColor = {
    borderColor : '#41E8B3'
}

const Imunisasi3 = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const ansImunisasi = useSelector(state => state.ansImunisasi);
    let[imun_dpthbhib1, set_imun_dpthbhib1] = useState(ansImunisasi.imun_dpthbhib1);
    let[imun_dpthbhib2, set_imun_dpthbhib2] = useState(ansImunisasi.imun_dpthbhib2);
    let[imun_dpthbhib3, set_imun_dpthbhib3] = useState(ansImunisasi.imun_dpthbhib3);

    const handleAnswerDPTHBBHI1 = event =>{
        let tmp = event.target.value;
        set_imun_dpthbhib1(tmp);
        dispatch(AnsImunisasiChange('DPT_HB_HIB1', tmp));
    }

    const handleAnswerDPTHBBHI2 = event =>{
        let tmp = event.target.value;
        set_imun_dpthbhib2(tmp);
        dispatch(AnsImunisasiChange('DPT_HB_HIB2', tmp));
    }

    const handleAnswerDPTHBBHI3 = event =>{
        let tmp = event.target.value;
        set_imun_dpthbhib3(tmp);
        dispatch(AnsImunisasiChange('DPT_HB_HIB3', tmp));
    }

    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(KlasifikasiImunisasiChange('IMUNISASI_KLASIFIKASI',""));
        dispatch(KlasifikasiImunisasiChange('IMUNISASI_STATUS',"info"));
        history.push("Imunisasi4");
    }

    return(
        <Form onSubmit={handleSubmit}>
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
                                            <Input type="radio" name="imun_dpthbhib1" value={'Belum'} onChange={handleAnswerDPTHBBHI1} checked={imun_dpthbhib1 === 'Belum'} required />
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Akan
                                            <Input type="radio" name="imun_dpthbhib1" value={'Akan'} onChange={handleAnswerDPTHBBHI1} checked={imun_dpthbhib1 === 'Akan'}/>
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Sudah
                                            <Input type="radio" name="imun_dpthbhib1" value={'Sudah'} onChange={handleAnswerDPTHBBHI1} checked={imun_dpthbhib1 === 'Sudah'}/>
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
                                            <Input type="radio" name="imun_dpthbhib2" value={'Belum'} onChange={handleAnswerDPTHBBHI2} checked={imun_dpthbhib2 === 'Belum'} required />
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Akan
                                            <Input type="radio" name="imun_dpthbhib2" value={'Akan'} onChange={handleAnswerDPTHBBHI2} checked={imun_dpthbhib2 === 'Akan'} />
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Sudah
                                            <Input type="radio" name="imun_dpthbhib2" value={'Sudah'} onChange={handleAnswerDPTHBBHI2} checked={imun_dpthbhib2 === 'Sudah'} />
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
                                            <Input type="radio" name="imun_dpthbhib3" value={'Belum'} onChange={handleAnswerDPTHBBHI3} checked={imun_dpthbhib3 === 'Belum'} required />
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Akan
                                            <Input type="radio" name="imun_dpthbhib3" value={'Akan'} onChange={handleAnswerDPTHBBHI3} checked={imun_dpthbhib3 === 'Akan'} />
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Sudah
                                            <Input type="radio" name="imun_dpthbhib3" value={'Sudah'} onChange={handleAnswerDPTHBBHI3} checked={imun_dpthbhib3 === 'Sudah'} />
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

export default Imunisasi3;