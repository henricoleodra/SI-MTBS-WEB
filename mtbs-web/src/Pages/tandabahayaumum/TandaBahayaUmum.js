import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

import '../../Assets/style/style.css';

var outlineColor = {
  borderColor : '#41E8B3'
}

const TandaBahayaUmum = (props) => {

  // logic
  let[tbu1, set_tbu1] = useState();
  let[tbu_tidakBisaMinum, set_tbu_tidakBisaMinum] = useState();
  let[tbu_muntah, set_tbu_muntah] = useState();
  let[tbu_kejang, set_tbu_kejang] = useState();
  let[tbu_gelisah, set_tbu_gelisah] = useState();

//   useEffect(() => {
//     axios.get('api/TBU1', {
//       'Content-Type': 'text/plain',
//       'crossDomain': 'true'  
//     })
//     .then((res) => {
//       set_tbu1(res.data)
//     })
//     .catch((err) => {
//       console.log(err);
//       alert(err + "\nsee details in dev console\ncommon: server off");
//     })
// }, [])

const handleSubmit = event =>{
  event.preventDefault();

  // let hasil = tbu_tidakBisaMinum;
  // let hasil2 = tbu_muntah;
  // let hasil3 = tbu_kejang;
  // let hasil4 = tbu_gelisah;
  // console.log('jawaban1', hasil);
  // console.log('jawaban2', hasil2);
  // console.log('jawaban3', hasil3);
  // console.log('jawaban4', hasil4);
  alert('tersubmit')

  axios.post(`/TBU`, {
    tbu_tidakBisaMinum: tbu_tidakBisaMinum,
    tbu_muntah: tbu_muntah,
    tbu_kejang: tbu_kejang,
    tbu_gelisah: tbu_gelisah
  })
  .then(res => {
    console.log(res);
    console.log(res.data);
  })
  .catch(err=>{
    console.log(err);
  });
}

const handleAnswer1 = event =>{
  if(event.target.value == 1){
    set_tbu_tidakBisaMinum(true);
    console.log('berhasil1');
  }else if(event.target.value == 2){
    set_tbu_tidakBisaMinum(false);
    console.log('gagal1')
  }
}

const handleAnswer2 = event =>{
  if(event.target.value == 1){
    set_tbu_muntah(true);
    console.log('berhasil2');
  }else if(event.target.value == 2){
    set_tbu_muntah(false);
    console.log('gagal2')
  }
}

const handleAnswer3 = event =>{
  if(event.target.value == 1){
    set_tbu_kejang(true);
    console.log('berhasil3');
  }else if(event.target.value == 2){
    set_tbu_kejang(false);
    console.log('gagal3')
  }
}

const handleAnswer4 = event =>{
  if(event.target.value == 1){
    set_tbu_gelisah(true);
    console.log('berhasil4');
  }else if(event.target.value == 2){
    set_tbu_gelisah(false);
    console.log('gagal4')
  }
}

  return (
    <Form className="" onSubmit={handleSubmit}>
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
                          <Input type="radio" name="radio1" value={1} onChange={handleAnswer1}/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio1" value={2} onChange={handleAnswer1}/>
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
                          <Input type="radio" name="radio2" value={1} onChange={handleAnswer2}/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio2" value={2} onChange={handleAnswer2}/>
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
                          <Input type="radio" name="radio3" value={1} onChange={handleAnswer3}/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio3" value={2} onChange={handleAnswer3}/>
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
                          <Input type="radio" name="radio4" value={1} onChange={handleAnswer4}/>
                          <span style={{left:"20px"}} className="checkmark"></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1">
                    
                    </Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">Tidak
                          <Input type="radio" name="radio4" value={2} onChange={handleAnswer4}/>
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
              <Link to="TandaBahayaUmum2" style={{textDecoration: "none"}}><Button type="submit" color="success" block>Berikutnya  <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
            </Col>
          </Row>
        </div>
      </div>
    </Form>
  );
}

export default TandaBahayaUmum