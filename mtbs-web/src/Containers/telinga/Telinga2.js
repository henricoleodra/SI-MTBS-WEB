import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// Actions
import { KlasifikasiTelingaChange, AnsTelingaChange, compStatusChange, AnsGiziChange, FlagChange } from '../../Actions';

import Classifier from '../../Classifier/Classifier';

let outlineColor = {
    borderColor : '#75C9E6'
}

const Telinga2 = (props) =>{

    const history = useHistory();
    const dispatch = useDispatch();
    const ansTelinga = useSelector(state => state.ansTelinga);
    let[telinga_cekKeluarNanah, set_telinga_cekKeluarNanah] = useState(ansTelinga.telinga_cekKeluarNanah); 
    let[telinga_isBengkak, set_telinga_isBengkak] = useState(ansTelinga.telinga_isBengkak);

    const flag = useSelector(state => state.flag);
    const ansTBU = useSelector(state => state.ansTBU);
    const ansBatuk = useSelector(state => state.ansBatuk);
    const ansDiare = useSelector(state => state.ansDiare);
    const ansDemam = useSelector(state => state.ansDemam);
    const ansGizi = useSelector(state => state.ansGizi);
    const ansAnemia = useSelector(state => state.ansGizi);
    const ansHIV = useSelector(state => state.ansHIV);

    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(FlagChange("FLAG_TELINGA", 2));
        const res = await axios.post(`/Telinga`, { ansTelinga: ansTelinga});
        dispatch(KlasifikasiTelingaChange("TELINGA_KLASIFIKASI", res.data.hasilKlasifikasi));
        dispatch(KlasifikasiTelingaChange("TELINGA_STATUS", res.data.statusKlasifikasi));
        if (res.data.statusKlasifikasi === "danger" || res.data.statusKlasifikasi === "warning"){
            ansGizi.gizi_telinga = true;
            dispatch(AnsGiziChange('GIZI_TELINGA', true));
        }
        else {
            ansGizi.gizi_telinga = false;
            dispatch(AnsGiziChange('GIZI_TELINGA', false));
        }
        // axios.post(`/Telinga`, {
        //     ansTelinga: ansTelinga
        // })
        // .then(res => {
        //     dispatch(KlasifikasiTelingaChange('TELINGA_KLASIFIKASI', res.data.hasilKlasifikasi));
        //     dispatch(KlasifikasiTelingaChange('TELINGA_STATUS', res.data.statusKlasifikasi));
        //     if(res.data.statusKlasifikasi === "danger" || res.data.statusKlasifikasi === "warning"){
        //         dispatch(AnsGiziChange('GIZI_TELINGA', true));
        //     }
        //     else{   
        //         dispatch(AnsGiziChange('GIZI_TELINGA', false));
        //     }
        // })
        // .catch(err => {
        //     console.log(err);
        // });
        Classifier(
            "telinga",
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
        history.push("Gizi1");
        dispatch(compStatusChange('GIZI'));
    }

    const handleAnswer1 = (event) => {
        if(event.target.value === "1"){
            set_telinga_cekKeluarNanah(true);
            dispatch(AnsTelingaChange("CEK_KELUAR_NANAH",true));
        }else{
            set_telinga_cekKeluarNanah(false);
            dispatch(AnsTelingaChange("CEK_KELUAR_NANAH",false));
        }
        console.log(telinga_cekKeluarNanah);
    }

    const handleAnswer2 = (event) => {
        if(event.target.value === "1"){
            set_telinga_isBengkak(true);
            dispatch(AnsTelingaChange("BENGKAK", true));
        }else{
            set_telinga_isBengkak(false);
            dispatch(AnsTelingaChange("BENGKAK", false));
        }
        console.log(telinga_isBengkak);
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
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Telinga</h3>
                    <hr
                    style={{
                        color: "#75C9E6",
                        backgroundColor: "#46d0fe",
                        height: 5
                    }}
                    />
                </div>
                <div style={{minHeight: "475px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Lihat! </b>Ada cairan/nanah keluar dari telinga</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Ya
                                            <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={telinga_cekKeluarNanah === true} required/>
                                            <span style={{left:"20px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Tidak
                                            <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={telinga_cekKeluarNanah === false} /> 
                                            <span style={{left:"0px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>    
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Raba! </b>Ada pembengkakan yang nyeri di belakang telinga</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Ya
                                            <Input type="radio" name="radio2" value={1} onChange={handleAnswer2} checked={telinga_isBengkak === true} required/>
                                            <span style={{left:"20px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Tidak
                                            <Input type="radio" name="radio2" value={2} onChange={handleAnswer2} checked={telinga_isBengkak === false} /> 
                                            <span style={{left:"0px"}} className="checkmark"></span>
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
                    <Link to="Telinga1" style={{textDecoration: "none"}}><Button style={{backgroundColor: '#fe8d3b', border: '0'}} block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    <Button type="submit" style={{backgroundColor: '#46d0fe ', border: '0'}} block>Pemeriksaan Gizi <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Telinga2;