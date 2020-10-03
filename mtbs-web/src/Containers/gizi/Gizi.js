import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { KlasifikasiGiziChange, AnsGiziChange, FlagChange } from '../../Actions';
import Classifier from '../../Classifier/Classifier';

var outlineColor = {
    borderColor: '#41E8B3'
}

const Gizi = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ansGizi = useSelector(state => state.ansGizi);
    let[gizi_tampakSangatKurus, set_gizi_tampakSangatKurus] = useState(ansGizi.gizi_tampakSangatKurus);
    let[gizi_pembengkakanKeduaPunggungKakiAtauTangan, set_gizi_pembengkakanKeduaPunggungKakiAtauTangan] = useState(ansGizi.gizi_pembengkakanKeduaPunggungKakiAtauTangan);

    const flag = useSelector(state => state.flag);
    const ansTBU = useSelector(state => state.ansTBU);
    const ansBatuk = useSelector(state => state.ansBatuk);
    const ansDiare = useSelector(state => state.ansDiare);
    const ansDemam = useSelector(state => state.ansDemam);
    const ansTelinga = useSelector(state => state.ansTelinga);
    const ansAnemia = useSelector(state => state.ansGizi);
    const ansHIV = useSelector(state => state.ansHIV);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(FlagChange('FLAG_GIZI', true));
        axios.post(`/Gizi`, {
            ansGizi: ansGizi
        })
        .then(res => {
            dispatch(KlasifikasiGiziChange('GIZI_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiGiziChange('GIZI_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err => {
            console.log(err);
        });
        Classifier(
            "gizi",
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
        history.push("Gizi2");
    }

    const handleAnswerTampakSangatKurus = event => {
        if(event.target.value === "1"){
            set_gizi_tampakSangatKurus(true);
            dispatch(AnsGiziChange('TAMPAK_SANGAT_KURUS', true));
        }
        else{
            set_gizi_tampakSangatKurus(false);
            dispatch(AnsGiziChange('TAMPAK_SANGAT_KURUS', false));
        }
    }

    const handleAnswerPembengkakanKeduaPunggungKakiAtauTangan = event => {
        if(event.target.value === "1"){
            set_gizi_pembengkakanKeduaPunggungKakiAtauTangan(true);
            dispatch(AnsGiziChange('PEMBENGKAKAN_KEDUA_PUNGGUNG_KAKI_ATAU_TANGAN', true));
        }
        else{
            set_gizi_pembengkakanKeduaPunggungKakiAtauTangan(false);
            dispatch(AnsGiziChange('PEMBENGKAKAN_KEDUA_PUNGGUNG_KAKI_ATAU_TANGAN', false));
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className="w-100">
                <div className="col-12">
                    <div className="d-flex justify-content-center mt-3">
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} style={{ color: '#46d0fe' }} />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-center font-weight-bold">Status Gizi</h3>
                        <hr
                        style={{
                            color: "#46d0fe",
                            backgroundColor: "#46d0fe",
                            height: 5
                        }}
                    />
                    </div>
                    <div style={{minHeight: "455px"}}>
                        <Row className="justify-content-center">
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Lihat! </b>Apakah anak tampak sangat kurus</CardTitle>
                                    <Row className="limitCol">
                                        <Col sm="3">
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="gizi_tampakSangatKurus" value="1" onChange={handleAnswerTampakSangatKurus} checked={gizi_tampakSangatKurus === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="gizi_tampakSangatKurus" value="2" onChange={handleAnswerTampakSangatKurus} checked={gizi_tampakSangatKurus === false} /> 
                                                <span style={{left:"0px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Lihat dan raba! </b>Adanya pembengkakan di kedua punggung kaki/tangan</CardTitle>
                                    <Row className="limitCol">
                                        <Col sm="3">
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="gizi_pembengkakanKeduaPunggungKakiAtauTangan" value={1} onChange={handleAnswerPembengkakanKeduaPunggungKakiAtauTangan} checked={gizi_pembengkakanKeduaPunggungKakiAtauTangan === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="gizi_pembengkakanKeduaPunggungKakiAtauTangan" value={2} onChange={handleAnswerPembengkakanKeduaPunggungKakiAtauTangan} checked={gizi_pembengkakanKeduaPunggungKakiAtauTangan === false} /> 
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
                        <Link to="TelingaYaTidak" style={{textDecoration: "none"}}><Button style={{backgroundColor: '#fe8d3b', border: '0'}} block><FontAwesomeIcon icon={faChevronLeft}/> Pemeriksaan Telinga</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Button type="submit" color="success"style={{backgroundColor: '#46d0fe ', border: '0'}} block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                    </Col>
                </Row>
            </div>
        </Form>
    )
}

export default Gizi