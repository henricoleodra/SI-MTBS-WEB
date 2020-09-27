
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, InputGroup, InputGroupText, InputGroupAddon, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// Actions
import { KlasifikasiDiareChange, AnsDiareChange, FlagChange } from '../../Actions';

import Classifier from '../../Classifier/Classifier';

import '../../Assets/style/style.css';

let outlineColor = {
    borderColor : '#75C9E6'
}

let bgColor ={
    backgroundColor : '#75C9E6',
    color: 'white'
}

const Diare = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ansDiare = useSelector(state => state.ansDiare);
    let[diare_berapaLama, set_diare_berapaLama] = useState(ansDiare.diare_berapaLama);
    let[diare_tinjaBerdarah, set_diare_tinjaBerdarah] = useState(ansDiare.diare_tinjaBerdarah);

    const flag = useSelector(state => state.flag);
    const ansTBU = useSelector(state => state.ansTBU);
    const ansBatuk = useSelector(state => state.ansBatuk);
    const ansDemam = useSelector(state => state.ansDemam);
    const ansTelinga = useSelector(state => state.ansTelinga);
    const ansGizi = useSelector(state => state.ansGizi);
    const ansAnemia = useSelector(state => state.ansGizi);
    const ansHIV = useSelector(state => state.ansHIV);

    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(FlagChange('DIARE'));
        axios.post(`/Diare`, {
            ansDiare: ansDiare
        })
        .then(res => {
            dispatch(KlasifikasiDiareChange('DIARE_KLASIFIKASI', res.data.hasilKlasifikasi));
            dispatch(KlasifikasiDiareChange('DIARE_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err => {
            console.log(err);
        });
        Classifier(
            "diare",
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
        history.push("Diare2");
    }

    const handleAnswer1 = event =>{
        let tmp = Number(event.target.value);
        set_diare_berapaLama(tmp);
        dispatch(AnsDiareChange('BERAPA_LAMA', tmp));
    }

    const handleAnswer2 = event =>{
        if(event.target.value === "1"){
            set_diare_tinjaBerdarah(true);
            dispatch(AnsDiareChange('TINJA_BERDARAH', true));
        }else{
            set_diare_tinjaBerdarah(false);
            dispatch(AnsDiareChange('TINJA_BERDARAH', false));
        }
    }

    return(
        <Form id="formDiare1" className="" onSubmit={handleSubmit}>
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
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Diare</h3>
                    <hr
                    style={{
                        color: "#75C9E6",
                        backgroundColor: "#75C9E6",
                        height: 5
                    }}
                    />
                </div>
                <div style={{minHeight: "475px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75" >
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan dan periksa! </b>Sudah berapa lama?</CardTitle>
                                <div className="w-100 d-flex justify-content-center">
                                    <InputGroup className="w-50">
                                        <Input type="number" min="0" value={diare_berapaLama} onChange={handleAnswer1} required/>
                                        <InputGroupAddon addonType="append" >
                                            <InputGroupText style={bgColor}>Hari</InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>         
                                </div> 
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Ada darah dalam tinja</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline pr-2">  
                                        <Label className="rdoBtn">Ya
                                        <Input type="radio" name="radio1" value={1} onChange={handleAnswer2} checked={diare_tinjaBerdarah === true} required/>
                                        <span style={{left:"20px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline">
                                        <Label className="rdoBtn">Tidak
                                        <Input type="radio" name="radio1" value={2} onChange={handleAnswer2} checked={diare_tinjaBerdarah === false}/> 
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
                    <Link to="DiareYaTidak" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    <Button type="submit" color="success" block>Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
            </div>
        </Form>
    );
}

export default Diare