import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// Actions
import { KlasifikasiHIVChange, AnsHIVChange } from '../../Actions';

import '../../Assets/style/style.css';

let outlineColor = {
    borderColor : '#41E8B3'
}

const HIV = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const ansHIV = useSelector(state => state.ansHIV);
    const klasifikasiHIV = useSelector(state => state.klasifikasiHIV);
    let[hiv_bercakPutih, set_hiv_bercakPutih] = useState(ansHIV.hiv_bercakPutih);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(AnsHIVChange('BERCAK_PUTIH', hiv_bercakPutih));
        axios.post(`/HIV/3`, {
            hiv_pernahTes: ansHIV.hiv_pernahTes,
            hiv_waktuTes: ansHIV.hiv_waktuTes,
            hiv_hasilTes: ansHIV.hiv_hasilTes,
            hiv_ibuPernahTes: ansHIV.hiv_ibuPernahTes,
            hiv_ibuHasilTes: ansHIV.hiv_ibuHasilTes,
            hiv_kerabatTerdiagnosis: ansHIV.hiv_kerabatTerdiagnosis,
            hiv_kerabatMeninggal: ansHIV.hiv_kerabatMeninggal,
            hiv_masihDapatASI: ansHIV.hiv_masihDapatASI,
            hiv_bercakPutih: hiv_bercakPutih
        })
        .then(res => {
            if(klasifikasiHIV.hiv_klasifikasi != null){
                if(res.data.statusKlasifikasi === "danger"){
                    dispatch(KlasifikasiHIVChange('HIV_KLASIFIKASI', res.data.hasilKlasifkasi));
                    dispatch(KlasifikasiHIVChange('HIV_STATUS', res.data.statusKlasifikasi));
                }
                else{
                    if(klasifikasiHIV.hiv_klasifikasi != "danger"){
                        if(res.data.statusKlasifikasi === "warning" ){
                            dispatch(KlasifikasiHIVChange('HIV_KLASIFIKASI', res.data.hasilKlasifkasi));
                            dispatch(KlasifikasiHIVChange('HIV_STATUS', res.data.statusKlasifikasi));
                        }
                    }
                }
            }
            else{
                dispatch(KlasifikasiHIVChange('HIV_KLASIFIKASI', res.data.hasilKlasifikasi));
                dispatch(KlasifikasiHIVChange('HIV_STATUS', res.data.statusKlasifikasi));
            }
        })
        .catch(err=>{
            console.log(err);
        });
        history.push("Imunisasi1"); 
    }

    const handleAnswer1 = event =>{
        if(event.target.value == 1){
            set_hiv_bercakPutih(true);
        }else if(event.target.value == 2){
            set_hiv_bercakPutih(false);
        }
    }

    return(
        <Form id="formHIV3" className="" onsubmit={handleSubmit}>
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
                            <FontAwesomeIcon icon={faCircle} style = {{color: '#41E8B3'}}/>
                        </div>
                    </div>

                    <div className="mt-2">
                        <h3 className="text-center font-weight-bold">HIV</h3>
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
                                    <CardTitle className="h5"><b>Lihat! </b>Ada bercak putih di rongga mulut</CardTitle>
                                    <Row className="limitCol">
                                        <Col sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Ya
                                            <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={hiv_bercakPutih === true} required/>
                                            <span style={{left:"20px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Tidak
                                            <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={hiv_bercakPutih === false} required/>
                                            <span style={{left:"6px"}} className="checkmark"></span>
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
                    <Link to="HIV2" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/>Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                    <Link to="Imunisasi1" style={{textDecoration: "none"}}><Button color="success" block>Pemeriksaan Imunisasi<FontAwesomeIcon icon={faChevronRight}/></Button></Link>
                    </Col>
                </Row>
            </div>
        </Form>
    );
}

export default HIV;