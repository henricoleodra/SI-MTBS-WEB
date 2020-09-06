import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, InputGroup, InputGroupAddon, InputGroupText, Row, Col} from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

// Actions
import { KlasifikasiBatukChange, AnsBatukChange, compStatusChange} from '../../Actions';

import '../../Assets/style/style.css';

let outlineColor = {
    borderColor : '#75C9E6'
}

let bgColor ={
    backgroundColor : '#75C9E6',
    color: 'white'
}

const Batuk2 = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const ansBatuk = useSelector(state => state.ansBatuk);
    let[bsb_wheezing, set_bsb_wheezing] = useState(ansBatuk.bsb_wheezing);
    let[bsb_saturasiOksigen, set_bsb_saturasiOksigen] = useState(ansBatuk.bsb_saturasiOksigen);

    const handleSubmit = event =>{
        event.preventDefault();
        axios.post(`/Batuk`, {
            ansBatuk : ansBatuk
        })
        .then(res => {
            dispatch(KlasifikasiBatukChange('BATUK_KLASIFIKASI', res.data.hasilKlasifkasi));
            dispatch(KlasifikasiBatukChange('BATUK_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err=>{
            console.log(err);
        });
        // dispatch(KlasifikasiBatukChange('BATUK_2', true));
        // dispatch(compStatusChange('DIARE'));
        history.push("DiareYaTidak"); 
    }

    const handleAnswer1 = event =>{
        if(event.target.value == 1){
            set_bsb_wheezing(true);
            dispatch(AnsBatukChange('WHEEZING', true));
        }else if(event.target.value == 2){
            set_bsb_wheezing(false);
            dispatch(AnsBatukChange('WHEEZING', false));
        }
    }

    const handleAnswer2 = event =>{
        set_bsb_saturasiOksigen(event.target.value);
        dispatch(AnsBatukChange('SATURASI_OKSIGEN', event.target.value));
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
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Batuk / Sukar Bernafas</h3>
                    <hr
                    style={{
                        color: "#75C9E6",
                        backgroundColor: "#75C9E6",
                        height: 5
                    }}
                    />
                </div>
                <div style={{minHeight: "455px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Ada wheezing</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline pr-2">  
                                        <Label className="rdoBtn">Ya
                                        <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={bsb_wheezing === true} required/>
                                        <span style={{left:"20px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                    <FormGroup className="d-inline">
                                        <Label className="rdoBtn">Tidak
                                        <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={bsb_wheezing === false} required/>
                                        <span style={{left:"0px"}} className="checkmark"></span>
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                </Row>     
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Saturasi oksigen</CardTitle>
                                <div className="w-100 d-flex justify-content-center">
                                    <InputGroup className="w-25">
                                        <Input type="number" min="0" value={bsb_saturasiOksigen} onChange={handleAnswer2}/>
                                        <InputGroupAddon addonType="append" >
                                            <InputGroupText style={bgColor}>%</InputGroupText>
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
                    <Link to="Batuk1" style={{textDecoration: "none"}}><Button block color="danger" ><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                   <Button type="submit" color="success" block>Pemeriksaan Diare <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Batuk2