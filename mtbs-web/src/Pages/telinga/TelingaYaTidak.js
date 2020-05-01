import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, InputGroup, InputGroupText, InputGroupAddon, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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

const Telinga = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ansTelinga = useSelector(state => state.ansTelinga);
    let [telinga, setTelinga] = useState(ansTelinga.telinga);

    const handleTelinga = event =>{
        if(event.target.value == 1){
            setTelinga(true);
        }else{
            setTelinga(false);
        }         
    }


const handleSubmit = event =>{
    event.preventDefault();
    if(telinga == true){
        if(ansTelinga.telinga === false){
            dispatch(KlasifikasiTelingaChange('TELINGA_KLASIFIKASI', ""));
            dispatch(KlasifikasiTelingaChange('TELINGA_STATUS', null));
        }
        dispatch(AnsTelingaChange('TELINGA', telinga));
        history.push("Telinga1");
    }
    else{
        dispatch(AnsTelingaChange('TELINGA', telinga));
        dispatch(KlasifikasiTelingaChange('TELINGA_KLASIFIKASI', ""));
        dispatch(KlasifikasiTelingaChange('TELINGA_STATUS', "success"));
        dispatch(compStatusChange('GIZI'));
        history.push("Gizi1");
    }
}


    return(
        <Form>
            <div className="w-100">
                <div className="col-12">
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
                <div style={{minHeight: "510px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75" >
                            <CardBody className="d-flex justify-content-center flex-column">
                                <CardTitle className="h5"><b>Tanyakan! </b>Apakah anak mempunyai masalah telinga?</CardTitle>
                                    <Row className="limitCol"> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio1" value={1} onChange={handleTelinga} checked={telinga === true } required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio1" value={2} onChange={handleTelinga} checked={telinga === false}/>
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
                    <Link to="Demam1" style={{textDecoration: "none"}}><Button block color="danger"><FontAwesomeIcon icon={faChevronLeft}/> Pemeriksaan Demam</Button></Link>
                </Col>
                <Col sm="4">
                    <Button type="submit" block color="success">Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Telinga