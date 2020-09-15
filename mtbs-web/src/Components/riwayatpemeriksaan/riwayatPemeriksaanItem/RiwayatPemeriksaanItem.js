import React from 'react';
import {Card, CardBody, Button, Label} from 'reactstrap';

let outlineColor = {
    borderColor : '#41E8B3',
    borderWidth: '3px',
    borderRadius: '25px',
    fontSize: '20px'
}

const RiwayatPemeriksaanItem = (props) =>{
    return(
        <Card style={outlineColor} className="mb-3">
            <CardBody>
                <div className="d-flex justify-content-around">
                    <div>
                        <div><Label className="font-weight-bold">Tanggal Pemeriksaan :</Label> {props.tanggalPemeriksaan}</div>
                        <div><Label className="font-weight-bold">Keluhan Anak :</Label> {props.keluhanAnak}</div>
                    </div>
                    <div className="ml-3 mt-2">
                        <Button color="primary">Detail</Button>
                    </div>
                </div>                 
            </CardBody>
        </Card>
    );
}

export default RiwayatPemeriksaanItem;