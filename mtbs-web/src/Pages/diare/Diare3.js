import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// Actions
import { KlasifikasiDiareChange, AnsDiareChange } from '../../Actions';

import '../../Assets/style/style.css';

let outlineColor = {
    borderColor : '#41E8B3'
}

const Diare3 = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ansDiare = useSelector(state=> state.ansDiare);
    let[diare_isNotMinum, set_diare_isNotMinum] = useState(ansDiare.diare_isNotMinum);
    let[diare_kulitPerutLambat, set_diare_kulitPerutLambat]=useState(ansDiare.diare_kulitPerutLambat);
    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(AnsDiareChange('TIDAK_MINUM', diare_isNotMinum));
        dispatch(AnsDiareChange('KULIT_PERUT_LAMBAT', diare_kulitPerutLambat));

        axios.post(`/Diare/3`,{
            diare_berapaLama: ansDiare.diare_berapaLama,
            diare_tinjaBerdarah: ansDiare.diare_tinjaBerdarah,
            diare_isAnakTidakSadar: ansDiare.diare_isAnakTidakSadar,
            diare_rewelMudahMarah: ansDiare.diare_rewelMudahMarah,
            diare_isMataCekung: ansDiare.diare_isMataCekung,
            diare_isNotMinum: diare_isNotMinum,
            diare_kulitPerutLambat: diare_kulitPerutLambat
        })
        .then(res =>{
            dispatch(KlasifikasiDiareChange('DIARE_KLASIFIKASI', res.data.hasilKlasifikasi));
            console.log(res.data.hasilKlasifikasi);
            dispatch(KlasifikasiDiareChange('DIARE_STATUS', res.data.statusKlasifikasi));
        })
        .catch(err=>{
            console.log(err);
        });
        history.push("DemamYaTidak");
    }

    const handleAnswer1 = event =>{
        if(event.target.value == 1){
            set_diare_isNotMinum(true);
        }else{
            set_diare_isNotMinum(false);
        }
    }

    const handleAnswer2 = event =>{
        if(event.target.value ==='SangatLambat'){
            set_diare_kulitPerutLambat('SangatLambat');
        }else if(event.target.value ==='Lambat'){
            set_diare_kulitPerutLambat('Lambat');
        }else{
            set_diare_kulitPerutLambat('Normal');
        }
    }

    return(
        <Form id="formDiare3" onSubmit={handleSubmit}>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
                    </div> 
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Diare</h3>
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
                                <CardTitle className="h5"><b>Tanyakan! </b>Beri anak minum</CardTitle>
                                <Row className="limitCol "> 
                                    <Col sm="7">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn" style={{ fontSize: "18px"}}>Tidak bisa minum / malas minum
                                            <Input type="radio" value={1} onChange={handleAnswer1} checked={diare_isNotMinum === true} name="radio1" required/>
                                            <span style={{top:"1px", left:"1px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="5">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn" style={{ fontSize: "18px"}}>Haus, minum dengan lahap
                                            <Input type="radio" value={2} onChange={handleAnswer1} checked={diare_isNotMinum === false} name="radio1" required/> 
                                            <span style={{top:"1px", left:"-25px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Cubit kulit perut, apakah kembalinya : </CardTitle>
                                <Row className="limitCol "> 
                                    <Col sm="12">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">
                                                <Col sm= "11" style={{left:"-17px"}}>Sangat lambat (lebih dari 2 detik)</Col>
                                                <Input value={'SangatLambat'} onChange={handleAnswer2} checked={diare_kulitPerutLambat === 'SangatLambat'} type="radio" name="radio2" required/>
                                                <span style={{left:"70px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="limitCol ">
                                    <Col sm="12">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Lambat(masih sempat terlihat lipatan kulit)
                                                <Input type="radio" name="radio2" value={'Lambat'} onChange={handleAnswer2} checked={diare_kulitPerutLambat === 'Lambat'}/>
                                                <span style={{left:"70px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="limitCol ">
                                    <Col sm="12">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">
                                                <Col sm="6" style={{left:"-13px"}}>Normal</Col>
                                                <Input type="radio" name="radio2" value={'Normal'} onChange={handleAnswer2} checked={diare_kulitPerutLambat === 'Normal'}/> 
                                                <span style={{left:"70px"}} className="checkmark"></span>
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
                    <Link to="Diare2" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    <Button type="submit" color="success" block> Pemeriksaan Demam <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Diare3