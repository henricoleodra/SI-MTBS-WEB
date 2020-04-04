import React, { useState } from 'react';
import {Card, CardBody, Label} from 'reactstrap';

let bold = {
    fontWeight: 'bold'
}

let outlineRed = {
    borderWidth: '3px',
    borderColor:'#dc3545'
}

let outlineYellow = {
    borderWidth: '3px',
    borderColor:'#ffc107'
}

let outlineGreen = {
    borderWidth: '3px',
    borderColor:'#28a745'
}


const HasilPemeriksaan = (props) => {
    return(
        <div>
            <div>
                <Label>Tanggal 20 Januari 2020</Label>
            </div>
            <div>
                <Card style={outlineRed} className="mb-3">
                    <CardBody>
                        <div className="d-flex justify-content-around">
                            <div>
                                <div><Label style={bold}>Tanda Bahaya Umum</Label></div>
                            </div>
                            <div className="ml-3">
                                <div><Label style={bold}>Aman</Label></div>
                            </div>
                        </div>                 
                    </CardBody>
                </Card>
                <Card style={outlineYellow} className="mb-3">
                    <CardBody>
                        <div className="d-flex justify-content-around">
                            <div>
                                <div><Label style={bold}>Demam</Label></div>
                            </div>
                            <div className="ml-3">
                                <div><Label style={bold}>Malaria</Label></div>
                            </div>
                        </div>                 
                    </CardBody>
                </Card>
                <Card style={outlineGreen} className="mb-3">
                    <CardBody>
                        <div className="d-flex justify-content-around">
                            <div>
                                <div><Label style={bold}>Diare</Label></div>
                            </div>
                            <div className="ml-3">
                                <div><Label style={bold}>Bahaya</Label></div>
                            </div>
                        </div>                 
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default HasilPemeriksaan