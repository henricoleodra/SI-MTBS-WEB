import React, { useState } from 'react';
import {Card, CardBody, CardImg, Button, Label} from 'reactstrap';

//import components
import NavBar from './../../Components/navbar/NavBar'
import RiwayatDataAnak from './../../Components/riwayatdataanak/riwayatdataanak'

import '../../Assets/style/style.css';


let bold = {
    fontWeight: 'bold'
}

let outlineColor = {
    borderColor : '#41E8B3',
    borderWidth: '5px',
    borderRadius: '25px',
    minHeight: '500px',
    fontSize: '20px'
}

const DataAnak = (props) => {
    return(
        <div>
            <div>
                <NavBar/>
            </div>

            <div className="d-flex" >
                <div style={{ width: '40%'}} className="m-3 divider">
                    <div className="m-3 text-center"> 
                        <Card style={outlineColor}>
                            <CardBody>
                                <div><img src='../../Assets/image/kidboy.png'></img></div>
                                <div><Label style={bold}>Nama Anak :</Label> Harry Senjaya</div>
                                <div><Label style={bold}>Nama Ibu :</Label> Friska Christiana</div>
                                <div><Label style={bold}>Jenis Kelamin :</Label> Laki-laki</div>
                                <div><Label style={bold}>Tanngal Lahir :</Label> 1 januari 2020</div>
                                <div><Label style={bold}>Alamat :</Label> Jln. Holis No.4</div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="m-3">
                        <Button color="success" style={{ width: '100%'}}>Kembali ke halaman utama</Button><br></br>
                        <Button color="danger" style={{ width: '100%'}} className="mt-3">Kembali</Button>
                    </div>
                </div>
                <div style={{ width: '60%'}} className="m-3 text-center">
                    <RiwayatDataAnak/>
                </div>
            </div>
        </div>
    );
}

export default DataAnak