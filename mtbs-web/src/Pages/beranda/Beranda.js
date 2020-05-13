import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardBody, CardTitle, CardText, CardImg, Button} from 'reactstrap';

// Import Components
import NavBar from './../../Components/navbar/NavBar';

//Import Image
// import pemeriksaan from './../../Assets/image/medicine.png';
// import buku from './../../Assets/image/book.png';
// import baby from './../../Assets/image/baby.png';
import pemeriksaan from './../../Assets/image/pemeriksaan.png';
import mtbs from './../../Assets/image/mtbs-Revisi.png';
import dataanak from './../../Assets/image/data-AnakRevisi.png';

const Beranda = (props) =>{
    return(
        <div>
            <NavBar />
            <Row className="mt-3 justify-content-around" style={{width: '100%'}}>
                <Col md="3" className="">
                    <Card style={{minHeight: '530px', backgroundColor : '#41E8B3', borderColor : '#41E8B3'}} className="shadow-lg">
                        <CardTitle className="text-center text-white"><h1>Klasifikasi</h1></CardTitle>
                        <CardBody className="justify-content-center">
                            <CardImg src={pemeriksaan} width='25%' height='200px'/>
                            <CardText className="text-center mt-2">
                                Cintai buah hati dengan melakukan test kesehatan, apakah buat hati sehat, 
                                dan terimuninasi sesuai dengan waktunya.
                            </CardText>
                        </CardBody>
                        <div className="d-flex justify-content-center mb-2" >
                            <Link to="MulaiPemeriksaan" style={{textDecoration: "none"}} ><Button  color="light shadow-sm">Mulai Pemeriksaan</Button></Link>
                        </div>
                    </Card>
                </Col>
                <Col md="3" className="">
                    <Card style={{minHeight: '530px', backgroundColor : '#41E8B3', borderColor : '#41E8B3'}} className="shadow-lg">
                        <CardTitle className="text-center text-white"><h1>Apa Itu MTBS?</h1></CardTitle>
                        <CardBody className="justify-content-center">
                            <CardImg src={mtbs} width='25%' height='200px'/>
                            <CardText className="text-center mt-2">
                                MTBS adalah Manajemen Terpadu Balita Sakit yang berfungsi untuk mengecek kesehatan dari balita
                            </CardText>
                        </CardBody>
                        <div className="d-flex justify-content-center mb-2" >
                            <Link to="ApaItuMtbs" style={{textDecoration: "none"}} ><Button  color="light shadow-sm">Baca Lebih Lanjut</Button></Link>
                        </div>
                    </Card>
                </Col>
                <Col md="3" className="">
                    <Card style={{minHeight: '530px', backgroundColor : '#41E8B3', borderColor : '#41E8B3'}} className="shadow-lg">
                        <CardTitle className="text-center text-white"><h1>Riwayat Anak</h1></CardTitle>
                        <CardBody className="justify-content-center">
                            <CardImg src={dataanak} width='25%' height='200px'/>
                            <CardText className="text-center mt-2">
                                Mencari riwayat data anak yang sudah pernah melakukan pendaftaran dan pemeriksaan
                            </CardText>
                        </CardBody>
                        <div className="d-flex justify-content-center mb-2" >
                            <Link to="PencarianDataAnak" style={{textDecoration: "none"}} ><Button  color="light shadow-sm">Cari Data Anak</Button></Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>  
    );
}

export default Beranda;