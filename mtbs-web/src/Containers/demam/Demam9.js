import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

import { KlasifikasiDemamChange, AnsDemamChange, AnsGiziChange, compStatusChange } from '../../Actions';

import Classifier from '../../Classifier/Classifier';

import '../../Assets/style/style.css';

var outlineColor = {
    borderColor: '#46d0fe'
}

const Demam = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const ansDemam = useSelector(state => state.ansDemam);
    let [demam_hasilUjiTorniket, set_demam_hasilUjiTorniket] = useState(ansDemam.demam_hasilUjiTorniket);

    const flag = useSelector(state => state.flag);
    const ansTBU = useSelector(state => state.ansTBU);
    const ansBatuk = useSelector(state => state.ansBatuk);
    const ansDiare = useSelector(state => state.ansDiare);
    const ansTelinga = useSelector(state => state.ansTelinga);
    const ansGizi = useSelector(state => state.ansGizi);
    const ansAnemia = useSelector(state => state.ansGizi);
    const ansHIV = useSelector(state => state.ansHIV);

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`/Demam`, {
            ansDemam: ansDemam
        })
        .then(res => {
            dispatch(KlasifikasiDemamChange('DEMAM_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiDemamChange('DEMAM_STATUS', res.data.statusKlasifikasi));
            if(res.data.statusKlasifikasi === "danger" || res.data.statusKlasifikasi === "warning"){
                dispatch(AnsGiziChange('GIZI_KLASIFIKASI_BERAT', true || ansGizi.gizi_klasifikasiBerat));
            }
        })
        .catch(err => {
            console.log(err);
        });
        Classifier(
            "demam",
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
        history.push("TelingaYaTidak");
        dispatch(compStatusChange('DEMAM'));
    }

    const handleAnswer1 = event => {
        if (event.target.value === "1") {
            set_demam_hasilUjiTorniket(true);
            dispatch(AnsDemamChange('UJI_TORNIKET', true));
        } else {
            set_demam_hasilUjiTorniket(false);
            dispatch(AnsDemamChange('UJI_TORNIKET', false));
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
                            <FontAwesomeIcon icon={faCircle} style={{ color: '#46d0fe' }} />
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-center font-weight-bold">Demam sudah 2-7 hari</h3>
                        <hr
                            style={{
                                color: "#46d0fe",
                                backgroundColor: "#46d0fe",
                                height: 5
                            }}
                        />
                        {/* <p className="text-center"><b>Jika demam 2 hari sampai dengan 7 hari, tanya dan periksa</b></p> */}
                    </div>
                    <div style={{ minHeight: "475px" }}>
                        <Row className="justify-content-around">
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5">Jika petekie sedikit DAN tidak ada tanda lain dari DBD, lakukan uji torniket, jika mungkin</CardTitle>
                                    <hr
                                        style={{
                                            color: "#46d0fe",
                                            backgroundColor: "#46d0fe",
                                            height: 1
                                        }}
                                    />
                                    <h5>Hasil Uji Torniket</h5>
                                    <Row className="limitCol ">
                                        <Col sm="3">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">
                                                <Label className="rdoBtn">Positif
                                                <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={demam_hasilUjiTorniket === true} required />
                                                    <span style={{ left: "6px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Negatif
                                                <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={demam_hasilUjiTorniket === false} />
                                                    <span style={{ left: "0px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5">Jika, petekie sedikit TANPA tanda lain dari DBD DAN uji torniket tidak dapat
                                    dilakukan, klasifikasikan sebagai DBD</CardTitle>
                                </CardBody>
                            </Card>
                        </Row>
                    </div>
                </div>
                <Row className="justify-content-between px-5 py-0">
                    <Col sm="4">
                        <Link to="Demam8" style={{ textDecoration: "none" }}><Button style={{backgroundColor: '#fe8d3b', border: '0'}} block><FontAwesomeIcon icon={faChevronLeft} /> Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Button type="submit" style={{backgroundColor: '#46d0fe', border: '0'}} block >Selanjutnya <FontAwesomeIcon icon={faChevronRight} /></Button>
                    </Col>
                </Row>
            </div>
        </Form>
    )
}
export default Demam;