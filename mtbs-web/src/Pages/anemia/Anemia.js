import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

import '../../Assets/style/style.css';

// ACTIONS 
import { KlasifikasiAnemiaChange, AnsAnemiaChange } from '../../Actions';

let outlineColor = {
    borderColor : '#41E8B3'
}

const Anemia = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const ansAnemia = useSelector(state => state.ansAnemia);
    let [anemia_isPucat, set_anemia_isPucat] = useState(ansAnemia.anemia_isPucat);

    const handlePucat = event =>{
        set_anemia_isPucat(event.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(AnsAnemiaChange('PUCAT', anemia_isPucat));
        axios.post(`/Anemia`, {
            anemia_isPucat : anemia_isPucat
        })
        .then(res => {
            dispatch(KlasifikasiAnemiaChange('ANEMIA_KLASIFIKASI', res.data.hasilKlasifkasi));
            dispatch(KlasifikasiAnemiaChange('ANEMIA_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err=>{
            console.log(err);
        });
        history.push("HIV1");
    }

    return(
        <Form onSubmit={handleSubmit}>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
                    </div> 
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Anemia</h3>
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
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Lihat! </b>Ada kepucatan telapak tangan</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Sangat pucat
                                            <Input type="radio" name="radio1" value={'sangatPucat'} onChange={handlePucat} checked={anemia_isPucat === 'sangatPucat'} required/>
                                            <span style={{left:"0px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Agak pucat
                                            <Input type="radio" name="radio1" value={'agakPucat'} onChange={handlePucat} checked={anemia_isPucat === 'agakPucat'}/>
                                            <span style={{left:"7px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col sm="4">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Normal
                                            <Input type="radio" name="radio1" value={'normal'} onChange={handlePucat} checked={anemia_isPucat === 'normal'}/>
                                            <span style={{left:"25px"}} className="checkmark"></span>
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
                    <Link to="Gizi1" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/>Pemeriksaan Gizi</Button></Link>
                </Col>
                <Col sm="4">
                    <Button color="success" type="submit" block>Pemeriksaan HIV <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Anemia;