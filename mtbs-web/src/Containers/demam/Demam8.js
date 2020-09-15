import React, { useState } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

// Actions
import{ KlasifikasiDemamChange, AnsDemamChange } from '../../Actions';

import '../../Assets/style/style.css';

var outlineColor = {
    borderColor: '#41E8B3'
}

const Demam = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ansDemam = useSelector(state => state.ansDemam);
    // const klasifikasiDemam = useSelector(state => state.klasifikasiDemam);
    let[demam_nearIsDBD, set_demam_nearIsDBD] = useState(ansDemam.demam_nearIsDBD);
    let[demam_isEkstremitasDingin, set_demam_isEkstremitasDingin] = useState(ansDemam.demam_isEkstremitasDingin);
    let[demam_darahHidungGusiKulit, set_demam_darahHidungGusiKulit] = useState(ansDemam.demam_darahHidungGusiKulit);
    
    const handleSubmit = event =>{
        event.preventDefault();
        axios.post(`/Demam`,{
            ansDemam : ansDemam
        })
        .then( res => {
            dispatch(KlasifikasiDemamChange('DEMAM_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiDemamChange('DEMAM_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err =>{
            console.log(err);
        });
        history.push("Demam9");
    }

    const handleAnswer1 = event =>{
        if(event.target.value === "1"){
            set_demam_nearIsDBD(true);
            dispatch(AnsDemamChange('NEAR_DBD', true));
        }else if(event.target.value === "2"){
            set_demam_nearIsDBD(false);
            dispatch(AnsDemamChange('NEAR_DBD', false));
        }
    }

    const handleAnswer2 = event =>{
        if(event.target.value === "1"){
            set_demam_isEkstremitasDingin(true);
            dispatch(AnsDemamChange('EKSTREMITAS_DINGIN', true));
        }else if(event.target.value === "2"){
            set_demam_isEkstremitasDingin(false);
            dispatch(AnsDemamChange('EKSTREMITAS_DINGIN', false));
        }
    }

    const handleAnswer3 = event =>{
        if(event.target.value === "1"){
            set_demam_darahHidungGusiKulit(true);
            dispatch(AnsDemamChange('DARAH_HIDUNG_GUSI_KULIT', true));
        }else if(event.target.value === "2"){
            set_demam_darahHidungGusiKulit(false);
            dispatch(AnsDemamChange('DARAH_HIDUNG_GUSI_KULIT', false));
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className="w-100">
                <div className="col-12">
                    <div className="d-flex justify-content-center mt-3">
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} style={{ color: '#41E8B3' }} />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-center font-weight-bold">Demam sudah 2-7 hari</h3>
                        <hr
                            style={{
                                color: "#41E8B3",
                                backgroundColor: "#41E8B3",
                                height: 5
                            }}
                        />
                        {/* <p className="text-center"><b>Jika demam 2 hari sampai dengan 7 hari, tanya dan periksa</b></p> */}
                    </div>
                    <div style={{minHeight: "475px"}}>
                        <Row className="justify-content-around">
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Tanyakan! </b>Apakah di sekitar anda ada yang terinfeksi DBD?</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={demam_nearIsDBD === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={demam_nearIsDBD === false} /> 
                                                <span style={{left:"5px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Periksa! </b>Tanda-tanda syok : Ujung ekstremitas teraba dingin DAN 
                                    nadi sangat lemah atau tidak teraba</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio2" value={1} onChange={handleAnswer2} checked={demam_isEkstremitasDingin === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio2" value={2} onChange={handleAnswer2} checked={demam_isEkstremitasDingin === false} /> 
                                                <span style={{left:"5px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Lihat! </b>Adanay perdarahan dari hidung/gusi atau bintik perdarahan di kulit (petekie)</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio3" value={1} onChange={handleAnswer3} checked={demam_darahHidungGusiKulit === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio3" value={2} onChange={handleAnswer3} checked={demam_darahHidungGusiKulit === false} /> 
                                                <span style={{left:"5px"}} className="checkmark"></span>
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
                        <Link to="Demam7" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Button type="submit" color="success" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                    </Col>
                </Row>
            </div>
        </Form>
    )
}
export default Demam;