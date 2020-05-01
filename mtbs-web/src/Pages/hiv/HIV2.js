import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import '../../Assets/style/style.css';

import { KlasifikasiHIVChange, AnsHIVChange } from '../../Actions';

let outlineColor = {
    borderColor : '#41E8B3'
}

const HIV2 = (props) =>{

    const history = useHistory();
    const dispatch = useDispatch();
    const ansHIV = useSelector(state => state.ansHIV);
    const klasifikasiHIV = useSelector(state => state.klasifikasiHIV);
    let[hiv_kerabatTerdiagnosis, set_hiv_kerabatTerdiagnosis] = useState(ansHIV.hiv_kerabatTerdiagnosis);
    let[hiv_kerabatMeninggal, set_hiv_kerabatMeninggal] = useState(ansHIV.hiv_kerabatMeninggal);
    let[hiv_masihDapatASI, set_hiv_masihDapatASI] = useState(ansHIV.hiv_masihDapatASI);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(AnsHIVChange('KERABAT_TERDIAGNOSIS', hiv_kerabatTerdiagnosis));
        dispatch(AnsHIVChange('KERABAT_MENINGGAL', hiv_kerabatMeninggal));
        dispatch(AnsHIVChange('MASIH_DAPAT_ASI', hiv_masihDapatASI));
        axios.post(`/HIV/2`, {
            hiv_pernahTes: ansHIV.hiv_pernahTes,
            hiv_waktuTes: ansHIV.hiv_waktuTes,
            hiv_hasilTes: ansHIV.hiv_hasilTes,
            hiv_ibuPernahTes: ansHIV.hiv_ibuPernahTes,
            hiv_ibuHasilTes: ansHIV.hiv_ibuHasilTes,
            hiv_kerabatTerdiagnosis: hiv_kerabatTerdiagnosis,
            hiv_kerabatMeninggal: hiv_kerabatMeninggal,
            hiv_masihDapatASI: hiv_masihDapatASI
        })
        .then(res => {
            if(klasifikasiHIV.hiv_klasifikasi != null){
                if(res.data.statusKlasifikasi === "danger"){
                    dispatch(KlasifikasiHIVChange('HIV_KLASIFIKASI', res.data.hasilKlasifkasi));
                    dispatch(KlasifikasiHIVChange('HIV_STATUS', res.data.statusKlasifikasi));
                }
                else{
                    if(klasifikasiHIV.hiv_klasifikasi != "danger"){
                        if(res.data.statusKlasifikasi === "warning" ){
                            dispatch(KlasifikasiHIVChange('HIV_KLASIFIKASI', res.data.hasilKlasifkasi));
                            dispatch(KlasifikasiHIVChange('HIV_STATUS', res.data.statusKlasifikasi));
                        }
                    }
                }
            }
            else{
                dispatch(KlasifikasiHIVChange('HIV_KLASIFIKASI', res.data.hasilKlasifikasi));
                dispatch(KlasifikasiHIVChange('HIV_STATUS', res.data.statusKlasifikasi));
            }
        })
        .catch(err=>{
            console.log(err);
        });
        history.push("HIV3"); 
    }
    const handleAnswer1 = event =>{
        if(event.target.value == 1){
            set_hiv_kerabatTerdiagnosis(true);
        }else if(event.target.value == 2){
            set_hiv_kerabatTerdiagnosis(false);
        }
    }
    const handleAnswer2 = event =>{
        if(event.target.value == 1){
            set_hiv_kerabatMeninggal(true);
        }else if(event.target.value == 2){
            set_hiv_kerabatMeninggal(false);
        }
    }
    const handleAnswer3 = event =>{
        if(event.target.value == 1){
            set_hiv_masihDapatASI(true);
        }else if(event.target.value == 2){
            set_hiv_masihDapatASI(false);
        }
    }

    return(
        <Form onsubmit={handleSubmit}>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
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
                    <h3 className="text-center font-weight-bold">HIV</h3>
                    <hr
                    style={{
                        color: "#41E8B3",
                        backgroundColor: "#41E8B3",
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
                                    color: "#41E8B3",
                                    backgroundColor: "#41E8B3",
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
                    <Link to="HIV1" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/>Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    <Button color="success" type="submit" block>Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default HIV2;