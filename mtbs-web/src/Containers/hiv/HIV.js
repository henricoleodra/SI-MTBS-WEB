import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, InputGroup, InputGroupText, InputGroupAddon, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// Actions
import { KlasifikasiHIVChange, AnsHIVChange, FlagChange } from '../../Actions';

import Classifier from '../../Classifier/Classifier';

import '../../Assets/style/style.css';

let outlineColor = {
    borderColor : '#41E8B3'
}

let bgColor ={
    backgroundColor : '#41E8B3',
    color: 'white'
}

const HIV = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const ansHIV = useSelector(state => state.ansHIV);
    let[hiv_pernahTes, set_hiv_pernahTes] = useState(ansHIV.hiv_pernahTes);
    let[hiv_waktuTes, set_hiv_waktuTes] = useState(ansHIV.hiv_waktuTes);
    let[hiv_hasilTes, set_hiv_hasilTes] = useState(ansHIV.hiv_hasilTes);
    let[hiv_ibuPernahTes, set_hiv_ibuPernahTes] = useState(ansHIV.hiv_ibuPernahTes);
    let[hiv_ibuHasilTes, set_hiv_ibuHasilTes] = useState(ansHIV.hiv_ibuHasilTes);

    const flag = useSelector(state => state.flag);
    const ansTBU = useSelector(state => state.ansTBU);
    const ansBatuk = useSelector(state => state.ansBatuk);
    const ansDiare = useSelector(state => state.ansDiare);
    const ansDemam = useSelector(state => state.ansDemam);
    const ansTelinga = useSelector(state => state.ansTelinga);
    const ansGizi = useSelector(state => state.ansGizi);
    const ansAnemia = useSelector(state => state.ansGizi);

    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(FlagChange('FLAG_HIV'));
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
        history.push("HIV2");
    }

    const handleAnswer1 = event =>{
        if(event.target.value === "1"){
            set_hiv_pernahTes(true);
            dispatch(AnsHIVChange('PERNAH_TES', true));
        }else{
            set_hiv_pernahTes(false);
            dispatch(AnsHIVChange('PERNAH_TES', false));
            set_hiv_waktuTes("");
            dispatch(AnsHIVChange('WAKTU_TES', ""));
            set_hiv_hasilTes(null);
            dispatch(AnsHIVChange('HASIL_TES', null));
        }
    }

    const handleAnswer2 = event =>{
        let tmp = Number(event.target.value);
        set_hiv_waktuTes(tmp);
        dispatch(AnsHIVChange('WAKTU_TES', tmp));
    }

    const handleAnswer3 = event =>{
        if(event.target.value === "1"){
            set_hiv_hasilTes(true);
            dispatch(AnsHIVChange('HASIL_TES', true));
        }else{
            set_hiv_hasilTes(false);
            dispatch(AnsHIVChange('HASIL_TES', false));
        }
    }

    const handleAnswer4 = event =>{
        if(event.target.value === "1"){
            set_hiv_ibuPernahTes(true);
            dispatch(AnsHIVChange('IBU_PERNAH_TES', true));
        }else{
            set_hiv_ibuPernahTes(false);
            dispatch(AnsHIVChange('IBU_PERNAH_TES', false));
        }
    }

    const handleAnswer5 = event =>{
        if(event.target.value === "1"){
            set_hiv_ibuHasilTes(true);
            dispatch(AnsHIVChange('IBU_HASIL_TES', true));
        }else{
            set_hiv_ibuHasilTes(false);
            dispatch(AnsHIVChange('IBU_HASIL_TES', false));
        }
    }

    return(
        <Form id="formHIV1" onSubmit={handleSubmit}>
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
                    <Row className="justify-content-center pr-0 pl-0">
                        <Card style={outlineColor} className=" text-center pr-0 pl-0 w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Anak sudah pernah tes HIV</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline pr-2">  
                                        <Label className="rdoBtn">Ya
                                        <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={hiv_pernahTes === true} required/>
                                        <span style={{left:"20px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline">
                                        <Label className="rdoBtn">Tidak
                                        <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={hiv_pernahTes === false} />
                                        <span style={{left:"0px"}} className="checkmark"></span>
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
                                <div className="d-flex justify-content-around pt-2">
                                    <div className="d-line">
                                        <h6>Jika pernah, kapan ?</h6>
                                        <div className="w-100 d-flex justify-content-center">
                                            <InputGroup className="w-75">
                                                <InputGroupAddon addonType="append" >
                                                    <InputGroupText style={bgColor}>Tahun</InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="number" min="0" value={hiv_waktuTes} onChange={handleAnswer2} disabled={(hiv_pernahTes === null || hiv_pernahTes === false)} required/>
                                            </InputGroup>         
                                        </div> 
                                    </div>
                                    <div className="d-line">
                                        <h6 className="pr-5"style={{left:"-30px"}}>Hasilnya</h6>
                                        <Row className="limitCol "> 
                                            <Col sm="">
                                                <FormGroup className="d-inline ">  
                                                    <Label className="rdoBtn"style={{left:"-30px"}}>Ya
                                                    <Input type="radio" name="radio2" value={1} onChange={handleAnswer3} checked={hiv_hasilTes === true} disabled={(hiv_pernahTes === null || hiv_pernahTes === false)} required/>
                                                    <span style={{left:"-30px"}} className="checkmark"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col sm="">
                                                <FormGroup className="d-inline">
                                                    <Label className="rdoBtn" >Tidak
                                                    <Input type="radio" name="radio2" value={2} onChange={handleAnswer3} checked={hiv_hasilTes === false} disabled={(hiv_pernahTes === null || hiv_pernahTes === false)} />
                                                    <span style={{left:"-30px"}} className="checkmark"></span>
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
                                <CardTitle className="h5"><b>Tanyakan! </b>Ibu pernah tes HIV</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline pr-2">  
                                        <Label className="rdoBtn">Ya
                                        <Input type="radio" name="radio3" value={1} onChange={handleAnswer4} checked={hiv_ibuPernahTes === true} required/>
                                        <span style={{left:"20px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline">
                                        <Label className="rdoBtn">Tidak
                                        <Input type="radio" name="radio3" value={2} onChange={handleAnswer4} checked={hiv_ibuPernahTes === false} />
                                        <span style={{left:"0px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <h6>Hasilnya</h6>
                                <Row className="limitCol "> 
                                    <Col  sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline pr-2">  
                                        <Label className="rdoBtn">Ya
                                        <Input type="radio" name="radio4" value={1} onChange={handleAnswer5} checked={hiv_ibuHasilTes === true} required/>
                                        <span style={{left:"20px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline">
                                        <Label className="rdoBtn">Tidak
                                        <Input type="radio" name="radio4" value={2} onChange={handleAnswer5} checked={hiv_ibuHasilTes === false} />
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
                    <Link to="Anemia" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/>Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    <Button color="success" type="submit" block>Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default HIV;