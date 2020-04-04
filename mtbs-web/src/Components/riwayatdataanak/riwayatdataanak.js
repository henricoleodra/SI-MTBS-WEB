import React, { useState } from 'react';
import {Card, CardBody, Row, Col, CardTitle, Button, Label} from 'reactstrap';

let bold = {
    fontWeight: 'bold'
}

let outlineColor = {
    borderColor : '#41E8B3',
    borderWidth: '3px',
    borderRadius: '25px'
}

const DataAnak = (props) => {
    return(
        <div>
            <div>
                <Label>Riwayat Data ada sebanyak 3</Label>
            </div>
            <div style={{minHeight: "550px"}}>
                <Card style={outlineColor} className="mb-3">
                    <CardBody>
                        <div className="d-flex justify-content-around">
                            <div>
                                <div><Label style={bold}>Tanggal Pemeriksaan :</Label> 20 Januari 2020</div>
                                <div><Label style={bold}>Keluhan Anak :</Label> Sakit, Demam, Diare</div>
                            </div>
                            <div className="ml-3 mt-2">
                                <Button color="success">Baca Lebih Lanjut</Button>
                            </div>
                        </div>                 
                    </CardBody>
                </Card>
                <Card style={outlineColor} className="mb-3">
                    <CardBody>
                        <div className="d-flex justify-content-around">
                            <div>
                                <div><Label style={bold}>Tanggal Pemeriksaan :</Label> 1 Januari 2020</div>
                                <div><Label style={bold}>Keluhan Anak :</Label> Demam, Diare</div>
                            </div>
                            <div className="ml-3 mt-2">
                                <Button color="success">Baca Lebih Lanjut</Button>
                            </div>
                        </div>                 
                    </CardBody>
                </Card>
                <Card style={outlineColor} className="mb-3">
                    <CardBody>
                        <div className="d-flex justify-content-around">
                            <div>
                                <div><Label style={bold}>Tanggal Pemeriksaan :</Label> 20 Desember 2020</div>
                                <div><Label style={bold}>Keluhan Anak :</Label> Diare</div>
                            </div>
                            <div className="ml-3 mt-2">
                                <Button color="success">Baca Lebih Lanjut</Button>
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

export default DataAnak