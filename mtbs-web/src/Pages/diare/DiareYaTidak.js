import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../../Assets/style/style.css';

// Actions
import { KlasifikasiDiareChange, AnsDiareChange, compStatusChange } from '../../Actions';

let outlineColor = {
    borderColor : '#41E8B3'
}

let bgColor ={
    backgroundColor : '#41E8B3',
    color: 'white'
}

const Diare = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ansDiare = useSelector(state => state.ansDiare);
    let [diare, setDiare] = useState(ansDiare.diare);
    
    const handleDiare = event =>{
        if(event.target.value == 1){
            setDiare(true);
        }
        else{
            setDiare(false);
        }
    }

    const handleSubmit = event =>{
        event.preventDefault();
        if(diare == true){
            if(ansDiare.diare === false){
                dispatch(KlasifikasiDiareChange('DIARE_KLASIFIKASI', ""));
                dispatch(KlasifikasiDiareChange('DIARE_STATUS', null));
            }
            dispatch(AnsDiareChange('DIARE', diare));
            history.push("Diare1");
        }
        else{
            dispatch(AnsDiareChange('DIARE', diare));
            dispatch(KlasifikasiDiareChange('DIARE_KLASIFIKASI', ""));
            dispatch(KlasifikasiDiareChange('DIARE_STATUS', "info"));
            dispatch(compStatusChange('DEMAM'));
            history.push("DemamYaTidak");
        }
    }
    return(
        <Form onSubmit={handleSubmit}>
            <div className="w-100">
                <div className="col-12">
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
                <div style={{minHeight: "510px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75" >
                            <CardBody className="d-flex justify-content-center flex-column">
                                <CardTitle className="h5"><b>Tanyakan! </b>Apakah anak diare?</CardTitle>
                                <Row className="limitCol "> 
                                    <Col  sm="3">
                                    
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Ya
                                            <Input type="radio" name="radio1" value={1} onChange={handleDiare} checked={diare === true}/>
                                            <span style={{left:"20px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Tidak
                                            <Input type="radio" name="radio1" value={2} onChange={handleDiare} checked={diare === false}/>
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
                    <Link to="BatukYaTidak" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Pemeriksaan Batuk</Button></Link>
                </Col>
                <Col sm="4">
                    <Button color="success" block>Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default Diare