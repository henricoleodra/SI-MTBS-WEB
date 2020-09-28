import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { KlasifikasiDemamChange, AnsDemamChange, AnsGiziChange } from '../../Actions';

import Classifier from '../../Classifier/Classifier';

import '../../Assets/style/style.css';

var outlineColor = {
    borderColor: '#41E8B3'
}

const Demam = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const ansDemam = useSelector(state => state.ansDemam);
    let [demam_isLukaMulut, set_demam_isLukaMulut] = useState(ansDemam.demam_isLukaMulut);
    let [demam_descLukaMulutLuas, set_demam_descLukaMulutLuas] = useState(ansDemam.demam_descLukaMulutLuas);
    let [demam_descLukaMulutDalam, set_demam_descLukaMulutDalam] = useState(ansDemam.demam_descLukaMulutDalam);
    let [demam_nanahDiMata, set_demam_nanahDiMata] = useState(ansDemam.demam_nanahDiMata);
    let [demam_korneaKeruh, set_demam_korneaKeruh] = useState(ansDemam.demam_korneaKeruh);

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
        if(ansDemam.demam_berapaLama >= 2 && ansDemam.demam_berapaLama <=7){
            history.push("Demam6");
        }
        else{
            history.push("TelingaYaTidak");
        }
    }

    const handleAnswer1 = event => {
        if (event.target.value === "1") {
            set_demam_isLukaMulut(true);
            dispatch(AnsDemamChange('LUKA_MULUT', true));
        } else if (event.target.value === "2") {
            set_demam_isLukaMulut(false);
            dispatch(AnsDemamChange('LUKA_MULUT', false));
        }
    }

    const handleAnswer2 = event => {
        if(event.target.checked){
            set_demam_descLukaMulutLuas(true);
            dispatch(AnsDemamChange('DECS_LUKA_MULUT_LUAS', true));
            console.log('mantap');
        }else{
            set_demam_descLukaMulutLuas(false);
            dispatch(AnsDemamChange('DECS_LUKA_MULUT_LUAS', false));
            console.log('mantap tidak banget');
        }
    }

    const handleAnswer3 = event => {
        if(event.target.checked){
            set_demam_descLukaMulutDalam(true);
            dispatch(AnsDemamChange('DECS_LUKA_MULUT_DALAM', true));
            console.log('mantap Dalam');
        }else{
            set_demam_descLukaMulutDalam(false);
            dispatch(AnsDemamChange('DECS_LUKA_MULUT_DALAM', false));
            console.log('mantap tidak banget Dalam');
        }

    }

    const handleAnswer4 = event => {
        if (event.target.value === "1") {
            set_demam_nanahDiMata(true);
            dispatch(AnsDemamChange('NANAH_DI_MATA', true));
        } else if (event.target.value === "2") {
            set_demam_nanahDiMata(false);
            dispatch(AnsDemamChange('NANAH_DI_MATA', false));
        }
    }

    const handleAnswer5 = event => {
        if (event.target.value === "1") {
            set_demam_korneaKeruh(true);
            dispatch(AnsDemamChange('KORNEA_KERUH', true));
        } else if (event.target.value === "2") {
            set_demam_korneaKeruh(false);
            dispatch(AnsDemamChange('KORNEA_KERUH', false));
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
                    </div>
                    <div className="mt-2">
                        <h3 className="text-center font-weight-bold">Campak dalam 3 Bulan Terakhir</h3>
                        <hr
                            style={{
                                color: "#41E8B3",
                                backgroundColor: "#41E8B3",
                                height: 5
                            }}
                        />
                        {/* <p className="text-center"><b>Jika anak sakit campak saat ini atau dalam 3 bulan terakhir</b></p> */}
                    </div>
                    <div style={{minHeight: "475px"}}>
                        <Row className="justify-content-around">
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Lihat! </b>Adanya luka di mulut</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={demam_isLukaMulut === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={demam_isLukaMulut === false} /> 
                                                <span style={{left:"5px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div>
                                        <h6 hidden={(demam_isLukaMulut === null || demam_isLukaMulut === false)}><b>Lihat dan Amati!</b> Apakah luka luas atau dalam ?(bisa dipilih keduanya)</h6>
                                        <Row className="limitCol "hidden={(demam_isLukaMulut === null || demam_isLukaMulut === false)}> 
                                            <Col  sm="3">
                                            
                                            </Col>
                                            <Col sm="3">
                                                <FormGroup className="d-inline pr-2">  
                                                    <Label style={{left:"14px"}} className="chckBtn">Dalam
                                                    <Input type="checkbox" name="checkBox1" disabled={(demam_isLukaMulut === null || demam_isLukaMulut === false)} /**value={1}**/ onChange={handleAnswer2} checked={demam_descLukaMulutLuas === true}/>
                                                    <span style={{left:"3px"}} className="checkmarkBox"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col sm="1">
                                            
                                            </Col>
                                            <Col sm="3">
                                                <FormGroup className="d-inline">
                                                    <Label style={{left:"-7px"}} className="chckBtn">Luas
                                                    <Input type="checkbox" name="checkBox1" disabled={(demam_isLukaMulut === null || demam_isLukaMulut === false)} /**  value={2}**/ onChange={handleAnswer3} checked={demam_descLukaMulutDalam === true} /> 
                                                    <span style={{left:"12px"}} className="checkmarkBox"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Lihat! </b>Adanya nanah di mata</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio3" value={1} onChange={handleAnswer4} checked={demam_nanahDiMata === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio3" value={2} onChange={handleAnswer4} checked={demam_nanahDiMata === false} /> 
                                                <span style={{left:"5px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Lihat! </b>Adanya kekeruhan di kornea</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio4" value={1} onChange={handleAnswer5} checked={demam_korneaKeruh === true}required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio4" value={2} onChange={handleAnswer5} checked={demam_korneaKeruh === false} /> 
                                                <span style={{left:"5px"}} className="checkmark"></span>
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
                        <Link to="Demam3" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Button type="submit" color="success" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                    </Col>
                </Row>
            </div>
        </Form>
    )
}
export default Demam;