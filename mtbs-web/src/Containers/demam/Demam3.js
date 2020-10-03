import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
//import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { AnsDemamChange } from '../../Actions';

import Classifier from '../../Classifier/Classifier';

import '../../Assets/style/style.css';

var outlineColor = {
    borderColor: '#46d0fe'
}

const Demam = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ansDemam = useSelector(state => state.ansDemam);
    let [demam_ruamKemerahan, set_demam_ruamKemerahan] = useState(ansDemam.demam_ruamKemerahan);

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
        if(ansDemam.demam_isCampak3Bulan === true){
            history.push("Demam5");
        }
        else{
            if(ansDemam.demam_berapaLama >= 2 && ansDemam.demam_berapaLama <=7){
                history.push("Demam6");
            }
            else{
                history.push("TelingaYaTidak");
            }
        }
        
    }

    const handleAnswer1 = event => {
        if (event.target.value === "1") {
            set_demam_ruamKemerahan(true);
            dispatch(AnsDemamChange('RUAM_KEMERAHAN', true));
        } else if (event.target.value === "2") {
            set_demam_ruamKemerahan(false);
            dispatch(AnsDemamChange('RUAM_KEMERAHAN', false));
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
                            <FontAwesomeIcon icon={faCircle} style={{ color: '#46d0fe' }} />
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-center font-weight-bold">Demam</h3>
                        <hr
                            style={{
                                color: "#46d0fe",
                                backgroundColor: "#46d0fe",
                                height: 5
                            }}
                        />
                        {/* <p className="text-center"><b>Jika Daerah Non Endemis</b>, tanyakan riwayat bepergian ke daerah endemis
                        malaria dalam 2 minggu terakhir adn tentukan daerah endemis sesuai tempat yang dikunjungi</p> */}
                    </div>
                    <div style={{ minHeight: "475px" }}>
                        <Row className="justify-content-around">
                            <Card style={outlineColor} className="text-center w-75" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Lihat! </b>Adanya tanda-tanda Campak saat ini</CardTitle>
                                    <hr
                                        style={{
                                            color: "#46d0fe",
                                            backgroundColor: "#46d0fe",
                                            height: 1
                                        }}
                                    />
                                    <h6>Ruam kemerahan di kulit yang meyeluruh DAN
                                        anak mengalami batuk / pilek / mata merah</h6>
                                    <Row className="limitCol ">
                                        <Col sm="3">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={demam_ruamKemerahan === true} required />
                                                    <span style={{ left: "20px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">

                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={demam_ruamKemerahan === false} />
                                                    <span style={{ left: "0px" }} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    {/* <div>
                                        <h6>Ruam kemerahan di kulit yang meyeluruh</h6>
                                        <Row className="limitCol "> 
                                            <Col  sm="3">
                                            
                                            </Col>
                                            <Col sm="3">
                                                <FormGroup className="d-inline pr-2">  
                                                    <Label className="rdoBtn">Ya
                                                    <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={tbu_letargis === true} required/>
                                                    <span style={{left:"20px"}} className="checkmark"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col sm="1">
                                            
                                            </Col>
                                            <Col sm="3">
                                                <FormGroup className="d-inline">
                                                    <Label className="rdoBtn">Tidak
                                                    <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={tbu_letargis === false} /> 
                                                    <span style={{left:"0px"}} className="checkmark"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <hr
                                        style={{
                                            color: "#46d0fe",
                                            backgroundColor: "#46d0fe",
                                            height: 1
                                        }}
                                    />
                                    <div>
                                        <h6>Terdapat salah satu tanda berikut: batuk, pilek, mata merah</h6>
                                        <Row className="limitCol "> 
                                            <Col  sm="3">
                                            
                                            </Col>
                                            <Col sm="3">
                                                <FormGroup className="d-inline pr-2">  
                                                    <Label className="rdoBtn">Ya
                                                    <Input type="radio" name="radio2" value={1} onChange={handleAnswer2} checked={tbu_letargis === true} required/>
                                                    <span style={{left:"20px"}} className="checkmark"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col sm="1">
                                            
                                            </Col>
                                            <Col sm="3">
                                                <FormGroup className="d-inline">
                                                    <Label className="rdoBtn">Tidak
                                                    <Input type="radio" name="radio2" value={2} onChange={handleAnswer2} checked={tbu_letargis === false} /> 
                                                    <span style={{left:"0px"}} className="checkmark"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div> */}

                                </CardBody>
                            </Card>
                        </Row>
                    </div>
                </div>
                <Row className="justify-content-between px-5 py-0">
                    <Col sm="4">
                        <Link to="Demam2" style={{ textDecoration: "none" }}><Button style={{backgroundColor: '#fe8d3b', border: '0'}} block><FontAwesomeIcon icon={faChevronLeft} /> Sebelumnya</Button></Link>
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