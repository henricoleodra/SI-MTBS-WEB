import React, { useState } from 'react';
import {Card, CardBody, Row, Col, Button, Label} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby } from '@fortawesome/free-solid-svg-icons';

let bold = {
    fontWeight: 'bold'
}

let outlineColor = {
    borderColor : '#41E8B3',
    borderWidth: '3px',
    borderRadius: '25px'
}


const DaftarNama = (props) => {
    return(
        <div>
            <div>
            <h3 className="text-center pb-3">Riwayat Data yang Baru</h3>
            </div>
            <div style={{minHeight: "550px"}}>
                <Card style={outlineColor} className="mb-3">
                    <CardBody>
                        <div className="d-flex justify-content-around">
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faBaby} className="fa-3x"/>
                                </div>
                            </div>
                            <div className="ml-3">
                                <div><Label style={bold}>Nama Anak:</Label> Kevin Dragon</div>
                                <div><Label style={bold}>Nama Ibu :</Label> Nasus</div>
                            </div>
                            <div className="ml-3">
                                <div><Label style={bold}>Jenis Kelamin:</Label> Laki-laki</div>
                                <div><Label style={bold}>Tanggal Lahir :</Label> 25 Januari 2020</div>
                            </div>
                        </div>                 
                    </CardBody>
                </Card>
                <Card style={outlineColor} className="mb-3">
                    <CardBody>
                        <div className="d-flex justify-content-around">
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faBaby} className="fa-3x"/>
                                </div>
                            </div>
                            <div className="ml-3">
                                <div><Label style={bold}>Nama Anak:</Label> Navoy Leodra</div>
                                <div><Label style={bold}>Nama Ibu :</Label> Fani</div>
                            </div>
                            <div className="ml-3">
                                <div><Label style={bold}>Jenis Kelamin:</Label> Laki-laki</div>
                                <div><Label style={bold}>Tanggal Lahir :</Label> 25 Februari 2020</div>
                            </div>
                        </div>                 
                    </CardBody>
                </Card>
                <Card style={outlineColor} className="mb-3">
                    <CardBody>
                        <div className="d-flex justify-content-around">
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faBaby} className="fa-3x"/>
                                </div>
                            </div>
                            <div className="ml-3">
                                <div><Label style={bold}>Nama Anak:</Label> Fidelis</div>
                                <div><Label style={bold}>Nama Ibu :</Label> Tri Rahayu</div>
                            </div>
                            <div className="ml-3">
                                <div><Label style={bold}>Jenis Kelamin:</Label> Perempuan</div>
                                <div><Label style={bold}>Tanggal Lahir :</Label> 25 Maret 2020</div>
                            </div>
                        </div>                 
                    </CardBody>
                </Card>
            </div>
            <div>
                <Row>
                    <Col>
                        <Button>Sebelumnya</Button>
                    </Col>
                    <Col>
                        1   2   3
                    </Col>
                    <Col>
                        <Button>Selanjutnya</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default DaftarNama