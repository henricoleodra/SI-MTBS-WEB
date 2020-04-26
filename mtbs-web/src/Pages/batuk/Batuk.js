import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, InputGroup, InputGroupText, InputGroupAddon, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// Actions
import { KlasifikasiBatukChange, AnsBatukChange } from '../../Actions';

import '../../Assets/style/style.css';

let outlineColor = {
    borderColor : '#41E8B3'
}

let bgColor ={
    backgroundColor : '#41E8B3',
    color: 'white'
}

const Batuk = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ansBatuk = useSelector(state => state.ansBatuk);
    const klasifikasiBatuk = useSelector(state => state.klasifikasiBatuk);
    const dataAnak = useSelector(state => state.dataAnak);
    let[bsb_lamaHari, set_bsb_lamaHari] = useState(ansBatuk.bsb_lamaHari);
    let[bsb_jumlahNafas, set_bsb_jumlahNafas] = useState(ansBatuk.bsb_jumlahNafas);
    let[bsb_nafasCepat, set_bsb_nafasCepat] = useState(ansBatuk.bsb_nafasCepat);
    let[bsb_tarikanDindingDada, set_bsb_tarikanDindingDada] = useState(ansBatuk.bsb_tarikanDindingDada);

    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(AnsBatukChange('LAMA_HARI', bsb_lamaHari));
        dispatch(AnsBatukChange('JUMLAH_NAFAS', bsb_jumlahNafas));
        dispatch(AnsBatukChange('NAFAS_CEPAT', bsb_nafasCepat));
        dispatch(AnsBatukChange('TARIKAN_DINDING_DADA', bsb_tarikanDindingDada));
        console.log(bsb_lamaHari);
        console.log(bsb_jumlahNafas);
        console.log(bsb_nafasCepat);
        console.log(bsb_tarikanDindingDada);
        axios.post(`/Batuk/1`, {
            bsb_lamaHari: bsb_lamaHari,
            bsb_jumlahNafas: bsb_jumlahNafas,
            bsb_nafasCepat: bsb_nafasCepat,
            bsb_tarikanDindingDada: bsb_tarikanDindingDada
        })
        .then(res => {
            if(klasifikasiBatuk.bsb_status != null){
                if(res.data.statusKlasifikasi === "danger"){
                    dispatch(KlasifikasiBatukChange('BATUK_KLASIFIKASI', res.data.hasilKlasifkasi));
                    dispatch(KlasifikasiBatukChange('BATUK_STATUS', res.data.statusKlasifikasi));
                }
                else{
                    if(klasifikasiBatuk.bsb_status != "danger"){
                        if(res.data.statusKlasifikasi === "warning" ){
                            dispatch(KlasifikasiBatukChange('BATUK_KLASIFIKASI', res.data.hasilKlasifkasi));
                            dispatch(KlasifikasiBatukChange('BATUK_STATUS', res.data.statusKlasifikasi));
                        }
                    }
                }
            }
            else{
                dispatch(KlasifikasiBatukChange('BATUK_KLASIFIKASI', res.data.hasilKlasifkasi));
                dispatch(KlasifikasiBatukChange('BATUK_STATUS', res.data.statusKlasifikasi));
            }      
        })
        .catch(err=>{
            console.log(err);
        });
        history.push("Batuk2");
        
    }

    const handleAnswer1 = event =>{
        set_bsb_lamaHari(event.target.value);
    }

    const handleAnswer2 = event =>{
        let tmpUmurHari = dataAnak.umurAnak;
        let umur = Math.floor(tmpUmurHari/30);
        set_bsb_jumlahNafas(event.target.value);
        if(umur<12){
            if(event.target.value>50){
                set_bsb_nafasCepat(true);
            }
            else{
                set_bsb_nafasCepat(false);   
            }
        }
        else{
            if(event.target.value>40){
                set_bsb_nafasCepat(true);
            }
            else{
                set_bsb_nafasCepat(false);   
            }
        }
    }

    const handleAnswer3 = event =>{
        if(event.target.value == 1){
            set_bsb_tarikanDindingDada(true);
        }else if(event.target.value == 2){
            set_bsb_tarikanDindingDada(false);
        }
        console.log(bsb_tarikanDindingDada);
    }

    return(
        <Form id="formBatuk1" className="" onSubmit={handleSubmit}>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
                    </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div> 
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Batuk / Sukar Bernafas</h3>
                    <hr
                    style={{
                        color: "#41E8B3",
                        backgroundColor: "#41E8B3",
                        height: 5
                    }}
                    />
                </div>
                <div style={{minHeight: "455px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75" >
                            <CardBody className="d-flex justify-content-center flex-column">
                                <CardTitle className="h5"><b>Tanyakan! </b>Sudah berapa lama?</CardTitle>
                                    <div className="w-100 d-flex justify-content-center">
                                        <InputGroup className="w-25">
                                            <Input type="number" min="0" value={bsb_lamaHari} onChange={handleAnswer1}/>
                                            <InputGroupAddon addonType="append" >
                                                <InputGroupText style={bgColor}>Hari</InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>         
                                    </div>                 
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Hitung nafas dalam 1 menit !</CardTitle>
                                <div className="w-100 d-flex justify-content-center">
                                        <InputGroup className="w-50">
                                            <Input type="number" min="0" value={bsb_jumlahNafas} onChange={handleAnswer2}/>
                                            <InputGroupAddon addonType="append" >
                                                <InputGroupText style={bgColor}>Kali/Menit</InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>         
                                </div>     
                                {/* <h5>Nafas cepat?</h5>
                                <FormGroup check className="d-inline pr-2">
                                    <Label>
                                        <Input type="radio" name="radio1"/>{''}
                                        Ya
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="d-inline">
                                    <Label>
                                        <Input type="radio" name="radio1"/>{''}
                                        Tidak
                                    </Label>
                                </FormGroup> */}
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Ada tarikan dinding dada dalam</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline pr-2">  
                                        <Label className="rdoBtn">Ya
                                        <Input type="radio" name="radio1" value={1} onChange={handleAnswer3} checked={bsb_tarikanDindingDada === true} required/>
                                        <span style={{left:"20px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline">
                                        <Label className="rdoBtn">Tidak
                                        <Input type="radio" name="radio1" value={2} onChange={handleAnswer3} checked={bsb_tarikanDindingDada === false} required/>
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
            <Row className="justify-content-between px-5 py-0">
                <Col sm="4">
                    <Link to="BatukYaTidak" style={{textDecoration: "none"}}><Button style={{width: "250px", height : "60px"}} color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    {/* <Link to="Batuk2" style={{textDecoration: "none"}}><Button style={{width: "250px", height : "60px"}} color="success" block>Berikutnya  <FontAwesomeIcon icon={faChevronRight}/></Button></Link> */}
                    <Button type="submit" color="success" block>Berikutnya  <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Batuk