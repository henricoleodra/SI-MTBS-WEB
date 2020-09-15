import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, InputGroup, InputGroupText, InputGroupAddon, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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
    let[makanan_lainnya, set_makanan_lainnya] = useState(ansPemberianMakanan.lainnya);
    let[makanan_lainnya_keterangan, set_makanan_lainnya_keterangan] = useState(ansPemberianMakanan.lainnya_keterangan);
    let[makanan_lainnya_jumlah, set_makanan_lainnya_jumlah] = useState(ansPemberianMakanan.lainnya_jumlah);
    let[makanan_lainnya_alat, set_makanan_lainnya_alat] = useState(ansPemberianMakanan.lainnya_alat);

    const handleAnswerLainnya = event =>{
        let tmp = event.target.value;
        set_makanan_lainnya(tmp);
        dispatch(AnsPemberianMakananChange('LAINNYA', tmp));
    }

    const handleAnswerLainnya_keterangan = event =>{
        let tmp = event.target.value;
        set_makanan_lainnya_keterangan(tmp);
        dispatch(AnsPemberianMakananChange('KETERANGAN_LAIN', tmp));
    }

    const handleAnswerLainnya_jumlah = event =>{
        let tmp = event.target.value;
        set_makanan_lainnya_jumlah(tmp);
        dispatch(AnsPemberianMakananChange('JUMLAH_LAIN', tmp));
    }

    const handleAnswerLainnya_alat = event =>{
        let tmp = event.target.value;
        set_makanan_lainnya_alat(tmp);
        dispatch(AnsPemberianMakananChange('ALAT_LAIN', tmp));
    }

    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(KlasifikasiPemberianMakananChange('PEMBERIANMAKANAN_KLASIFIKASI', ""));
        dispatch(KlasifikasiPemberianMakananChange('PEMBERIANMAKANAN_STATUS', "info"));
        history.push("PemberianMakanan3");
    }

    return(
        <Form onSubmit={handleSubmit}>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#75C9E6'}}/>
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
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Apakah anak mendapat makanan atau minuman lain?</CardTitle>
                                <Row className="limitCol">
                                    <Col sm="3">
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Ya
                                            <Input type="radio" name="makanan_lainnya" value={'Ya'} onChange={handleAnswerLainnya} checked={makanan_lainnya === 'Ya'} required/>
                                            <span style={{left:"20px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Tidak
                                            <Input type="radio" name="makanan_lainnya" value={'Tidak'} onChange={handleAnswerLainnya} checked={makanan_lainnya === "Tidak"}  /> 
                                            <span style={{left:"0px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <hr hidden={makanan_lainnya == null || makanan_lainnya === "Tidak"}
                                    style={{
                                        color: "#75C9E6",
                                        backgroundColor: "#75C9E6",
                                        height: 1
                                    }}
                                />
                                <div className="d-flex flex-column justify-content-around pt-2"  hidden={makanan_lainnya == null || makanan_lainnya ==="Tidak"}>
                                    <div className="d-flex flex-row">
                                        <div className="d-line">
                                            <h6>Jika Ya, makanan atau minuman apa?</h6>
                                            <FormGroup check className="d-inline pr-2">
                                                <Input type="textarea" name="makanan_lainnya_keterangan" value={makanan_lainnya_keterangan} onChange={handleAnswerLainnya_keterangan} required={makanan_lainnya === "Ya"}/>
                                            </FormGroup>
                                        </div>
                                        <div className="d-line ml-4"> 
                                            <h6>Berapa kali sehari?</h6>          
                                            <div className="w-100 d-flex justify-content-center">  
                                                <InputGroup className="w-100 mt-4">
                                                    <Input type="number" min="0" name="makanan_lainnya_jumlah" value={makanan_lainnya_jumlah} onChange={handleAnswerLainnya_jumlah} required={makanan_lainnya === "Ya"}/>
                                                    <InputGroupAddon addonType="append" >
                                                        <InputGroupText style={bgColor}>Hari</InputGroupText>
                                                    </InputGroupAddon>
                                                </InputGroup>         
                                            </div> 
                                        </div>                            
                                    </div>
                                    <div className="flex-row ml-4 mb-2">
                                        <hr
                                            style={{
                                                color: "#75C9E6",
                                                backgroundColor: "#75C9E6",
                                                height: "100%",
                                                width: 2
                                            }}
                                        />
                                    </div>
                                    {/* <div className="d-line ml-4"> */}
                                        <h6 className="mt-0">Alat apa yang digunakan untuk memberi minum anak?</h6>
                                        <FormGroup check className="d-inline pr-2">
                                            <Input type="textarea" name="makanan_lainnya_alat" value={makanan_lainnya_alat} onChange={handleAnswerLainnya_alat} required={makanan_lainnya === "Ya"}/>
                                        </FormGroup>
                                    {/* </div> */}
                                </div>
                            </CardBody>
                        </Card>
                    </Row>
                </div>
            </div>
            <Row className="justify-content-between px-5 py-3">
                <Col sm="4">
                    <Link to="PemberianMakanan1" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    <Button color="success" type="submit" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default PemberianMakanan;