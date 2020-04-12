import React, { useState } from 'react';
import { Card, Row, Col } from 'reactstrap';


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

const HasilPemeriksaanItem = (props) =>{
    return(
        <Card style={outlineColorTest} className="mb-3">
            <Row>
                <Col sm="1">
                    <div style={{squareRedTest}}></div>
                </Col>

                <Col sm="5" className=" pl-0 border-right border-dark font-weight-bold">
                    <p className="mt-2" style={konten}>{props.kategori}</p>
                </Col>

                <Col sm="6" className="text-center pl-0 mt-2 font-weight-bold">
                    <p style={konten}>{props.klasifikasi}</p>
                </Col>
            </Row>       
        </Card>
    );
}

export default HasilPemeriksaanItem;