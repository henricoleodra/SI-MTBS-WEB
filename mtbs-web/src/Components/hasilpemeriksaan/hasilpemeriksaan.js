import React, { useState } from 'react';
import {Card, CardBody, Label, Row,Col} from 'reactstrap';

let bold = {
    fontWeight: 'bold'
}

let outlineColor = {
    borderColor : '#41E8B3',
    borderWidth: '3px'
}

let outlineColorTest = {
    borderColor : '#41E8B3',
    borderWidth: '3px',
    borderRadius: '15px'
}

let squareRed = {
    height: '50px',
    width: '50px',
    backgroundColor: '#dc3545'
}

let squareRedTest = {
    height: '48px',
    width: '48px',
    backgroundColor: '#dc3545',
    borderRadius: '12px'
}

let squareYellow = {
    height: '50px',
    width: '50px',
    backgroundColor: '#ffc107'
}

let squareGreen = {
    height: '50px',
    width: '50px',
    backgroundColor: '#28a745'
}

let konten={
    marginTop: '0px',
    marginBottom: '0px',
}


const HasilPemeriksaan = (props) => {
    return(
        <div>
            <div>
                <Label>Tanggal 20 Januari 2020</Label>
            </div>
            <div>
                <Card style={outlineColorTest} className="mb-3">
                    <Row>
                        <Col sm="1" className="border-right border-dark">
                            <div style={squareRedTest}></div>
                        </Col>

                        <Col sm="5" className=" pl-0 pr-0 border-right border-dark" style={bold}>
                            <div className="text-left pl-1">
                                <span className="" style={konten}>Tanda Bahaya Umum</span>
                            </div>
                        </Col>

                        <Col sm="6" className="text-right pl-0 mb-auto mt-auto" style={bold}>
                            <p style={konten}>Diare Dehidrasi Ringan / Sedang </p>
                        </Col>
                    </Row>       
                </Card>


                <Card style={outlineColorTest} className="mb-3">
                    <div className="d-flex justify-content-between">
                        <div style={squareRedTest} ></div>
                        <div className="mr-4">
                            <div><Label style={bold}>Tanda Bahaya Umum</Label></div>
                        </div>
                        <div className="mr-3">
                            <div><Label style={bold}>Aman</Label></div>
                        </div>
                    </div>                 
                </Card>
                <Card style={outlineColor} className="mb-3">
                    <div className="d-flex justify-content-between">
                        <div style={squareYellow}></div>
                        <div className="mr-4">
                            <div><Label style={bold}>Demam</Label></div>
                        </div>
                        <div className="mr-3">
                            <div><Label style={bold}>Malaria</Label></div>
                        </div>
                    </div>                 
                </Card>
                <Card style={outlineColor} className="mb-3">
                    <div className="d-flex justify-content-between">
                        <div style={squareGreen}></div>
                        <div className="mr-4">
                            <div><Label style={bold}>Diare</Label></div>
                        </div>
                        <div className="mr-4">
                            <div><Label style={bold}>Bahaya</Label></div>
                        </div>
                    </div>                 
                </Card>
            </div>
        </div>
    );
}

export default HasilPemeriksaan