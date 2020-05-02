import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import '../../Assets/style/style.css';
// Actions
import { KlasifikasiTelingaChange, AnsTelingaChange, compStatusChange } from '../../Actions';

let outlineColor = {
    borderColor : '#41E8B3'
}

const Telinga2 = (props) =>{

    const history = useHistory();
    const dispatch = useDispatch();
    const ansTelinga = useSelector(state => state.ansTelinga);
    const klasifikasiTelinga = useSelector(state => state.klasifikasiTelinga);
    let[telinga_cekKeluarNanah, set_telinga_cekKeluarNanah] = useState(ansTelinga.telinga_cekKeluarNanah); 
    let[telinga_isBengkak, set_telinga_isBengkak] = useState(ansTelinga.telinga_isBengkak);

    const handleSubmit = event =>{
        event.preventDefault();
        // disptach(AnsTelingaChange('CEK_KELUAR_NANAH'),telinga_cekKeluarNanah);
        // disptach(AnsTelingaChange('BENGKAK'), telinga_isBengkak);
        // axios.post(`/Telinga/2`,{
        //     telinga_cekKeluarNanah : telinga_cekKeluarNanah,
        //     telinga_isBengkak : telinga_isBengkak,
        // })
        // .then(res => {
        //     if(klasifikasiTelinga.telinga_status != null){
        //         if(res.data.statusKlasifikasi === "danger"){
        //             disptach(KlasifikasiTelingaChange('TELINGA_KLASIFIKASI', res.data.hasilKlasifikasi));
        //             disptach(KlasifikasiTelingaChange('TELINGA_STATUS', res.data.statusKlasifikasi));
        //         }
        //         else{
        //             if(klasifikasiTelinga.telinga_status != "danger"){
        //                 if(res.data.statusKlasifikasi === "warning"){
        //                     disptach(KlasifikasiTelingaChange('TELINGA_KLASIFIKASI', res.data.hasilKlasifikasi));
        //                     disptach(KlasifikasiTelingaChange('TELINGA_STATUS', res.data.statusKlasifikasi));
        //                 }
        //             }
        //         }
        //     }
        //     else{
        //         disptach(KlasifikasiTelingaChange('TELINGA_KLASIFIKASI', res.data.hasilKlasifikasi));
        //         disptach(KlasifikasiTelingaChange('TELINGA_STATUS', res.data.statusKlasifikasi));
        //     }
        // })
        // .catch(err => {
        //     console.log(err);
        // });
        // history.push("Gizi1");

        axios.post(`/Telinga/2`, {
            ansTelinga : ansTelinga
        })
        .then(res =>{
            dispatch(KlasifikasiTelingaChange('TELINGA_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiTelingaChange('TELINGA_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err =>{
            console.log(err);
        })
        dispatch(KlasifikasiTelingaChange('TELINGA_2', true));
        history.push("Gizi1");
        dispatch(compStatusChange('GIZI'));
    }

    const handleAnswer1 = event => {
        if(event.target.value == 1){
            set_telinga_cekKeluarNanah(true);
            dispatch(AnsTelingaChange('CEK_KELUAR_NANAH'),true);
        }else{
            set_telinga_cekKeluarNanah(false);
            dispatch(AnsTelingaChange('CEK_KELUAR_NANAH'),false);
        }
        console.log(telinga_cekKeluarNanah);
    }

    const handleAnswer2 = event => {
        if(event.target.value == 1){
            set_telinga_isBengkak(true);
            dispatch(AnsTelingaChange('BENGKAK'), true);
        }else{
            set_telinga_isBengkak(false);
            dispatch(AnsTelingaChange('BENGKAK'), false);
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
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
                    </div> 
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Telinga</h3>
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
                    <Link to="Telinga1" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    <Button type="submit" color="success" block>Pemeriksaan Gizi <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Telinga2;