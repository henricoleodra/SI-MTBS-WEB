
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

var outlineColor = {
    borderColor : '#41E8B3'
}

const Diare = (props) => {
    return(
        <Form>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
                    </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
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
                <div className="row d-flex justify-content-center">
                    <Card style={outlineColor} className="text-center w-75" >
                        <CardBody>
                            <CardTitle className="h5"><b>Tanyakan dan periksa! </b>Sudah berapa lama?(Hari)</CardTitle>
                            <FormGroup check className="d-inline pr-2">
                                <input type="number" min="1"/>
                            </FormGroup>
                        </CardBody>
                    </Card>
                    <Card style={outlineColor} className="text-center w-75 mt-3">
                        <CardBody>
                            <CardTitle className="h5"><b>Tanyakan! </b>Ada darah dalam tinja</CardTitle>
                            <FormGroup check className="d-inline pr-2">
                                <Label cek>
                                    <Input type="radio" name="radio1"/>{''}
                                    Ya
                                </Label>
                            </FormGroup>
                            <FormGroup check className="d-inline">
                                <Label cek>
                                    <Input type="radio" name="radio1"/>{''}
                                    Tidak
                                </Label>
                            </FormGroup>
                        </CardBody>
                    </Card>
                    <Card style={outlineColor} className="text-center w-75 mt-3">
                        <CardBody>
                            <CardTitle className="h5"><b>Tanyakan! </b>Keadaan umum anak</CardTitle>
                            <FormGroup check className="d-inline pr-2">
                                <Label cek>
                                    <Input type="radio" name="radio2"/>{''}
                                    Letargis / tidak sadar
                                </Label>
                            </FormGroup>
                            <FormGroup check className="d-inline">
                                <Label cek>
                                    <Input type="radio" name="radio2"/>{''}
                                    Rewel / mudah marah
                                </Label>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-3">
                <Link to="Batuk1"><Button color="danger">Batuk</Button></Link>
                <Link to="Diare2"><Button color="success">Berikutnya</Button></Link>
            </div>
        </div>
        </Form>
    );
}

export default Diare