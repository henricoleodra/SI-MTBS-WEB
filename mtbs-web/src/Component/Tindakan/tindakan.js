import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {ListGroup, ListGroupItem, Button} from 'reactstrap';

const Tindakan = (props) =>{
    return(
        <div className="d-flex flex-column mt-2">
            <div className="">
                <h3 className="text-center font-weight-bold">Tindakan</h3>
                <hr
                style={{
                    color: "#41E8B3",
                    backgroundColor: "#41E8B3",
                    height: 5,
                    width: '95%'
                }}
                />
            </div>

            <div className="d-flex justify-content-center flex-column ml-4">
                <div>
                    <h4>Tanda Bahaya Umum</h4>
                </div>
                <div>
                    <h6>Hasil Klasifikasi: Penyakit Sangat Berat</h6>
                </div>
            </div>

            <div className="d-flex justify-content-center">
            <ListGroup style={{width: '95%'}}>
                <ListGroupItem color="danger">Bila sedang kejang beri diazepam</ListGroupItem>
                <ListGroupItem color="danger">Bila ada stridor pastikan tidak ada sumbatan jalan napas</ListGroupItem>
                <ListGroupItem color="danger">Bila ada stridor, sianosis dan ujung tangan dan kaki pucat dan dingin berikan 
                    oksigen 3-5 liter/menit melalui nasai prong dengan perangkat oksigen standar (tabung O2 
                    dan humidifier)</ListGroupItem>
                <ListGroupItem color="danger">Cegah agar gula darah tidak turun</ListGroupItem>
                <ListGroupItem color="danger" className="font-weight-bold">RUJUK SEGERA</ListGroupItem>
            </ListGroup>
            </div>

            <div className="d-flex justify-content-center mt-3">
                <Link to="Klasifikasi"><Button color="danger" >Kembali ke Halaman Klasifikasi</Button></Link>
            </div>
        </div>
    );
}

export default Tindakan;