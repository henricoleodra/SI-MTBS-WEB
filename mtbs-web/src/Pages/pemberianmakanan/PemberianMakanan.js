import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, InputGroup, InputGroupText, InputGroupAddon, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import '../../Assets/style/style.css';
import { useDispatch, useSelector } from 'react-redux';

// Action
import { KlasifikasiPemberianMakananChange, AnsPemberianMakananChange} from '../../Actions';

let outlineColor = {
    borderColor : '#75C9E6'
}

let bgColor ={
    backgroundColor : '#75C9E6',
    color: 'white'
}

const PemberianMakanan = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch();

    const ansPemberianMakanan = useSelector(state => state.ansPemberianMakanan);
    let[pemberianMakanan_ibuMenyusui, set_pemberianMakanan_ibuMenyusui] = useState(ansPemberianMakanan.ibuMenyusui);
    let[pemberianMakanan_jkIyaMenyusui, set_pemberianMakanan_jkIyaMenyusui] = useState(ansPemberianMakanan.jkIyaMenyusui);
    let[pemberianMakanan_menyusuiMalamHari, set_pemberianMakanan_menyusuiMalamHari] = useState(ansPemberianMakanan.menyusuiMalamHari);

    const handleAnswerIbuMenyusui = event =>{
        let tmp = event.target.value;
        set_pemberianMakanan_ibuMenyusui(tmp);
        dispatch(AnsPemberianMakananChange('DISUSUI', tmp));
    }

    const handleAnswerJkIyaMenyusui = event =>{
        let tmp = event.target.value;
        set_pemberianMakanan_jkIyaMenyusui(tmp);
        dispatch(AnsPemberianMakananChange('JUMLAH_DISUSUI', tmp));
    }

    const handleAnswerMenyusuiMalamHari = event =>{
        let tmp = event.target.value;
        set_pemberianMakanan_menyusuiMalamHari(tmp);
        dispatch(AnsPemberianMakananChange('MALAM', tmp));
    }

    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(KlasifikasiPemberianMakananChange('PEMBERIANMAKANAN_KLASIFIKASI', ""));
        dispatch(KlasifikasiPemberianMakananChange('PEMBERIANMAKANAN_STATUS', "info"));
        history.push("PemberianMakanan2");
    }

    return(
        <Form>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#75C9E6'}}/>
                    </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div>  
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Pemberian Makanan</h3>  
                    <hr
                    style={{
                        color: "#75C9E6",
                        backgroundColor: "#75C9E6",
                        height: 5
                    }}
                    />
                    <p className="text-center">Jika anak berumur kurang dari 2 tahun atau GIZI KURUS atau ANEMIA <b>DAN</b> anak tidak akan dirujuk segera</p>
                </div>
                <div style={{minHeight: "475px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75" >
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Apakah ibu menyusui anak?</CardTitle>
                                <div>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="pemberianMakanan_ibuMenyusui" value={'Ya'} onChange={handleAnswerIbuMenyusui} checked={pemberianMakanan_ibuMenyusui === 'Ya'} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="pemberianMakanan_ibuMenyusui" value={'Tidak'} onChange={handleAnswerIbuMenyusui} checked={pemberianMakanan_ibuMenyusui === 'Tidak'}/> 
                                                <span style={{left:"0px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>  
                                <hr
                                    style={{
                                        color: "#75C9E6",
                                        backgroundColor: "#75C9E6",
                                        height: 1
                                    }}
                                />
                                <h6 hidden={pemberianMakanan_ibuMenyusui =='Tidak' || pemberianMakanan_ibuMenyusui == null}>Jika ya, berapa kali sehari?</h6>
                                <div className="w-100 d-flex justify-content-center" hidden={pemberianMakanan_ibuMenyusui =='Tidak' || pemberianMakanan_ibuMenyusui == null}>
                                    <InputGroup className="w-25">
                                        <Input type="number" min="0" name="pemberianMakanan_jkIyaMenyusui" value={pemberianMakanan_jkIyaMenyusui} onChange={handleAnswerJkIyaMenyusui} required/>
                                        <InputGroupAddon addonType="append" >
                                            <InputGroupText style={bgColor}>Kali</InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>         
                                </div>
                                <h6>Apakah menyusui juga di malam hari? </h6>
                                <div>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Ya
                                            <Input type="radio" name="pemberianMakanan_menyusuiMalamHari" value={'Ya'} onChange={handleAnswerMenyusuiMalamHari} checked={pemberianMakanan_menyusuiMalamHari === 'Ya'} required/>
                                            <span style={{left:"20px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Tidak
                                            <Input type="radio" name="pemberianMakanan_menyusuiMalamHari" value={'Tidak'} onChange={handleAnswerMenyusuiMalamHari} checked={pemberianMakanan_menyusuiMalamHari === 'Tidak'} />
                                            <span style={{left:"0px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                </div>

                            </CardBody>
                        </Card>
                    </Row>
                </div>
            </div>
            <Row className="justify-content-between px-5 py-3">
                <Col sm="4">
                    <Link to="KeluhanLain" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Pemeriksaan Keluhan Lain</Button></Link>
                </Col>
                <Col sm="4">
                    <Link to="PemberianMakanan2" style={{textDecoration: "none"}}><Button color="success" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default PemberianMakanan;