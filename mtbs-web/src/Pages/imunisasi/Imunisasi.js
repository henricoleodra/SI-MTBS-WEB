import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

// Actions
import { KlasifikasiImunisasiChange, AnsImunisasiChange } from '../../Actions';

let outlineColor = {
    borderColor : '#41E8B3'
}

const Imunisasi = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const ansImunisasi = useSelector(state => state.ansImunisasi);
    let[imun_bcg, set_imun_bcg] = useState(ansImunisasi.imun_bcg);
    let[imun_hb0, set_imun_hb0] = useState(ansImunisasi.imun_hb0);

    const handleAnswerBCG = event =>{
        let tmp = event.target.value;
        set_imun_bcg(tmp);
        dispatch(AnsImunisasiChange('BCG', tmp));
    }

    const handleAnswerHB0 = event =>{
        let tmp = event.target.value;
        set_imun_hb0(tmp);
        dispatch(AnsImunisasiChange('HB0', tmp));
    }

    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(KlasifikasiImunisasiChange('IMUNISASI_KLASIFIKASI',""));
        dispatch(KlasifikasiImunisasiChange('IMUNISASI_STATUS',"info"));
        history.push("Imunisasi2");
    }

    return(
        <Form onSubmit={handleSubmit}>
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
                                <CardTitle className="h5"><b>Tanyakan! </b>Sudah diberi BCG</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Belum
                                            <Input type="radio" name="imun_bcg" value={'Belum'} onChange={handleAnswerBCG} checked={imun_bcg === 'Belum'} required/>
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Akan
                                            <Input type="radio" name="imun_bcg" value={'Akan'} onChange={handleAnswerBCG} checked={imun_bcg === 'Akan'} />
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Sudah
                                            <Input type="radio" name="imun_bcg" value={'Sudah'} onChange={handleAnswerBCG} checked={imun_bcg === 'Sudah'} />
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Sudah diberi HB 0</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Belum
                                            <Input type="radio" name="imun_hb0" value={'Belum'} onChange={handleAnswerHB0} checked={imun_hb0 === 'Belum'} required/>
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Akan
                                            <Input type="radio" name="imun_hb0" value={'Akan'} onChange={handleAnswerHB0} checked={imun_hb0 === 'Akan'} />
                                            <span style={{left:"30px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Sudah
                                            <Input type="radio" name="imun_hb0" value={'Sudah'} onChange={handleAnswerHB0} checked={imun_hb0 === 'Sudah'} />
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
                    <Link to="HIV1" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/>Pemeriksaan HIV</Button></Link>
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