import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// Actions
import { KlasifikasiHIVChange, AnsHIVChange, compStatusChange, FlagChange } from '../../Actions';

import Classifier from '../../Classifier/Classifier';

let outlineColor = {
    borderColor : '#46d0fe'
}

const HIV = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const ansHIV = useSelector(state => state.ansHIV);
    let[hiv_bercakPutih, set_hiv_bercakPutih] = useState(ansHIV.hiv_bercakPutih);

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
        dispatch(FlagChange('FLAG_HIV', 2));
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
        dispatch(compStatusChange('IMUNISASI'));
        history.push("Imunisasi1");
    }

    const handleAnswer1 = event =>{
        if(event.target.value === "1"){
            set_hiv_bercakPutih(true);
            dispatch(AnsHIVChange('BERCAK_PUTIH', true));
        }else if(event.target.value === "2"){
            set_hiv_bercakPutih(false);
            dispatch(AnsHIVChange('BERCAK_PUTIH', false));
        }
    }

    return(
        <Form id="formHIV3" className="" onSubmit={handleSubmit}>
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
                            <FontAwesomeIcon icon={faCircle} style = {{color: '#46d0fe'}}/>
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
                                    <CardTitle className="h5"><b>Lihat! </b>Ada bercak putih di rongga mulut</CardTitle>
                                    <Row className="limitCol">
                                        <Col sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Ya
                                            <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={hiv_bercakPutih === true} required/>
                                            <span style={{left:"20px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Tidak
                                            <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={hiv_bercakPutih === false} required/>
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
                    <Link to="HIV2" style={{textDecoration: "none"}}><Button style={{backgroundColor: '#fe8d3b', border: '0'}} block><FontAwesomeIcon icon={faChevronLeft}/>Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Button style={{backgroundColor: '#46d0fe', border: '0'}} type="submit" block>Pemeriksaan Imunisasi<FontAwesomeIcon icon={faChevronRight}/></Button>
                    </Col>
                </Row>
            </div>
        </Form>
    );
}

export default HIV;