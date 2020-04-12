import React from 'react';
import {Card, CardBody, Label} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby } from '@fortawesome/free-solid-svg-icons';

let outlineColor = {
    borderColor : '#41E8B3',
    borderWidth: '3px',
    borderRadius: '25px'
}

const DaftarAnakItem = (props) =>{
    return(
        <Card style={outlineColor} className="mb-3">
            <CardBody>
                <div className="d-flex justify-content-around">
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faBaby} className="fa-3x"/>
                        </div>
                    </div>
                    <div className="ml-3">
                        <div><Label className="font-weight-bold">Nama Anak : </Label> {props.namaAnak}</div>
                        <div><Label className="font-weight-bold">Nama Ibu : </Label> {props.namaIbu}</div>
                    </div>
                    <div className="ml-3">
                        <div><Label className="font-weight-bold">Jenis Kelamin : </Label> {props.jenisKelamin}</div>
                        <div><Label className="font-weight-bold">Tanggal Lahir : </Label> {props.tanggalLahir}</div>
                    </div>
                </div>                 
            </CardBody>
        </Card>
    )
}

export default DaftarAnakItem;