import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import '../../Assets/style/style.css';

// Actions
import { KlasifikasiVitamin, AnsVitaminChange, compStatusChange } from '../../Actions';

var outlineColor = {
    borderColor : '#75C9E6'
}

const Vitamina = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ansVitaminA = useSelector(state => state.ansVitaminA);
    let[vit_dibutuhkanA, set_vit_dibutuhkanA] = useState(ansVitaminA.vit_dibutuhkanA);
    
    const handleSubmit = event =>{
        event.preventDefault();
        history.push("KeluhanLain"); 
    }

    const handleAnswer1 = event =>{
        if(event.target.value == 1){
            set_vit_dibutuhkanA(true);
            dispatch(AnsVitaminChange('SUPLEMEN_A', true));
        }else if(event.target.value == 2){
            set_vit_dibutuhkanA(false);
            dispatch(AnsVitaminChange('SUPLEMEN_A', false));
        }
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
                    <h3 className="text-center font-weight-bold">Pemberian Vitamin A</h3>
                    <hr
                    style={{
                        color: "#41E8B3",
                        backgroundColor: "#41E8B3",
                        height: 5
                    }}
                    />
                </div>
                <div style={{minHeight: "450px"}}>
                    <Row className="justify-content-center">
                    <Card style={outlineColor} className="text-center w-75">
                            <CardBody className="d-flex justify-content-center flex-column">
                                <CardTitle className="h5">Dibutuhkan suplemen vitamin A</CardTitle>
                                
                                <Row className="limitCol "> 
                                    <Col  sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Ya
                                            <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={vit_dibutuhkanA === true} required/>
                                            <span style={{left:"20px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Tidak
                                            <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={vit_dibutuhkanA === false}/>
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
                    <Link to="TandaBahayaUmum1" style={{textDecoration: "none"}}><Button block style={{width: "250px", height : "60px"}} color="danger"><FontAwesomeIcon icon={faChevronLeft}/>Pemeriksaan HIV</Button></Link>
                </Col>
                <Col sm="4">
                    <Button type="submit" block style={{width: "250px", height : "60px"}} color="success">Pemeriksaan Keluhan Lain <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Vitamina;