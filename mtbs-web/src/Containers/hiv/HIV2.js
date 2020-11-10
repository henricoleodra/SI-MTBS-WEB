import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { KlasifikasiHIVChange, AnsHIVChange } from '../../Actions';

import Classifier from '../../Classifier/Classifier';

let outlineColor = {
    borderColor : '#46d0fe'
}

const HIV2 = (props) =>{

    const history = useHistory();
    const dispatch = useDispatch();
    const ansHIV = useSelector(state => state.ansHIV);
    let[hiv_kerabatTerdiagnosis, set_hiv_kerabatTerdiagnosis] = useState(ansHIV.hiv_kerabatTerdiagnosis);
    let[hiv_kerabatMeninggal, set_hiv_kerabatMeninggal] = useState(ansHIV.hiv_kerabatMeninggal);
    let[hiv_masihDapatASI, set_hiv_masihDapatASI] = useState(ansHIV.hiv_masihDapatASI);

    const flag = useSelector(state => state.flag);
    const ansTBU = useSelector(state => state.ansTBU);
    const ansBatuk = useSelector(state => state.ansBatuk);
    const ansDiare = useSelector(state => state.ansDiare);
    const ansDemam = useSelector(state => state.ansDemam);
    const ansTelinga = useSelector(state => state.ansTelinga);
    const ansGizi = useSelector(state => state.ansGizi);
    const ansAnemia = useSelector(state => state.ansAnemia);

    const handleSubmit = event =>{
        event.preventDefault();
        axios.post(`/HIV`, {
            ansHIV: ansHIV
        })
        .then(res => {
            dispatch(KlasifikasiHIVChange('HIV_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiHIVChange('HIV_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err => {
            console.log(err);
        });
        Classifier(
            "hiv",
            dispatch,
            flag,
            ansTBU,
            ansBatuk,
            ansDiare,
            ansDemam,
            ansTelinga,
            ansGizi,
            ansAnemia,
            ansHIV
        );
        history.push("HIV3");    
    }
    const handleAnswer1 = event =>{
        if(event.target.value === "1"){
            set_hiv_kerabatTerdiagnosis(true);
            dispatch(AnsHIVChange('KERABAT_TERDIAGNOSIS', true));
        }else if(event.target.value === "2"){
            set_hiv_kerabatTerdiagnosis(false);
            dispatch(AnsHIVChange('KERABAT_TERDIAGNOSIS', false));
        }
    }
    const handleAnswer2 = event =>{
        if(event.target.value === "1"){
            set_hiv_kerabatMeninggal(true);
            dispatch(AnsHIVChange('KERABAT_MENINGGAL', true));
        }else if(event.target.value === "2"){
            set_hiv_kerabatMeninggal(false);
            dispatch(AnsHIVChange('KERABAT_MENINGGAL', false));
        }
    }
    const handleAnswer3 = event =>{
        if(event.target.value === "1"){
            set_hiv_masihDapatASI(true);
            dispatch(AnsHIVChange('MASIH_DAPAT_ASI', true));
        }else if(event.target.value === "2"){
            set_hiv_masihDapatASI(false);
            dispatch(AnsHIVChange('MASIH_DAPAT_ASI', false));
        }
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
                        <FontAwesomeIcon icon={faCircle} style={{color: '#46d0fe'}}/>
                    </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div>    
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">HIV</h3>
                    <hr
                    style={{
                        color: "#46d0fe",
                        backgroundColor: "#46d0fe",
                        height: 5
                    }}
                    />
                </div>
                <div style={{minHeight: "475px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Anak memiliki orang tua kandung dan/atau saudara kandung .....</CardTitle>
                                <hr
                                style={{
                                    color: "#46d0fe",
                                    backgroundColor: "#46d0fe",
                                    height: 1
                                }}
                                />
                                <div className="d-flex flex-column justify-content-center pt-2">
                                    <div className="w-100">
                                        <h6>..... yang terdiagnosis HIV</h6>
                                        <Row className="limitCol">
                                            <Col sm="3">
                                            
                                            </Col>
                                            <Col sm="3">
                                                <FormGroup className="d-inline pr-2">  
                                                    <Label className="rdoBtn">Ya
                                                    <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={hiv_kerabatTerdiagnosis === true} required/>
                                                    <span style={{left:"20px"}} className="checkmark"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col sm="1">
                                            
                                            </Col>
                                            <Col sm="3">
                                                <FormGroup className="d-inline">
                                                    <Label className="rdoBtn">Tidak
                                                    <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={hiv_kerabatTerdiagnosis === false} />
                                                    <span style={{left:"6px"}} className="checkmark"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="w-100">
                                        <h6>..... yang meninggal karena penyebab tidak diketahui tapi masih mungkin karena HIV</h6>
                                        <Row className="limitCol">
                                            <Col sm="3">
                                            
                                            </Col>
                                            <Col sm="3">
                                                <FormGroup className="d-inline pr-2">  
                                                    <Label className="rdoBtn">Ya
                                                    <Input type="radio" name="radio2" value={1} onChange={handleAnswer2} checked={hiv_kerabatMeninggal === true} required/>
                                                    <span style={{left:"20px"}} className="checkmark"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col sm="1">
                                            
                                            </Col>
                                            <Col sm="3">
                                                <FormGroup className="d-inline">
                                                    <Label className="rdoBtn">Tidak
                                                    <Input type="radio" name="radio2" value={2} onChange={handleAnswer2} checked={hiv_kerabatMeninggal === false} />
                                                    <span style={{left:"6px"}} className="checkmark"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Anak masih mendapatkan ASI</CardTitle>
                                <Row className="limitCol">
                                    <Col sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Ya
                                            <Input type="radio" name="radio3" value={1} onChange={handleAnswer3} checked={hiv_masihDapatASI === true} required/>
                                            <span style={{left:"20px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Tidak
                                            <Input type="radio" name="radio3" value={2} onChange={handleAnswer3} checked={hiv_masihDapatASI === false} />
                                            <span style={{left:"6px"}} className="checkmark"></span>
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
                    <Link to="HIV1" style={{textDecoration: "none"}}><Button style={{backgroundColor: '#fe8d3b', border: '0'}} block><FontAwesomeIcon icon={faChevronLeft}/>Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    <Button style={{backgroundColor: '#46d0fe', border: '0'}} type="submit" block>Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default HIV2;