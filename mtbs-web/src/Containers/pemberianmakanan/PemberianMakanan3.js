import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, InputGroup, InputGroupText, InputGroupAddon, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { KlasifikasiPemberianMakananChange, AnsPemberianMakananChange } from '../../Actions';

let outlineColor = {
    borderColor : '#75C9E6'
}

let bgColor ={
    backgroundColor : '#75C9E6',
    color: 'white'
}

const PemberianMakanan3 = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const ansPemberianMakanan = useSelector(state => state.ansPemberianMakanan);
    let[makanan_kurus_jumlah, set_makanan_kurus_jumlah] = useState(ansPemberianMakanan.makanan_kurus_jumlah);
    let[makanan_kurus_makananTersendiri, set_makanan_kurus_makananTersendiri] = useState(ansPemberianMakanan.makanan_kurus_makananTersendiri);
    let[makanan_kurus_keteranganCara, set_makanan_kurus_keteranganCara] = useState(ansPemberianMakanan.makanan_kurus_keteranganCara);
    
    const handleAnswer1 = event => {
        let tmp = Number(event.target.value);
        set_makanan_kurus_jumlah(tmp);
        dispatch(AnsPemberianMakananChange('KURUS_JUMLAH', tmp));
    }

    const handleAnswer2 = event =>{
        if(event.target.value === 1){
            set_makanan_kurus_makananTersendiri(true);
            dispatch(AnsPemberianMakananChange('TERSENDIRI', true));
        }else if(event.target.value === 2){
            set_makanan_kurus_makananTersendiri(false);
            dispatch(AnsPemberianMakananChange('TERSENDIRI', false));
        }
    }

    const handleAnswer3 = event => {
        let tmp = event.target.value;
        set_makanan_kurus_keteranganCara(tmp);
        dispatch(AnsPemberianMakananChange('KETERANGAN_CARA', tmp));
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(KlasifikasiPemberianMakananChange('PEMBERIANMAKANAN_KLASIFIKASI',""));
        dispatch(KlasifikasiPemberianMakananChange('PEMBERIANMAKANAN_STATUS',"info"));
        history.push("PemberianMakanan4");
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
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#75C9E6'}}/>
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
                    <p className="text-center">Jika anak <b>GIZI KURUS</b></p>
                </div>
                <div style={{minHeight: "475px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Berapa banyak makanan atau minuman yang diberikan pada anak?</CardTitle>
                                <div className="w-100 d-flex justify-content-center">
                                    <InputGroup className="w-50">
                                        <Input type="number" min="0" value={makanan_kurus_jumlah} onChange={handleAnswer1} required/>
                                        <InputGroupAddon addonType="append" >
                                            <InputGroupText style={bgColor}>Kali</InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>         
                                </div> 
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Apakah anak mendapat makanan tersendiri?</CardTitle>
                                <Row className="limitCol">
                                    <Col sm="3">
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Ya
                                            <Input type="radio" name="radio1" value={1} onChange={handleAnswer2} checked={makanan_kurus_makananTersendiri === true} required/>
                                            <span style={{left:"20px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Tidak
                                            <Input type="radio" name="radio1" value={2} onChange={handleAnswer2} checked={makanan_kurus_makananTersendiri === false} /> 
                                            <span style={{left:"0px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Siapa yang memberi makan dan bagaimana caranya?</CardTitle>
                                <FormGroup check className="d-inline pr-2">
                                    <Input type="textarea" value={makanan_kurus_keteranganCara} onChange={handleAnswer3} required/> 
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Row>
                </div>
            </div>
            <Row className="justify-content-between px-5 py-3">
                <Col sm="4">
                    <Link to="PemberianMakanan2" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    <Button color="success" type="submit" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default PemberianMakanan3;