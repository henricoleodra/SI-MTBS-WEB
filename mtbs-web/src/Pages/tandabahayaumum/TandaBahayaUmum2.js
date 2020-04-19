import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

import '../../Assets/style/style.css';


var outlineColor = {
  borderColor : '#41E8B3'
}

const TandaBahayaUmum2 = (props) => {
  //logic
  let[tbu2, set_tbu2] = useState();
  let[tbu_stridor, set_tbu_stridor] = useState();
  let[tbu_pucatDingin, set_tbu_pucatDingin] = useState();

  //   useEffect(() => {
//     axios.get('api/TBU2', {
//       'Content-Type': 'text/plain',
//       'crossDomain': 'true'  
//     })
//     .then((res) => {
//       set_tbu2(res.data)
//     })
//     .catch((err) => {
//       console.log(err);
//       alert(err + "\nsee details in dev console\ncommon: server off");
//     })
// }, [])

  const handleSubmit = event =>{
    event.preventDefault();

    let hasilStridor = tbu_stridor;
    let hasilPucatDingin = tbu_pucatDingin;

    console.log('hasilStridor', hasilStridor);
    console.log('hasilPucatDingin', hasilPucatDingin);
      // axios.post('api/sendTBU2', {
  //   tbu_stridor: tbu_stridor,
  //   tbu_pucatDingin: tbu_pucatDingin,

  // .then(res => {
  //   console.log(res);
  //   console.log(res.data);
  // })
  }

const handleAnswer1 = event =>{
  if(event.target.value == 1){
    set_tbu_stridor(true);
    console.log('berhasil1');
  }else{
    set_tbu_stridor(false);
    console.log('gagal1');
  }
}

const handleAnswer2 = event =>{
  if(event.target.value == 1){
    set_tbu_pucatDingin(true);
    console.log('berhasil2');
  }else{
    set_tbu_pucatDingin(false);
    console.log('gagal2');
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
                  <CardTitle className="h5"><b>Tanyakan! </b>Ada stridor</CardTitle>
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
                  <CardTitle className="h5"><b>Tanyakan! </b>ujung tangan dan kaki pucat dan dingin</CardTitle>
                  <Row className="limitCol "> 
                    <Col  sm="3">
                    
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
            </Row>
          </div>
          
          <Row className="justify-content-between px-5 py-0">
            <Col sm="4">
              <Link to="TandaBahayaUmum1" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
            </Col>
            <Col sm="4">
              <Link to="BatukYaTidak" style={{textDecoration: "none"}}><Button type="submit" color="success" block >Pemeriksaan Batuk <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
            </Col>
          </Row>
        </div>
      </div>
    </Form>
  );
}

export default TandaBahayaUmum2