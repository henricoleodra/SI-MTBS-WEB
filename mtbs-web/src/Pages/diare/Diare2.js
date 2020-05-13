
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import '../../Assets/style/style.css';

// Actions
import { KlasifikasiDiareChange, AnsDiareChange } from '../../Actions';

let outlineColor = {
    borderColor : '#41E8B3'
}

const Diare2 = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ansDiare = useSelector(state => state.ansDiare);
    const klasifikasiDiare = useSelector(state => state.klasifikasiDiare);
    let[diare_isAnakTidakSadar, set_diare_isAnakTidakSadar] = useState(ansDiare.diare_isAnakTidakSadar);
    let[diare_rewelMudahMarah, set_diare_rewelMudahMarah] = useState(ansDiare.diare_rewelMudahMarah);
    let[diare_isMataCekung, set_diare_isMataCekung] = useState(ansDiare.diare_isMataCekung);

    const handleSubmit = event =>{
        event.preventDefault();
        // if(klasifikasiDiare.diare_3 === true){
        //     axios.post(`/Diare/3`, {
        //         ansDiare : ansDiare
        //     })
        //     .then(res => {
        //         dispatch(KlasifikasiDiareChange('DIARE_KLASIFIKASI', res.data.hasilKlasifikasi));
        //         dispatch(KlasifikasiDiareChange('DIARE_STATUS', res.data.statusKlasifikasi));
        //     })
        //     .catch(err=>{
        //       console.log(err);
        //     }); 
        // }
        // else{
        //     axios.post(`/Diare/2`, {
        //         ansDiare : ansDiare
        //     })
        //     .then(res => {
        //         dispatch(KlasifikasiDiareChange('DIARE_KLASIFIKASI', res.data.hasilKlasifikasi));
        //         dispatch(KlasifikasiDiareChange('DIARE_STATUS', res.data.statusKlasifikasi));
        //     })
        //     .catch(err=>{
        //       console.log(err);
        //     }); 
        // }
        // dispatch(KlasifikasiDiareChange('DIARE_2', true));
        axios.post(`/Diare`, {
            ansDiare: ansDiare
        })
        .then(res => {
            dispatch(KlasifikasiDiareChange('DIARE_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiDiareChange('DIARE_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err => {
            console.log(err);
        });
        history.push("Diare3");    
    }
    const handleAnswer1 = event =>{
        if(event.target.value == 1){
            set_diare_isAnakTidakSadar(true);
            dispatch(AnsDiareChange('ANAK_TIDAK_SADAR', true));
        }else if(event.target.value == 2){
            set_diare_isAnakTidakSadar(false);
            dispatch(AnsDiareChange('ANAK_TIDAK_SADAR', false));
        }
    }
    const handleAnswer2 = event =>{
        if(event.target.value == 1){
            set_diare_rewelMudahMarah(true);
            dispatch(AnsDiareChange('REWEL_MUDAH_MARAH', true));
        }else if(event.target.value == 2){
            set_diare_rewelMudahMarah(false);
            dispatch(AnsDiareChange('REWEL_MUDAH_MARAH', false));
        }
    }
    const handleAnswer3 = event =>{
        if(event.target.value == 1){
            set_diare_isMataCekung(true);
            dispatch(AnsDiareChange('MATA_CEKUNG', true));
        }else if(event.target.value == 2){
            set_diare_isMataCekung(false);
            dispatch(AnsDiareChange('MATA_CEKUNG', false));
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div> 
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Diare</h3>
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
                                <CardTitle className="h5"><b>Tanyakan! </b>Keadaan umum anak</CardTitle>
                                <hr
                                    style={{
                                        color: "#41E8B3",
                                        backgroundColor: "#41E8B3",
                                        height: 1
                                    }}
                                />
                                <div className="d-flex flex-column justify-content-around pt-2">
                                    <div className="">
                                        <h5>Letargis / tidak sadar</h5>
                                        <Row className="limitCol "> 
                                            <Col  sm="3">
                                            
                                            </Col>
                                            <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={diare_isAnakTidakSadar === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                            </Col>
                                            <Col sm="1">
                                            
                                            </Col>
                                            <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio1"  value={2} onChange={handleAnswer1} checked={diare_isAnakTidakSadar === false} required/> 
                                                <span style={{left:"0px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <br></br>
                                    <div className="">
                                        <h5>Rewel / mudah marah</h5>
                                        <Row className="limitCol "> 
                                            <Col  sm="3">
                                            
                                            </Col>
                                            <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio2"  value={1} onChange={handleAnswer2} checked={diare_rewelMudahMarah === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                            </Col>
                                            <Col sm="1">
                                            
                                            </Col>
                                            <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio2" value={2} onChange={handleAnswer2} checked={diare_rewelMudahMarah === false} required/> 
                                                <span style={{left:"0px"}} className="checkmark"></span>
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
                                <CardTitle className="h5"><b>Tanyakan dan periksa! </b>Mata cekung</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline pr-2">  
                                        <Label className="rdoBtn">Ya
                                        <Input type="radio" name="radio3"  value={1} onChange={handleAnswer3} checked={diare_isMataCekung === true} required/>
                                        <span style={{left:"20px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline">
                                        <Label className="rdoBtn">Tidak
                                        <Input type="radio" name="radio3"  value={2} onChange={handleAnswer3} checked={diare_isMataCekung === false} required/> 
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
                    <Link to="Diare1" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    <Button type="submit" color="success" block>Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Diare2