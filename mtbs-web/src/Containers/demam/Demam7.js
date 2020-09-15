import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// Actions
import { KlasifikasiDemamChange, AnsDemamChange } from '../../Actions';
import { compStatusChange } from '../../Actions';

import '../../Assets/style/style.css';

var outlineColor = {
    borderColor: '#41E8B3'
}

const Demam = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ansDemam = useSelector(state => state.ansDemam);
    let[demam_anakMuntah, set_demam_anakMuntah] = useState(ansDemam.demam_anakMuntah);
    let[demam_anakSeringMuntah, set_demam_anakSeringMuntah] = useState(ansDemam.demam_anakSeringMuntah);
    let[demam_muntahLikeDarahOrKopi, set_demam_muntahLikeDarahOrKopi] = useState(ansDemam.demam_muntahLikeDarahOrKopi);
    let[demam_berakBerwarnaHitam, set_demam_berakBerwarnaHitam] = useState(ansDemam.demam_berakBerwarnaHitam);

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`/Demam`, {
            ansDemam : ansDemam
        })
        .then(res => {
            dispatch(KlasifikasiDemamChange('DEMAM_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiDemamChange('DEMAM_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err=>{
        console.log(err);
        });
        dispatch(KlasifikasiDemamChange('Demam_6', true));
        history.push("Demam7"); 
        dispatch(compStatusChange('TELINGA'));
    }

    const handleAnswer1 = event =>{
        if(event.target.value === "1"){
            set_demam_anakMuntah(true);
            dispatch(AnsDemamChange('ANAK_MUNTAH', true));
        }else{
            set_demam_anakMuntah(false);
            dispatch(AnsDemamChange('ANAK_MUNTAH', false));
        }
    }

    const handleAnswer2 = event =>{
        if(event.target.value === "1"){
            set_demam_anakSeringMuntah(true);
            dispatch(AnsDemamChange('SERING_MUNTAH', true));
        }else{
            set_demam_anakSeringMuntah(false);
            dispatch(AnsDemamChange('SERING_MUNTAH', false));
        }
    }

    const handleAnswer3 = event =>{
        if(event.target.value === "1"){
            set_demam_muntahLikeDarahOrKopi(true);
            dispatch(AnsDemamChange('MUNTAH_DARAH_KOPI', true));
        }else{
            set_demam_muntahLikeDarahOrKopi(false);
            dispatch(AnsDemamChange('MUNTAH_DARAH_KOPI', false));
        }
    }

    const handleAnswer4 = event =>{
        if(event.target.value === "1"){
            set_demam_berakBerwarnaHitam(true);
            dispatch(AnsDemamChange('BERAK_HITAM', true));
        }else{
            set_demam_berakBerwarnaHitam(false);
            dispatch(AnsDemamChange('BERAK_HITAM', false));
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
                            <FontAwesomeIcon icon={faCircle} style={{ color: '#41E8B3' }} />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
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
                        <Row className="row d-flex justify-content-around">
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Lihat! </b>Apakah anak muntah?</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={demam_anakMuntah === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={demam_anakMuntah === false} /> 
                                                <span style={{left:"5px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <hr
                                        style={{
                                            color: "#41E8B3",
                                            backgroundColor: "#41E8B3",
                                            height: 1
                                        }}
                                    />
                                    <h5>Jika, ya</h5>
                                    <div>
                                        <h6>Apakah sering?</h6>
                                        <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio2" value={1} onChange={handleAnswer2} checked={demam_anakSeringMuntah === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio2" value={2} onChange={handleAnswer2} checked={demam_anakSeringMuntah === false} /> 
                                                <span style={{left:"5px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    </div>
                                    <div>
                                        <h6>Apakah muntah dengan darah atau seperti kopi?</h6>
                                        <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio3" value={1} onChange={handleAnswer3} checked={demam_muntahLikeDarahOrKopi === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio3" value={2} onChange={handleAnswer3} checked={demam_muntahLikeDarahOrKopi === false} /> 
                                                <span style={{left:"5px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Tanyakan! </b>Apakah tinja berwarna hitam?</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio4" value={1} onChange={handleAnswer4} checked={demam_berakBerwarnaHitam === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio4" value={2} onChange={handleAnswer4} checked={demam_berakBerwarnaHitam === false} /> 
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
                        <Link to="Demam6" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
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