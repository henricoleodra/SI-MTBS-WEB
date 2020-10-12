import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

// ACTIONS 
import { KlasifikasiAnemiaChange, AnsAnemiaChange, compStatusChange, FlagChange } from '../../Actions';

import Classifier from '../../Classifier/Classifier';


let outlineColor = {
    borderColor : '#46d0fe'
}

const Anemia = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const ansAnemia = useSelector(state => state.ansAnemia);
    let [anemia_isPucat, set_anemia_isPucat] = useState(ansAnemia.anemia_isPucat);

    const flag = useSelector(state => state.flag);
    const ansTBU = useSelector(state => state.ansTBU);
    const ansBatuk = useSelector(state => state.ansBatuk);
    const ansDiare = useSelector(state => state.ansDiare);
    const ansDemam = useSelector(state => state.ansDemam);
    const ansTelinga = useSelector(state => state.ansTelinga);
    const ansGizi = useSelector(state => state.ansGizi);
    const ansHIV = useSelector(state => state.ansHIV);

    const handlePucat = event =>{
        set_anemia_isPucat(event.target.value);
        dispatch(AnsAnemiaChange('PUCAT', event.target.value));
    }

    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(FlagChange('FLAG_ANEMIA', 2));
        axios.post(`/Anemia`, {
            ansAnemia : ansAnemia
        })
        .then(res => {
            dispatch(KlasifikasiAnemiaChange('ANEMIA_KLASIFIKASI', res.data.hasilKlasifkasi));
            dispatch(KlasifikasiAnemiaChange('ANEMIA_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err=>{
            console.log(err);
        });
        Classifier(
            "anemia",
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
        dispatch(compStatusChange('HIV'));
        history.push("HIV1");
    }

    return(
        <Form onSubmit={handleSubmit}>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#46d0fe'}}/>
                    </div> 
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Anemia</h3>
                    <hr
                    style={{
                        color: "#41E8B3",
                        backgroundColor: "#46d0fe",
                        height: 5
                    }}
                    />
                </div>
                <div style={{minHeight: "475px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Lihat! </b>Ada kepucatan telapak tangan</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Sangat pucat
                                            <Input type="radio" name="radio1" value={'sangatPucat'} onChange={handlePucat} checked={anemia_isPucat === 'sangatPucat'} required/>
                                            <span style={{left:"0px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Agak pucat
                                            <Input type="radio" name="radio1" value={'agakPucat'} onChange={handlePucat} checked={anemia_isPucat === 'agakPucat'}/>
                                            <span style={{left:"7px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Normal
                                            <Input type="radio" name="radio1" value={'normal'} onChange={handlePucat} checked={anemia_isPucat === 'normal'}/>
                                            <span style={{left:"25px"}} className="checkmark"></span>
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
                    <Link to="Gizi1" style={{textDecoration: "none"}}><Button style={{backgroundColor: '#fe8d3b', border: '0'}} block><FontAwesomeIcon icon={faChevronLeft}/>Pemeriksaan Gizi</Button></Link>
                </Col>
                <Col sm="4">
                    <Button style={{backgroundColor: '#46d0fe', border: '0'}} type="submit" block>Pemeriksaan HIV <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Anemia;