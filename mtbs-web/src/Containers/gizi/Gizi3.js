import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup, Input, Form, Card, CardBody, CardTitle, Button, Row, Col, Label } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { KlasifikasiGiziChange, AnsGiziChange, compStatusChange } from '../../Actions';

var outlineColor = {
    borderColor: '#41E8B3'
}

const Gizi3 = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ansGizi = useSelector(state => state.ansGizi);
    let [gizi_lingkarLenganAtas, set_gizi_lingkarLenganAtas] = useState(ansGizi.gizi_lingkarLenganAtas);
    let [gizi_masalahPemberianASI, set_gizi_masalahPemberianASI] = useState(ansGizi.gizi_masalahPemberianASI);

    const handleSubmit = event => {
        event.preventDefault();
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
        history.push("Anemia");
        dispatch(compStatusChange('ANEMIA'));
    }

    const handleAnswerLingkarLenganAtas = event => {
        let tmp = event.target.value;
        set_gizi_lingkarLenganAtas(tmp);
        dispatch(AnsGiziChange('LINGKAR_LENGAN_ATAS', tmp));
    }

    const handleAnswerMasalahPemberianASI = event => {
        if(event.target.value === "1"){
            set_gizi_masalahPemberianASI(true);
            dispatch(AnsGiziChange('MASALAH_PEMBERIAN_ASI', true));
        }
        else{
            set_gizi_masalahPemberianASI(false);
            dispatch(AnsGiziChange('MASALAH_PEMBERIAN_ASI', false));
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
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
                            <FontAwesomeIcon icon={faCircle} style={{ color: '#41E8B3' }} />
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-center font-weight-bold">Status Gizi</h3>
                        <hr
                        style={{
                            color: "#41E8B3",
                            backgroundColor: "#41E8B3",
                            height: 5
                        }}
                    />
                    </div>
                    <div style={{minHeight: "440px"}}>
                        <Row className="justify-content-center">
                            <Card style={outlineColor} className="text-center w-75 mt-3">
                                <CardBody>
                                    <CardTitle className="h5"><b>Tentukan! </b>Lingkar lengan atas(LiLA) untuk anak umur 6 bulan atau lebih</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col sm="12">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">
                                                    <Col sm={8} style={{left:"-17px"}}>LiLA &lt; 11,5 cm</Col>
                                                    <Input type="radio" name="gizi_lingkarLenganAtas" value="LiLA < 11,5 cm" onChange={handleAnswerLingkarLenganAtas} checked={gizi_lingkarLenganAtas === "LiLA < 11,5 cm"} required/>
                                                    <span style={{left:"70px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row className="limitCol "> 
                                        <Col sm="12">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">
                                                    <Col sm={10} style={{left:"-21px"}}>LiLA 11,5 cm -  &lt; 12,5 cm</Col>
                                                    <Input  type="radio" name="gizi_lingkarLenganAtas" value="LiLA < 11,5 cm - < 12,5 cm" onChange={handleAnswerLingkarLenganAtas} checked={gizi_lingkarLenganAtas === "LiLA < 11,5 cm - < 12,5 cm"}/>
                                                    <span style={{left:"70px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row className="limitCol "> 
                                        <Col sm="12">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">
                                                    <Col sm={8} style={{left:"-17px"}}>LiLA ≥ 12,5 cm</Col>
                                                    <Input  type="radio" name="gizi_lingkarLenganAtas" value="LiLA ≥ 12,5 cm" onChange={handleAnswerLingkarLenganAtas} checked={gizi_lingkarLenganAtas === "LiLA ≥ 12,5 cm"}/>
                                                    <span style={{left:"70px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" hidden={(ansGizi.gizi_BBmenurutPBAtauTB !== "BB/PB (TB) < -3 SD (Sangat Kurus)" && gizi_lingkarLenganAtas !== "LiLA < 11,5 cm") && (ansGizi.gizi_tandaBahayaUmum !== true && ansGizi.gizi_klasifikasiBerat !== true)}>
                                <CardBody>
                                    <CardTitle className="h5"><b>Nilai pemberian ASI pada umur &lt; 6 bulan!  </b>Apakah anak memiliki masalah pemberian ASI?</CardTitle>
                                    <Row className="limitCol">
                                        <Col sm="3">
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="gizi_masalahPemberianASI" value="1" onChange={handleAnswerMasalahPemberianASI} checked={gizi_masalahPemberianASI === true} disabled={(ansGizi.gizi_BBmenurutPBAtauTB !== "BB/PB (TB) < -3 SD (Sangat Kurus)" && gizi_lingkarLenganAtas !== "LiLA < 11,5 cm") && (ansGizi.gizi_tandaBahayaUmum !== true && ansGizi.gizi_klasifikasiBerat !== true)} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="gizi_masalahPemberianASI" value="2" onChange={handleAnswerMasalahPemberianASI} checked={gizi_masalahPemberianASI === false} /> 
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
                <Row className="justify-content-between px-5 py-3">
                    <Col sm="4">
                        <Link to="Gizi2" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Button type="submit" color="success" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                    </Col>
                </Row>
            </div>
        </Form>
    )
}

export default Gizi3;