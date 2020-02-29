import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


var outlineColor = {
    borderColor : '#41E8B3'
}

const PemberianMakanan = (props) =>{
    return(
        <Form>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
                    </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div>  
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Pemberian Makanan</h3>  
                    <hr
                    style={{
                        color: "#41E8B3",
                        backgroundColor: "#41E8B3",
                        height: 5
                    }}
                    />
                    <p className="text-center">Jika anak berumur kurang dari 2 tahun atau GIZI KURUS atau ANEMIA <b>DAN</b> anak tidak akan dirujuk segera</p>
                </div>
                <div className="row d-flex justify-content-center">
                    <Card style={outlineColor} className="text-center w-75 mt-3">
                        <CardBody>
                            <CardTitle className="h5"><b>Tanyakan! </b>Apakah anak mendapat makanan atau minuman lain?</CardTitle>
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
                            <hr
                                style={{
                                    color: "#41E8B3",
                                    backgroundColor: "#41E8B3",
                                    height: 1
                                }}
                            />
                            <div className="d-flex justify-content-around pt-2">
                                <div className="d-line">
                                    <h6>Jika Ya, makanan atau minuman apa?</h6>
                                    <FormGroup check className="d-inline pr-2">
                                        <input type="text"/>
                                    </FormGroup>
                                    <h6>Berapa kali sehari?</h6>
                                    <FormGroup check className="d-inline pr-2">
                                        <input type="number"/> kali
                                    </FormGroup>
                                </div>
                                <div className="d-line">
                                    <h6>Alat apa yang digunakan untuk memberi minum anak?</h6>
                                    <FormGroup check className="d-inline pr-2">
                                        <input type="text"/>
                                    </FormGroup>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                       
                </div>
            </div>
            <div className="d-flex justify-content-around mt-3">
                <Link to="PemberianMakanan1"><Button color="danger">Sebelumnya</Button></Link>
                <Link to="PemberianMakanan3"><Button color="success">Selanjutnya</Button></Link>
            </div>
        </div>
        </Form>
    );
}

export default PemberianMakanan;