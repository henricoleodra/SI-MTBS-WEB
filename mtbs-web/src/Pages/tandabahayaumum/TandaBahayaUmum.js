import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

// Actions
import { KlasifikasiTBUChange, AnsTBUChange } from '../../Actions';


import '../../Assets/style/style.css';

var outlineColor = {
  borderColor : '#41E8B3'
}

const TandaBahayaUmum = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ansTBU = useSelector(state => state.ansTBU);
  const klasifikasiTBU = useSelector(state => state.klasifikasiTBU);
  let[tbu_tidakBisaMinum, set_tbu_tidakBisaMinum] = useState(ansTBU.tbu_tidakBisaMinum);
  let[tbu_muntah, set_tbu_muntah] = useState(ansTBU.tbu_muntah);
  let[tbu_kejang, set_tbu_kejang] = useState(ansTBU.tbu_kejang);
  let[tbu_gelisah, set_tbu_gelisah] = useState(ansTBU.tbu_gelisah);


  const handleSubmit = event =>{
    event.preventDefault();
    dispatch(AnsTBUChange('TIDAK_BISA_MINUM', tbu_tidakBisaMinum));
    dispatch(AnsTBUChange('MUNTAH', tbu_muntah));
    dispatch(AnsTBUChange('KEJANG', tbu_kejang));
    dispatch(AnsTBUChange('GELISAH', tbu_gelisah));
    axios.post(`/TBU/1`, {
      tbu_tidakBisaMinum: tbu_tidakBisaMinum,
      tbu_muntah: tbu_muntah,
      tbu_kejang: tbu_kejang,
      tbu_gelisah: tbu_gelisah
    })
    .then(res => {
      if(klasifikasiTBU.tbu_status != null){
        if(res.data.statusKlasifikasi === "danger"){
          dispatch(KlasifikasiTBUChange('TBU_KLASIFIKASI', res.data.hasilKlasifkasi));
          dispatch(KlasifikasiTBUChange('TBU_STATUS', res.data.statusKlasifikasi));
        }
        else{
          if(klasifikasiTBU.tbu_status != "danger"){
            dispatch(KlasifikasiTBUChange('TBU_KLASIFIKASI', res.data.hasilKlasifkasi));
            dispatch(KlasifikasiTBUChange('TBU_STATUS', res.data.statusKlasifikasi));
          }
        }
      }
      else{
        dispatch(KlasifikasiTBUChange('TBU_KLASIFIKASI', res.data.hasilKlasifkasi));
        dispatch(KlasifikasiTBUChange('TBU_STATUS', res.data.statusKlasifikasi));
      }      
    })
    .catch(err=>{
      console.log(err);
    });
    history.push("TandaBahayaUmum2"); 
  }

  const handleAnswer1 = event =>{
    if(event.target.value == 1){
      set_tbu_tidakBisaMinum(true);
    }else if(event.target.value == 2){
      set_tbu_tidakBisaMinum(false);
    }
  }

  const handleAnswer2 = event =>{
    if(event.target.value == 1){
      set_tbu_muntah(true);
    }else if(event.target.value == 2){
      set_tbu_muntah(false);
    }
  }

  const handleAnswer3 = event =>{
    if(event.target.value == 1){
      set_tbu_kejang(true);
    }else if(event.target.value == 2){
      set_tbu_kejang(false);
    }
  }

  const handleAnswer4 = event =>{
    if(event.target.value == 1){
      set_tbu_gelisah(true);
    }else if(event.target.value == 2){
      set_tbu_gelisah(false);
    }
  }

  return (
    <Form id="formTBU1" className="" onSubmit={handleSubmit}>
      <div className="w-100">
        <div className="col-12" >
          <div className="d-flex justify-content-center mt-3">
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
            </div>
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} className="text-muted"/>
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
                  <CardTitle className="h5 mb-2"><b>Tanyakan! </b>Tidak bisa minum/menyusu</CardTitle>
                  <Row className="limitCol "> 
                    <Col  sm="3">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">  
                        <Label className="rdoBtn">Ya
                          <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={tbu_tidakBisaMinum === true} required/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={tbu_tidakBisaMinum === false}/> 
                          <span style={{left:"0px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5 mb-2"><b>Tanyakan! </b>Memuntahkan semuanya</CardTitle>
                  <Row className="limitCol">
                    <Col sm="3">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">  
                        <Label className="rdoBtn">Ya
                          <Input type="radio" name="radio2" value={1} onChange={handleAnswer2} checked={tbu_muntah === true} required/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio2" value={2} onChange={handleAnswer2} checked={tbu_muntah === false}/>
                          <span style={{left:"0px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5 mb-2"><b>Tanyakan! </b>Kejang-kejang</CardTitle>
                  <Row className="limitCol">
                    <Col sm="3">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">  
                        <Label className="rdoBtn">Ya
                          <Input type="radio" name="radio3" value={1} onChange={handleAnswer3} checked={tbu_kejang === true} required/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio3" value={2} onChange={handleAnswer3} checked={tbu_kejang === false}/>
                          <span style={{left:"0px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5 mb-2"><b>Tanyakan! </b>Gelisah, Letargis atau tidak sadar</CardTitle>
                  <Row className="limitCol">
                    <Col sm="3">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">  
                        <Label className="rdoBtn">Ya
                          <Input type="radio" name="radio4" value={1} onChange={handleAnswer4} checked={tbu_gelisah === true} required/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio4" value={2} onChange={handleAnswer4} checked={tbu_gelisah === false}/>
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
              <Link to="#" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Data Anak</Button></Link>
            </Col>
            <Col sm="4">
              <Button type="submit" color="success" block>Berikutnya  <FontAwesomeIcon icon={faChevronRight}/></Button>
            </Col>
          </Row>
        </div>
      </div>
    </Form>
  );
}

export default TandaBahayaUmum