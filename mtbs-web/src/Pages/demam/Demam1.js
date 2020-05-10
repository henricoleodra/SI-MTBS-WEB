import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, InputGroup, InputGroupText, InputGroupAddon, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

// Actions
import { KlasifikasiDemamChange, AnsDemamChange } from '../../Actions';

import '../../Assets/style/style.css';

var outlineColor = {
    borderColor: '#41E8B3'
}

let bgColor = {
    backgroundColor: '#41E8B3',
    color: 'white'
}

const Demam = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ansDemam = useSelector(state => state.ansDemam);
    // const klasifikasiDemam = useSelector(state => state.klasifikasiDemam);
    let [demam_berapaLama, set_demam_berapaLama] = useState(ansDemam.demam_berapaLama);
    let [demam_isDemamSetiapHari, set_demam_isDemamSetiapHari] = useState(ansDemam.demam_isDemamSetiapHari);
    let [demam_pernahMalaria, set_demam_pernahMalaria] = useState(ansDemam.demam_pernahMalaria);

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`/Demam`, {
            ansDemam: ansDemam
        })
            .then(res => {
                dispatchEvent(KlasifikasiDemamChange('DEMAM_KLASIFIKASI', res.data.hasilKlasifikasi));
                dispatchEvent(KlasifikasiDemamChange('DEMAM_STATUS', res.data.statusKlasifikasi));
            })
            .catch(err => {
                console.log(err);
            });
        history.push("Demam2");
    }

    const handleAnswer1 = event =>{
        set_demam_berapaLama(event.target.value);
        dispatch(AnsDemamChange('BERAPA_LAMA', event.target.value));
    }

    const handleAnswer2 = event => {
        if (event.target.value == 1) {
            set_demam_isDemamSetiapHari(true);
            dispatch(AnsDemamChange('DEMAM_SETIAP_HARI', true));
        } else if (event.target.value == 2) {
            set_demam_isDemamSetiapHari(false);
            dispatch(AnsDemamChange('DEMAM_SETIAP_HARI', false));
        }
    }

    const handleAnswer3 = event => {
        if (event.target.value == 1) {
            set_demam_pernahMalaria(true);
            dispatch(AnsDemamChange('MALARIA', true));
        } else if (event.target.value == 2) {
            set_demam_pernahMalaria(false);
            dispatch(AnsDemamChange('MALARIA', false));
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className="w-100">
                <div className="col-12">
                    <div className="d-flex justify-content-center mt-3">
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
                    </div>
                    <div className="mt-2">
                        <h3 className="text-center font-weight-bold">Demam</h3>
                        <hr
                            style={{
                                color: "#41E8B3",
                                backgroundColor: "#41E8B3",
                                height: 5
                            }}
                        />
                        {/* <p className="text-center"><b>Jika Daerah Non Endemis</b>, tanyakan riwayat bepergian ke daerah endemis
                        malaria dalam 2 minggu terakhir dan tentukan daerah endemis sesuai tempat yang dikunjungi</p> */}
                    </div>
                    <div style={{ minHeight: "475px" }}>
                        <Row className="justify-content-around">
                            <Card style={outlineColor} className="text-center w-75 mt-3">
                                <CardBody>
                                    <CardTitle className="h5"><b>Tanyakan! </b>Sudah berapa lama?</CardTitle>
                                    <div className="w-100 d-flex justify-content-center">
                                        <InputGroup className="w-25">
                                            <Input type="number" min="0" value={demam_berapaLama} onChange={handleAnswer1} />
                                            <InputGroupAddon addonType="append" >
                                                <InputGroupText style={bgColor}>Hari</InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card style={outlineColor} className="text-center w-75 mt-3">
                                <CardBody>
                                    <CardTitle className="h5"><b>Tanyakan! </b>Jika lebih dari 7 hari, apakah demam terjadi
                                    setiap hari?</CardTitle>
                                    <Row className="limitCol ">
                                        <Col sm="3">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio1" value={1} onChange={handleAnswer2} checked={demam_isDemamSetiapHari === true} required />
                                                    <span style={{ left: "20px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio1" value={2} onChange={handleAnswer2} checked={demam_isDemamSetiapHari === false} />
                                                    <span style={{ left: "0px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                            <Card style={outlineColor} className="text-center w-75 mt-3">
                                <CardBody>
                                    <CardTitle className="h5"><b>Tanyakan! </b>Apakah pernah sakit malaria atau minum obat malaria?</CardTitle>
                                    <Row className="limitCol ">
                                        <Col sm="3">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio2" value={1} onChange={handleAnswer3} checked={demam_pernahMalaria === true} required />
                                                    <span style={{ left: "20px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio2" value={2} onChange={handleAnswer3} checked={demam_pernahMalaria === false} />
                                                    <span style={{ left: "0px" }} className="checkmark"></span>
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
                        <Link to="Demam1" style={{ textDecoration: "none" }}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft} /> Sebelumnya</Button></Link>
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