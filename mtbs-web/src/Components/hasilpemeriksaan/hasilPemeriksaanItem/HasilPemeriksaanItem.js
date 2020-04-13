import React, { useState } from 'react';
import { Card, Row, Col } from 'reactstrap';


let outlineColorTest = {
    borderColor : '#41E8B3',
    borderWidth: '3px',
    borderRadius: '15px'
}

let squareStatus = {
    height: '48px',
    width: '48px',
    borderRadius: '12px'
}

let konten={
    marginTop: '0px',
    marginBottom: '0px',
}


const HasilPemeriksaanItem = (props) =>{
    let colorIndicator;
    if(props.status === "bahaya"){
        colorIndicator = "bg-danger";
    }
    else if(props.status === "perhatikan"){
        colorIndicator = "bg-warning";
    }
    else {
        colorIndicator = "bg-success";
    }
    return(
        <Card style={outlineColorTest} className="mb-3">
            <Row>
                <Col sm="1">
                    <div style={squareStatus} className={colorIndicator}></div>
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