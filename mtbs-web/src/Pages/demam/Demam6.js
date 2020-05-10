import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
    let [demam_isTinggiMenerus, set_demam_isTinggiMenerus] = useState(ansDemam.demam_isTinggiMenerus);
    let [demam_isNyeriUluOrGelisah, set_demam_isNyeriUluOrGelisah] = useState(ansDemam.demam_isNyeriUluOrGelisah);
    let [demam_isBadanDingin, set_demam_isBadanDingin] = useState(ansDemam.demam_isBadanDingin);

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`/Demam`, {
            ansDemam: ansDemam
        })
            .then(res => {
                dispatch(KlasifikasiDemamChange('DEMAM_KLASIFIKASI', res.data.hasilKlasifkasi));
                dispatch(KlasifikasiDemamChange('DEMAM_STATUS', res.data.statusKlasifikasi));
            })
            .catch(err => {
                console.log(err);
            });
        dispatch(KlasifikasiDemamChange('Demam_6', true));
        history.push("Demam7");
        dispatch(compStatusChange('TELINGA'));
    }
    const handleAnswer1 = event => {
        if (event.target.value == 1) {
            set_demam_isTinggiMenerus(true);
            dispatch(AnsDemamChange('TINGGI_MENERUS', true));
        } else {
            set_demam_isTinggiMenerus(false);
            dispatch(AnsDemamChange('TINGGI_MENERUS', false));
        }
    }

    // const handleAnswer2 = event =>{
    //     if(event.target.value == 1){
    //         set_demam_descLukaMulut(true);
    //         dispatch(AnsDemamChange('DECS_LUKA_MULUT', true));
    //     }else{
    //         set_demam_descLukaMulut(false);
    //         dispatch(AnsDemamChange('DECS_LUKA_MULUT', false));
    //     }
    // }

    const handleAnswer3 = event => {
        if (event.target.value == 1) {
            set_demam_isNyeriUluOrGelisah(true);
            dispatch(AnsDemamChange('NYERI_ULU_GELISAH', true));
        } else {
            set_demam_isNyeriUluOrGelisah(false);
            dispatch(AnsDemamChange('NYERI_ULU_GELISAH', false));
        }
    }

    const handleAnswer4 = event => {
        if (event.target.value == 1) {
            set_demam_isBadanDingin(true);
            dispatch(AnsDemamChange('BADAN_DINGIN', true));
        } else {
            set_demam_isBadanDingin(false);
            dispatch(AnsDemamChange('BADAN_DINGIN', false));
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
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
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
                    <div style={{ minHeight: "475px" }}>
                        <Row className="justify-content-around">
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Tanyakan! </b>Apakah demam mendadak tinggi dan terus menerus?</CardTitle>
                                    <Row className="limitCol ">
                                        <Col sm="3">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={demam_isTinggiMenerus === true} required />
                                                    <span style={{ left: "20px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={demam_isTinggiMenerus === false} />
                                                    <span style={{ left: "5px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Tanyakan! </b>Apakah nyeri ulu hati atau gelisah?</CardTitle>
                                    <Row className="limitCol ">
                                        <Col sm="3">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio3" value={1} onChange={handleAnswer3} checked={demam_isNyeriUluOrGelisah === true} required />
                                                    <span style={{ left: "20px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio2" value={2} onChange={handleAnswer1} checked={demam_isNyeriUluOrGelisah === false} />
                                                    <span style={{ left: "5px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Tanyakan! </b>Apakah badan anak dingin?</CardTitle>
                                    <Row className="limitCol ">
                                        <Col sm="3">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio4" value={1} onChange={handleAnswer4} checked={demam_isBadanDingin === true} required />
                                                    <span style={{ left: "20px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio4" value={2} onChange={handleAnswer4} checked={demam_isBadanDingin === false} />
                                                    <span style={{ left: "5px" }} className="checkmark"></span>
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
                        <Link to="Demam5" style={{ textDecoration: "none" }}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft} /> Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Button type="submit" color="success" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight} /></Button>
                    </Col>
                </Row>
            </div>
        </Form>
    )
}
export default Demam;