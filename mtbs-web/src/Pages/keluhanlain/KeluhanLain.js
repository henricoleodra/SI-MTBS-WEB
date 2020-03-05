import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


let outlineColor = {
    borderColor : '#41E8B3'
}

const Keluhan = (props) =>{
    return(
        <Form>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
                    </div> 
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Keluhan Lain</h3>
                    <hr
                    style={{
                        color: "#41E8B3",
                        backgroundColor: "#41E8B3",
                        height: 5
                    }}
                    />
                </div>
                <div className="row d-flex justify-content-center">
                    <Card style={outlineColor} className="text-center w-75 mt-3">
                        <CardBody>
                            <CardTitle className="h5"><b>Tanyakan! </b>Apakah ada keluhan lain?</CardTitle>
                            <FormGroup check className="d-inline pr-2">
                                <Label>
                                    <Input type="radio" name="radio1"/>{''}
                                    Ya
                                </Label>
                            </FormGroup>
                            <FormGroup check className="d-inline">
                                <Label>
                                    <Input type="radio" name="radio1"/>{''}
                                    Tidak
                                </Label>
                            </FormGroup>
                            <FormGroup check className="d-inline pr-2">
                                <Input type="textarea"/>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-3">
                <Link to="VitaminA"><Button color="danger"><FontAwesomeIcon icon={faChevronLeft}/> Pemeriksaan Vitamin A</Button></Link>
                <Link to="PemberianMakanan1"><Button color="success">Pemeriksaan Pemberian Makanan <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
            </div>
        </div>
        </Form>
    );
}

export default Keluhan;