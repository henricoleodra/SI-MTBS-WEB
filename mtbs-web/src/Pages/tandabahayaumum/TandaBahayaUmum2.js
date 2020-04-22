import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

import '../../Assets/style/style.css';

// Actions
import { KlasifikasiTBUChange, AnsTBUChange } from '../../Actions';


var outlineColor = {
  borderColor : '#41E8B3'
}

const TandaBahayaUmum2 = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ansTBU = useSelector(state => state.ansTBU);
  let[tbu_letargis, set_tbu_letargis] = useState(ansTBU.tbu_letargis);
  let[tbu_stridor, set_tbu_stridor] = useState(ansTBU.tbu_stridor);
  let[tbu_sianosis, set_tbu_sianosis] = useState(ansTBU.tbu_sianosis);
  let[tbu_pucatDingin, set_tbu_pucatDingin] = useState(ansTBU.tbu_pucatDingin);

  
  const handleSubmit = event =>{
    event.preventDefault();
    dispatch(AnsTBUChange('LETARGIS', tbu_letargis));
    dispatch(AnsTBUChange('STRIDOR', tbu_stridor));
    dispatch(AnsTBUChange('SIANOSIS', tbu_sianosis));
    dispatch(AnsTBUChange('PUCAT_DINGIN', tbu_pucatDingin));
    axios.post(`/TBU/2`, {
      tbu_tidakBisaMinum: ansTBU.tbu_tidakBisaMinum,
      tbu_muntah: ansTBU.tbu_muntah,
      tbu_kejang: ansTBU.tbu_kejang,
      tbu_gelisah: ansTBU.tbu_gelisah,
      tbu_letargis: tbu_letargis,
      tbu_stridor: tbu_stridor,
      tbu_sianosis: tbu_sianosis,
      tbu_pucatDingin: tbu_pucatDingin
    })
    .then(res => {
      dispatch(KlasifikasiTBUChange('TBU_KLASIFIKASI', res.data.hasilKlasifkasi));
      dispatch(KlasifikasiTBUChange('TBU_STATUS', res.data.statusKlasifikasi));
    })
    .catch(err=>{
      console.log(err);
    });
    history.push("BatukYaTidak"); 
  }

  const handleAnswer1 = event =>{
    if(event.target.value == 1){
      set_tbu_letargis(true);
    }else{
      set_tbu_letargis(false);
    }
  }

  const handleAnswer2 = event =>{
    if(event.target.value == 1){
      set_tbu_stridor(true);
    }else{
      set_tbu_stridor(false);
    }
  }

  const handleAnswer3 = event =>{
    if(event.target.value == 1){
      set_tbu_sianosis(true);
    }else{
      set_tbu_sianosis(false);
    }
  }

  const handleAnswer4 = event =>{
    if(event.target.value == 1){
      set_tbu_pucatDingin(true);
    }else{
      set_tbu_pucatDingin(false);
    }
  }


  return (
    <Form onSubmit={handleSubmit}>
      <div className="w-100">
        <div className="col-12">
          <div className="d-flex justify-content-center mt-3">
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle}  className="text-muted"/>
            </div>
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
            </div> 
          </div>
          <div className="mt-2">
            <h3 className="text-center font-weight-bold">Tanda Bahaya Umum</h3>
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
                  <CardTitle className="h5 mb-2"><b>Tanyakan! </b>Apakah anak letargis atau tidak sadar</CardTitle>
                  <Row className="limitCol "> 
                    <Col  sm="3">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">  
                        <Label className="rdoBtn">Ya
                          <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={tbu_letargis === true} required/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={tbu_letargis === false}/> 
                          <span style={{left:"0px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5 mb-2"><b>Tanyakan! </b>Apakah anak stridor</CardTitle>
                  <Row className="limitCol">
                    <Col sm="3">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">  
                        <Label className="rdoBtn">Ya
                          <Input type="radio" name="radio2" value={1} onChange={handleAnswer2} checked={tbu_stridor === true} required/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio2" value={2} onChange={handleAnswer2} checked={tbu_stridor === false}/>
                          <span style={{left:"0px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5 mb-2"><b>Tanyakan! </b>Apakah anak berwarna biru(sianosis)</CardTitle>
                  <Row className="limitCol">
                    <Col sm="3">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">  
                        <Label className="rdoBtn">Ya
                          <Input type="radio" name="radio3" value={1} onChange={handleAnswer3} checked={tbu_sianosis === true} required/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio3" value={2} onChange={handleAnswer3} checked={tbu_sianosis === false}/>
                          <span style={{left:"0px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5 mb-2"><b>Tanyakan! </b>Apakah ujung tangan dan kaki pucat dan dingin</CardTitle>
                  <Row className="limitCol">
                    <Col sm="3">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">  
                        <Label className="rdoBtn">Ya
                          <Input type="radio" name="radio4" value={1} onChange={handleAnswer4} checked={tbu_pucatDingin === true} required/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio4" value={2} onChange={handleAnswer4} checked={tbu_pucatDingin === false}/>
                          <span style={{left:"0px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Row>
          </div>
          
          <Row className="justify-content-between px-5 py-0">
            <Col sm="4">
              <Link to="TandaBahayaUmum1" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
            </Col>
            <Col sm="4">
              <Button type="submit" color="success" block >Pemeriksaan Batuk <FontAwesomeIcon icon={faChevronRight}/></Button>
            </Col>
          </Row>
        </div>
      </div>
    </Form>
  );
}

export default TandaBahayaUmum2