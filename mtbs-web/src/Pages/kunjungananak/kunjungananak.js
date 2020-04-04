import React, { useState } from 'react';
import {Card, CardBody, CardImg, Button, Label} from 'reactstrap';

//import components
import NavBar from './../../Components/navbar/NavBar'
import HasilPemeriksaan from './../../Components/hasilpemeriksaan/hasilpemeriksaan'

let bold = {
    fontWeight: 'bold'
}

let outlineColor = {
    borderColor : '#41E8B3',
    borderWidth: '5px',
    borderRadius: '25px',
    minHeight: "500px"
}

const DataAnak = (props) => {
    return(
        <div>
            <div>
                <NavBar/>
            </div>

            <div className="d-flex" >
                <div style={{ width: '40%'}} className="m-3">
                    <div className="m-3 text-center"> 
                        <Card style={outlineColor}>
                            <CardBody>
                                <div><img src='kidboy.jpg'></img></div>
                                <div><Label style={bold}>Berat Badan :</Label> 15 Kg</div>
                                <div><Label style={bold}>Tinggi Badan :</Label> 70 cm</div>
                                <div><Label style={bold}>Suhu :</Label> 40</div>
                                <div><Label style={bold}>Keluhan  :</Label> Sakit, Demam, Diare</div>
                                <div><Label style={bold}>Kunjungan :</Label> 3</div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="m-3">
                        <Button color="success" style={{ width: '100%'}}>Kembali ke halaman utama</Button><br></br>
                        <Button color="danger" style={{ width: '100%'}} className="mt-3">Kembali</Button>
                    </div>
                </div>
                <div style={{ width: '60%'}} className="m-3 text-center">
                    <HasilPemeriksaan/>
                </div>
            </div>
        </div>
    );
}

export default DataAnak