import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { KlasifikasiDemamChange, AnsDemamChange } from '../../Actions';

import '../../Assets/style/style.css';

var outlineColor = {
    borderColor: '#41E8B3'
}

const Demam = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const ansDemam = useSelector(state => state.ansDemam);
    let [demam_isCampak3Bulan, set_demam_isCampak3Bulan] = useState(ansDemam.demam_isCampak3Bulan);
    let [demam_kudukKaku, set_demam_kudukKaku] = useState(ansDemam.demam_kudukKaku);
    let [demam_sebabLain, set_demam_sebabLain] = useState(ansDemam.demam_sebabLain);

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`/Demam`, {
            ansDemam: ansDemam
        })
            .then(res => {
                dispatch(KlasifikasiDemamChange('DEMAM_KLASIFIKASI', res.data.hasilKlasifikasi));
                dispatch(KlasifikasiDemamChange('DEMAM_STATUS', res.data.statusKlasifikasi));
            })
            .catch(err => {
                console.log(err);
            });
        history.push("Demam3");
    }

    const handleAnswer1 = event => {
        if (event.target.value === "1") {
            set_demam_isCampak3Bulan(true);
            dispatch(AnsDemamChange('CAMPAK_TIGA_BULAN', true));
        } else if (event.target.value === "2") {
            set_demam_isCampak3Bulan(false);
            dispatch(AnsDemamChange('CAMPAK_TIGA_BULAN', false));
        }
    }

    const handleAnswer2 = event => {
        if (event.target.value === "1") {
            set_demam_kudukKaku(true);
            dispatch(AnsDemamChange('KUDUK_KAKU', true));
        } else if (event.target.value === "2") {
            set_demam_kudukKaku(false);
            dispatch(AnsDemamChange('KUDUK_KAKU', false));
        }
    }

    const handleAnswer3 = event => {
        set_demam_sebabLain(event.target.value);
        dispatch(AnsDemamChange('SEBAB_LAIN', event.target.value));
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
                        malaria dalam 2 minggu terakhir adn tentukan daerah endemis sesuai tempat yang dikunjungi</p> */}
                    </div>
                    <div style={{ minHeight: "475px" }}>
                        <Row className="justify-content-around">
                            <Card style={outlineColor} className="text-center w-75 mt-3">
                                <CardBody>
                                    <CardTitle className="h5"><b>Tanyakan! </b>Apakah anak sakit campak dalam 3 bulan terakhir?</CardTitle>
                                    <Row className="limitCol ">
                                        <Col sm="3">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">
                                                <Label className="rdoBtn">Ya
                                            <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={demam_isCampak3Bulan === true} required />
                                                    <span style={{ left: "20px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                            <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={demam_isCampak3Bulan === false} />
                                                    <span style={{ left: "0px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                            <Card style={outlineColor} className="text-center w-75 mt-3">
                                <CardBody>
                                    <CardTitle className="h5"><b>Lihat dan Periksa! </b>Adanya kaku kuduk</CardTitle>
                                    <Row className="limitCol ">
                                        <Col sm="3">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">
                                                <Label className="rdoBtn">Ya
                                            <Input type="radio" name="radio2" value={1} onChange={handleAnswer2} checked={demam_kudukKaku === true} required />
                                                    <span style={{ left: "20px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio2" value={2} onChange={handleAnswer2} checked={demam_kudukKaku === false} />
                                                    <span style={{ left: "0px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                            <Card style={outlineColor} className="text-center w-75 mt-3">
                                <CardBody>
                                    <CardTitle className="h5"><b>Lihat! </b>Adanya penyebab lain dari demam</CardTitle>
                                    <FormGroup check className="d-inline pr-2">
                                        <Input type="textarea"  value={demam_sebabLain} onChange={handleAnswer3}/>
                                    </FormGroup>
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