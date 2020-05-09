import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// Actions
import { KlasifikasiDemamChange, AnsDemamChange } from '../../Actions';
import '../../Assets/style/style.css';

var outlineColor = {
    borderColor: '#41E8B3'
}

const Demam = (props) => {
    // const history = useHistory();
    // const dispatch = useDispatch();
    // const ansDiare = useSelector(state => state.ansDemam);
    // const klasifikasiDiare = useSelector(state => state.klasifikasiDemam);
    // let[demam_isLukaMulut, set_demam_isLukaMulut] = useState(ansDemam.demam_isLukaMulut);
    // let[demam_descLukaMulut, set_demam_descLukaMulut] = useState(ansDemam.demam_descLukaMulut);
    // let[demam_nanahDiMata, set_demam_nanahDiMata] = useState(ansDemam.demam_nanahDiMata);
    // let[demam_korneaKeruh, set_demam_korneaKeruh] = useState(ansDemam.demam_korneaKeruh);

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     axios.post(`/Demam`, {
    //         ansDemam : ansDemam
    //     })
    //     .then(res => {
    //         dispatch(KlasifikasiDemamChange('DEMAM_KLASIFIKASI', res.data.hasilKlasifkasi));
    //         dispatch(KlasifikasiDemamChange('DEMAM_STATUS', res.data.statusKlasifikasi));
    //     })
    //     .catch(err=>{
    //     console.log(err);
    //     });
    //     dispatch(KlasifikasiDemamChange('Demam_6', true));
    //     history.push("Demam7"); 
    //     dispatch(compStatusChange('TELINGA'));
    // }
    // const handleAnswer1 = event =>{
    //     if(event.target.value == 1){
    //         set_demam_isLukaMulut(true);
    //         dispatch(AnsDemamChange('LUKA_MULUT', true));
    //     }else{
    //         set_demam_isLukaMulut(false);
    //         dispatch(AnsDemamChange('LETARGIS', false));
    //     }
    // }

    // const handleAnswer2 = event =>{
    //     if(event.target.value == 1){
    //         set_demam_isLukaMulut(true);
    //         dispatch(AnsDemamChange('LUKA_MULUT', true));
    //     }else{
    //         set_demam_isLukaMulut(false);
    //         dispatch(AnsDemamChange('LETARGIS', false));
    //     }
    // }

    // const handleAnswer3 = event =>{
    //     if(event.target.value == 1){
    //         set_demam_isLukaMulut(true);
    //         dispatch(AnsDemamChange('LUKA_MULUT', true));
    //     }else{
    //         set_demam_isLukaMulut(false);
    //         dispatch(AnsDemamChange('LETARGIS', false));
    //     }
    // }

    // const handleAnswer4 = event =>{
    //     if(event.target.value == 1){
    //         set_demam_isLukaMulut(true);
    //         dispatch(AnsDemamChange('LUKA_MULUT', true));
    //     }else{
    //         set_demam_isLukaMulut(false);
    //         dispatch(AnsDemamChange('LETARGIS', false));
    //     }
    // }

    return (
        <Form /**onSubmit={handleSubmit}**/>
            <div className="w-100">
                <div className="col-12">
                    <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle}  className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} style={{ color: '#41E8B3' }} />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-center font-weight-bold">Campak dalam 3 Bulan Terakhir</h3>
                        <hr
                            style={{
                                color: "#41E8B3",
                                backgroundColor: "#41E8B3",
                                height: 5
                            }}
                        />
                        {/* <p className="text-center"><b>Jika anak sakit campak saat ini atau dalam 3 bulan terakhir</b></p> */}
                    </div>
                    <div style={{minHeight: "475px"}}>
                        <Row className="justify-content-around">
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Lihat! </b>Adanya luka di mulut</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio1" /**value={1} onChange={handleAnswer1} checked={demam_isLukaMulut === true}**/ required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio1" /**value={2} onChange={handleAnswer1} checked={demam_isLukaMulut === false}**/ /> 
                                                <span style={{left:"5px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div>
                                        <h6><b>Lihat dan Amati!</b> Apakah luka luas atau dalam ?(bisa dipilih keduanya)</h6>
                                        <Row className="limitCol "> 
                                            <Col  sm="3">
                                            
                                            </Col>
                                            <Col sm="3">
                                                <FormGroup className="d-inline pr-2">  
                                                    <Label style={{left:"14px"}} className="chckBtn">Dalam
                                                    <Input type="checkbox" name="checkBox1" /**value={1} onChange={handleAnswer2} checked={demam_descLukaMulut === true}**/ required/>
                                                    <span style={{left:"3px"}} className="checkmarkBox"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col sm="1">
                                            
                                            </Col>
                                            <Col sm="3">
                                                <FormGroup className="d-inline">
                                                    <Label style={{left:"-7px"}} className="chckBtn">Luas
                                                    <Input type="checkbox" name="checkBox1" /**value={2} onChange={handleAnswer2} checked={demam_descLukaMulut === false}**/ /> 
                                                    <span style={{left:"12px"}} className="checkmarkBox"></span>
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Lihat! </b>Adanya nanah di mata</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio3" /**value={1} onChange={handleAnswer3} checked={demam_nanahDiMata === true}**/ required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio3" /**value={2} onChange={handleAnswer3} checked={demam_nanahDiMata === false}**/ /> 
                                                <span style={{left:"5px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5"><b>Lihat! </b>Adanya kekeruhan di kornea</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col  sm="3">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn">Ya
                                                <Input type="radio" name="radio4" /**value={1} onChange={handleAnswer4} checked={demam_korneaKeruh === true}**/ required/>
                                                <span style={{left:"20px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                        
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn">Tidak
                                                <Input type="radio" name="radio4" /**value={2} onChange={handleAnswer4} checked={demam_korneaKeruh === false}**/ /> 
                                                <span style={{left:"5px"}} className="checkmark"></span>
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
                        <Link to="Demam5" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Button type="submit" color="success" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                    </Col>
                </Row>
            </div>
        </Form>
    )
}
export default Demam;