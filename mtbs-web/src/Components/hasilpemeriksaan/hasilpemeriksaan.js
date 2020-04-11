import React, { useState } from 'react';
import {Card, Label, Row,Col, Button} from 'reactstrap';

let bold = {
    fontWeight: 'bold'
}

let outlineColorTest = {
    borderColor : '#41E8B3',
    borderWidth: '3px',
    borderRadius: '15px'
}

let squareRedTest = {
    height: '48px',
    width: '48px',
    backgroundColor: '#dc3545',
    borderRadius: '12px'
}

let squareYellowTest = {
    height: '48px',
    width: '48px',
    backgroundColor: '#ffc107',
    borderRadius: '12px'
}

let squareGreenTest = {
    height: '48px',
    width: '48px',
    backgroundColor: '#28a745',
    borderRadius: '12px'
}

let konten={
    marginTop: '0px',
    marginBottom: '0px',
}

let printPDF={
    backgroundColor: '#41E8B3',
    color: 'black',
    width: '50%'
}

const HasilPemeriksaan = (props) => {
    return(
        <div>
            <div>
                <h3 className="text-center pb-3">Tanggal 20 Januari 2020</h3>
            </div>
            <div>
                <Card style={outlineColorTest} className="mb-3">
                    <Row>
                        <Col sm="1" className="">
                            <div style={squareRedTest}></div>
                        </Col>

                        <Col sm="5" className=" pl-0 border-right border-dark" style={bold}>
                            <p className="mt-2" style={konten}>Tanda Bahaya Umum </p>
                        </Col>

                        <Col sm="6" className="text-center pl-0 mt-2" style={bold}>
                            <p style={konten}>Diare Dehidrasi Ringan / Sedang </p>
                        </Col>
                    </Row>       
                </Card>

                <Card style={outlineColorTest} className="mb-3">
                    <Row>
                        <Col sm="1" className="">
                            <div style={squareYellowTest}></div>
                        </Col>

                        <Col sm="5" className=" pl-0 border-right border-dark" style={bold}>
                            <p className="mt-2" style={konten}>Batuk </p>
                        </Col>

                        <Col sm="6" className="text-center pl-0 mt-2" style={bold}>
                            <p style={konten}>Pneumonia Ringan </p>
                        </Col>
                    </Row>       
                </Card>

                <Card style={outlineColorTest} className="mb-3">
                    <Row>
                        <Col sm="1" className="">
                            <div style={squareGreenTest}></div>
                        </Col>

                        <Col sm="5" className=" pl-0 border-right border-dark" style={bold}>
                            <p className="mt-2" style={konten}>Diare </p>
                        </Col>

                        <Col sm="6" className="text-center pl-0 mt-2" style={bold}>
                            <p style={konten}>Aman </p>
                        </Col>
                    </Row>       
                </Card>
                <Row>
                    <Col>
                    
                    </Col>
                    <Col>
                        <Button style={printPDF} className="mt-3">Print PDF</Button>
                    </Col>
                </Row>

                {/* <Card style={outlineColorTest} className="mb-3">
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
                </Card> */}
            </div>
        </div>
    );
}

export default HasilPemeriksaan