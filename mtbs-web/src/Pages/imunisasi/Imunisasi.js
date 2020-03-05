import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


let outlineColor = {
    borderColor : '#41E8B3'
}

const Imunisasi = (props) =>{
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
                    <h3 className="text-center font-weight-bold">Imunisasi</h3>
                    <hr
                    style={{
                        color: "#41E8B3",
                        backgroundColor: "#41E8B3",
                        height: 5
                    }}
                    />
                </div>
                <div className="row d-flex justify-content-center">
                    <Card style={outlineColor} className="text-left w-75 mt-3">
                        <CardBody>
                            <CardTitle className="h5 text-center"><b>Tanyakan! </b>Sudah diberi.....</CardTitle>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    BCG
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    HB 0
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Polio 1
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Polio 2
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Polio 3
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Polio 4
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    DPT-HB-HiB 1
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    DPT-HB-HiB 2
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    DPT-HB-HiB 3
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    IPV
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Campak
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    DPT-HB-HiB (lanjutan)
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Campak (lanjutan)
                                </Label>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-3">
                <Link to="HIV1"><Button color="danger">Pemeriksaan HIV</Button></Link>
                <Link to="VitaminA"><Button color="success">Pemeriksaan Vitamin A</Button></Link>
            </div>
        </div>
        </Form>
    );
}

export default Imunisasi;