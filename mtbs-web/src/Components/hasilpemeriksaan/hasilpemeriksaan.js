import React, { useState } from 'react';
import {Card, CardBody, Label} from 'reactstrap';

let bold = {
    fontWeight: 'bold'
}

let outlineColor = {
    borderColor : '#41E8B3',
    borderWidth: '3px'
}

let squareRed = {
    height: '50px',
    width: '50px',
    backgroundColor: '#dc3545'
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


const HasilPemeriksaan = (props) => {
    return(
        <div>
            <div>
                <Label>Tanggal 20 Januari 2020</Label>
            </div>
            <div>
                <Card style={outlineColor} className="mb-3">
                    <div className="d-flex justify-content-between">
                        <div style={squareRed} ></div>
                        <div className="mr-4">
                            <div><Label style={bold}>Tanda Bahaya Umum</Label></div>
                        </div>
                        <div className="mr-4">
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