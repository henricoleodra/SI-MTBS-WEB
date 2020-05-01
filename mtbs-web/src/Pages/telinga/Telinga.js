import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, InputGroup, InputGroupText, InputGroupAddon, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import '../../Assets/style/style.css';
// Actions
import { KlasifikasiTelingaChange, AnsTelingaChange, compStatusChange } from '../../Actions';

let outlineColor = {
    borderColor : '#41E8B3'
}

let bgColor ={
    backgroundColor : '#41E8B3',
    color: 'white'
}

const Telinga = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const ansTelinga = useSelector(state => state.ansTelinga);
    const klasifikasiTelinga = useSelector(state => state.klasifikasiTelinga);
    let[telinga_isNyeri, set_telinga_isNyeri] = useState(ansTelinga.telinga_isNyeri);
    let[telinga_isPenuh, set_telinga_isPenuh] = useState(ansTelinga.telinga_isPenuh);
    let[telinga_isNanah, set_telinga_isNanah] = useState(ansTelinga.telinga_isNanah);
    let[telinga_nanahLamaHari, set_telinga_nanahLamaHari] = useState(ansTelinga.telinga_nanahLamaHari);

    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(AnsTelingaChange('NYERI', telinga_isNyeri));
        dispatch(AnsTelingaChange('PENUH', telinga_isPenuh));
        dispatch(AnsTelingaChange('NANAH', telinga_isNanah));
        dispatch(AnsTelingaChange('NANAH_LAMA_HARI', telinga_nanahLamaHari));
        axios.post(`/Telinga/1`, {
            telinga_isNyeri: telinga_isNyeri,
            telinga_isPenuh: telinga_isPenuh,
            telinga_isNanah: telinga_isNanah,
            telinga_nanahLamaHari: telinga_nanahLamaHari
        })
        .then(res => {
            if(klasifikasiTelinga.telinga_status != null){
                if(res.data.statusKlasifikasi === "danger"){
                    dispatch(KlasifikasiTelingaChange('TELINGA_KLASIFIKASI', res.data.hasilKlasifkasi));
                    dispatch(KlasifikasiTelingaChange('TELINGA_STATUS', res.data.statusKlasifikasi));
                }
                else{
                    if(klasifikasiTelinga.telinga_status != "danger"){
                        if(res.data.statusKlasifikasi === "warning" ){
                            dispatch(KlasifikasiTelingaChange('TELINGA_KLASIFIKASI', res.data.hasilKlasifkasi));
                            dispatch(KlasifikasiTelingaChange('TELINGA_STATUS', res.data.statusKlasifikasi));
                        }
                    }
                }
            }
            else{
                dispatch(KlasifikasiTelingaChange('TELINGA_KLASIFIKASI', res.data.hasilKlasifkasi));
                dispatch(KlasifikasiTelingaChange('TELINGA_STATUS', res.data.statusKlasifikasi));
            }      
        })
        .catch(err=>{
            console.log(err);
        });
        history.push("Telinga2");
        
    }

    const handleAnswer1 = event =>{
        if(event.target.value == 1){
            set_telinga_isNyeri(true);
        }else{
            set_telinga_isNyeri(false);
        }
        console.log(telinga_isNyeri);
    }

    const handleAnswer2 = event =>{
        if(event.target.value == 1){
            set_telinga_isPenuh(true);
        }else{
            set_telinga_isPenuh(false);
        }
        console.log(telinga_isPenuh);
    }

    const handleAnswer3 = event =>{
        if(event.target.value == 1){
            set_telinga_isNanah(true);
        }else{
            set_telinga_isNanah(false);
        }
        console.log(telinga_isNanah);
    }

    const handleAnswer4 = event =>{

        if(event.target.value >= 14){
            set_telinga_isNanah(true);
        }else{
            set_telinga_isNanah(false);
        }
        console.log(telinga_nanahLamaHari);
    }

    return(
        <Form>
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
                        <h3 className="text-center font-weight-bold">Telinga</h3>
                        <hr
                        style={{
                            color: "#41E8B3",
                            backgroundColor: "#41E8B3",
                            height: 5
                        }}
                        />
                    </div>
                    <div style={{minHeight: "475px"}}>
                        <Row className="justify-content-center">
                            <Card style={outlineColor} className="text-center w-75">
                                <CardBody>
                                    <CardTitle className="h5"><b>Tanyakan! </b>Ada nyeri telinga</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={telinga_isNyeri === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={telinga_isNyeri === false}/> 
                                                <span style={{left:"0px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>    
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3">
                                <CardBody>
                                    <CardTitle className="h5"><b>Tanyakan! </b>Ada rasa penuh di telinga</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio2" value={1} onChange={handleAnswer2} checked={telinga_isPenuh === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio2" value={2} onChange={handleAnswer2} checked={telinga_isPenuh === false} /> 
                                                <span style={{left:"0px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>    
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3">
                                <CardBody>
                                    <CardTitle className="h5"><b>Tanyakan! </b>Ada cairan/nanah keluar dari telinga</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio3" value={1} onChange={handleAnswer3} checked={telinga_isNanah === true} required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio3" value={2} onChange={handleAnswer3} checked={telinga_isNanah === false} /> 
                                                <span style={{left:"0px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>    
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <h5>Jika ya, berapa lama?</h5>
                                    <div className="w-100 d-flex justify-content-center">
                                        <InputGroup className="w-50">
                                            <Input type="number" min="0"/>
                                            <InputGroupAddon addonType="append" >
                                                <InputGroupText type="number" min="0" value={telinga_nanahLamaHari} onChange={handleAnswer4} style={bgColor}>Hari</InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>         
                                    </div> 
                                </CardBody>
                            </Card>
                        </Row>
                    </div>
                </div>
                <Row className="justify-content-between px-5 py-0">
                    <Col sm="4">
                        <Link to="TelingaYaTidak" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Button type="submit" color="success" block>Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                    </Col>
                </Row>
            </div>
        </Form>
    );
}

export default Telinga;