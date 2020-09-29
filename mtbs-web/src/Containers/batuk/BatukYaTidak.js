import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import '../../Assets/style/style.css';

// Actions
import { KlasifikasiBatukChange, AnsBatukChange, compStatusChange, FlagChange } from '../../Actions';

let outlineColor = {
    borderColor : '#75C9E6'
}


const Batuk = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ansBatuk = useSelector(state => state.ansBatuk);
    let [bsb, setBsb] = useState(ansBatuk.bsb);
    
    const handleBatuk = event =>{
        if(event.target.value === '1'){
            setBsb(true);
        }
        else{
            setBsb(false);
        }
    }

const handleSubmit = event =>{
    event.preventDefault();
    if(bsb === true){
        if(ansBatuk.bsb === false){
            dispatch(KlasifikasiBatukChange('BATUK_KLASIFIKASI', ""));
            dispatch(KlasifikasiBatukChange('BATUK_STATUS', null));
        }
        dispatch(AnsBatukChange('BATUK', bsb));
        history.push("Batuk1");
    }
    else{
        dispatch(AnsBatukChange('BATUK', bsb));
        dispatch(KlasifikasiBatukChange('BATUK_KLASIFIKASI', ""));
        dispatch(KlasifikasiBatukChange('BATUK_STATUS', "info"));
        dispatch(compStatusChange('DIARE'));
        history.push("DiareYaTidak");
    }
}

    return(
        <Form onSubmit={handleSubmit}>
            <div className="w-100">
                <div className="col-12">
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
                <div style={{minHeight: "510px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75">
                            <CardBody className="d-flex justify-content-center flex-column">
                                <CardTitle className="h5"><b>Tanyakan! </b>Apakah anak batuk / sukar bernafas?</CardTitle>
                                
                                <Row className="limitCol "> 
                                    <Col  sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Ya
                                            <Input type="radio" name="radio1" value={1} onChange={handleBatuk} checked={bsb ===  true} required/>
                                            <span style={{left:"20px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Tidak
                                            <Input type="radio" name="radio1" value={2} onChange={handleBatuk} checked={bsb ===  false} />
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
                    <Link to="TandaBahayaUmum1" style={{textDecoration: "none"}}><Button block style={{width: "250px", height : "60px"}} color="danger"><FontAwesomeIcon icon={faChevronLeft}/> Pemeriksaan Tanda Bahaya Umum</Button></Link>
                </Col>
                <Col sm="4">
                    <Button type="submit" block style={{width: "250px", height : "60px"}} color="success">Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Batuk